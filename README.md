# MUSIC2D - Vinyl Player Web Application

A pixel-accurate web adaptation of the **MUSIC2D Vinyl Player**, designed from the Light Mode and Dark Mode reference designs and optimized for immediate deployment to [Vercel](https://vercel.com).

## 🌟 Features Included

- **1:1 Visual Match**: Rebuilt directly from the provided reference designs:
  - Light Mode (`media_1788431242031.jpg` style)
  - Dark Mode (`media_1788431242173.jpg` style)
- **Instant Theme Toggle**: Smooth switch between Light and Dark mode using the Sun/Moon button on the top-right header.
- **Realistic Turntable Physics**:
  - Heavy brushed aluminum chassis with corner screws & inset platter.
  - Authentic Technics-style perimeter strobe markings.
  - Vinyl disc with specular reflections and micro-grooves that spins at 33⅓ RPM / 45 RPM.
  - Pivoting tonearm that smoothly drops onto the record when music plays, and swings back to rest position when paused.
- **Interactive Audio Engine**:
  - Generative Web Audio vintage lo-fi synth chords & warm analog vinyl crackle.
  - Drag-and-drop support: Drop any MP3 or WAV file onto the turntable to play your own music!
  - Clickable audio waveform visualizer for instant seeking.
- **Direct APK Download**: Integrated `APK` button in the header serving `vinylplayer.apk` for mobile visitors.

---

## 🚀 How to Deploy to Vercel

### Method 1: Push to GitHub & Deploy on Vercel (Recommended)
1. Push this `web/` directory (or the whole repository) to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: initial MUSIC2D webview for vercel"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/VinylPlayer.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** $\to$ **"Project"**.
4. Import your GitHub repository.
5. In the **Root Directory** field, select `web` (or leave default if the web files are in the repository root).
6. Click **Deploy**!
   Your site will be live on a `*.vercel.app` URL with free SSL and global CDN.

### Method 2: Deploy via Vercel CLI
If you have Vercel CLI installed:
```bash
cd web
npx vercel
```
Follow the prompts and select "Yes" to deploy.

### Method 3: Drag & Drop via Vercel Dashboard
You can also deploy directly by dragging the `web` folder into the project upload area in the Vercel dashboard.

---

## 💻 Local Testing
You can preview the site immediately without any server:
- Simply double-click `web/index.html` to open it in Google Chrome, Microsoft Edge, or Firefox!
- Or use any local static server:
  ```bash
  python -m http.server 3000
  ```
  Then open `http://localhost:3000` in your browser.
