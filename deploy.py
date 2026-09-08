import os
import sys
import json
import hashlib
import urllib.request
import urllib.error

# Ensure UTF-8 or safe stdout on Windows
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

def upload_file_to_vercel(token, file_bytes, sha1_hex):
    url = "https://api.vercel.com/v2/files"
    headers = {
        "Authorization": f"Bearer {token.strip()}",
        "Content-Type": "application/octet-stream",
        "Content-Length": str(len(file_bytes)),
        "x-vercel-digest": sha1_hex
    }
    req = urllib.request.Request(url, data=file_bytes, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req) as resp:
            return resp.status in (200, 201)
    except urllib.error.HTTPError as e:
        if e.code == 409: # Already uploaded / exists
            return True
        print(f"  [!] Failed to upload sha {sha1_hex}: {e.read().decode('utf-8', errors='ignore')}")
        return False

def deploy(token, project_name="music2d-vinyl-player"):
    api_url = "https://api.vercel.com/v13/deployments"
    web_dir = os.path.dirname(os.path.abspath(__file__))
    
    upload_files = ['index.html', 'styles.css', 'app.js', 'vercel.json', 'package.json', 'vinylplayer.apk']
    files_payload = []
    
    print(f"[*] Packaging web files from: {web_dir}")
    for fname in upload_files:
        fpath = os.path.join(web_dir, fname)
        if not os.path.exists(fpath):
            continue
            
        with open(fpath, 'rb') as f:
            content = f.read()
            
        sha1 = hashlib.sha1(content).hexdigest()
        size = len(content)
        
        if size > 1024 * 1024:
            print(f"  + Uploading large asset {fname} ({size} bytes, sha: {sha1[:8]}...)...")
            uploaded = upload_file_to_vercel(token, content, sha1)
            if not uploaded:
                print(f"  [!] Skipping {fname} due to upload error.")
                continue
            files_payload.append({
                "file": fname,
                "sha": sha1,
                "size": size
            })
            print(f"  [OK] Uploaded {fname}")
        else:
            files_payload.append({
                "file": fname,
                "sha": sha1,
                "size": size
            })
            upload_file_to_vercel(token, content, sha1)
            print(f"  + Indexed {fname} ({size} bytes)")

    payload = {
        "name": project_name,
        "files": files_payload,
        "projectSettings": {
            "framework": None
        }
    }
    
    headers = {
        "Authorization": f"Bearer {token.strip()}",
        "Content-Type": "application/json"
    }

    req = urllib.request.Request(api_url, data=json.dumps(payload).encode('utf-8'), headers=headers, method="POST")
    
    print("[*] Creating deployment on Vercel...")
    try:
        with urllib.request.urlopen(req) as response:
            res_body = response.read().decode('utf-8')
            data = json.loads(res_body)
            deploy_url = data.get("url")
            deploy_id = data.get("id")
            print("\n========================================================")
            print("DEPLOYMENT CREATED!")
            print(f"Preview URL: https://{deploy_url}")
            print("========================================================")

            # Wait for deployment readiness
            import time
            target_alias = "music2d-vinyl-player.vercel.app"
            print(f"[*] Waiting for deployment to become READY...")
            for i in range(15):
                time.sleep(2)
                try:
                    chk_req = urllib.request.Request(f"https://api.vercel.com/v13/deployments/{deploy_id or deploy_url}", headers=headers)
                    with urllib.request.urlopen(chk_req) as chk_resp:
                        chk_data = json.loads(chk_resp.read().decode('utf-8'))
                        state = chk_data.get("readyState") or chk_data.get("status")
                        print(f"  + Deployment State: {state}")
                        if state in ("READY", "ready"):
                            break
                except Exception as e:
                    pass

            # Assign production alias
            print(f"[*] Assigning production alias: {target_alias}...")
            try:
                alias_req = urllib.request.Request(
                    f"https://api.vercel.com/v2/deployments/{deploy_id or deploy_url}/aliases",
                    data=json.dumps({"alias": target_alias}).encode('utf-8'),
                    headers=headers,
                    method="POST"
                )
                with urllib.request.urlopen(alias_req) as alias_resp:
                    print(f"\n========================================================")
                    print(f"PRODUCTION URL ACTIVE: https://{target_alias}")
                    print("========================================================")
            except Exception as e:
                print(f"[!] Alias warning: {e}")

            return f"https://{target_alias}"
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode('utf-8', errors='ignore')
        print(f"\n[ERROR] Deployment failed ({e.code}): {err_msg}")
        return None
    except Exception as e:
        print(f"\n[ERROR] An unexpected error occurred: {e}")
        return None

if __name__ == "__main__":
    token = sys.argv[1] if len(sys.argv) > 1 else ""
    if token:
        deploy(token)
    else:
        print("Usage: python deploy.py <VERCEL_TOKEN>")
