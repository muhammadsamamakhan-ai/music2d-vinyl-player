/**
 * MUSIC2D - Vinyl Player Web Experience & Multi-View Engine
 * Matches media_1788847957577.jpg (Dark) and media_1788847957650.jpg (Light)
 */

(function () {
  'use strict';

  // --- VERIFIED REAL SONGS CATALOG (With Genuine Audio Streams & Cover Art) ---
  const REAL_CATALOG = [
    {
      id: 'the_suffering',
      title: 'The Suffering',
      artist: 'Coheed and Cambria',
      genre: 'Classic',
      duration: '3:43',
      sec: 223,
      likes: 392,
      isLiked: true,
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6c/d1/66/6cd1665a-b7c4-5316-e8b2-35d11c40140d/mzi.fszqdnwg.jpg/600x600bb.jpg',
      fileUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/90/6d/fc/906dfc28-064c-94f0-1c7d-34022a1f601d/mzaf_10596489672505253668.plus.aac.p.m4a'
    },
    {
      id: 'birds_of_a_feather',
      title: 'BIRDS OF A FEATHER',
      artist: 'Billie Eilish',
      genre: 'Modern pop',
      duration: '3:30',
      sec: 210,
      likes: 854,
      isLiked: true,
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/92/9f/69/929f69f1-9977-3a44-d674-11f70c852d1b/24UMGIM36186.rgb.jpg/600x600bb.jpg',
      fileUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/34/31/d3/3431d34e-847f-5d66-df83-0bce688d997e/mzaf_18106743962423782018.plus.aac.p.m4a'
    },
    {
      id: 'die_with_a_smile',
      title: 'DIE WITH A SMILE',
      artist: 'Lady Gaga & Bruno Mars',
      genre: 'New',
      duration: '4:11',
      sec: 251,
      likes: 920,
      isLiked: true,
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/11/ae/f2/11aef294-f57c-bab9-c9fc-529162984e62/24UMGIM85348.rgb.jpg/600x600bb.jpg',
      fileUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/07/6a/99/076a99ed-b946-431b-6f1f-54fa187ca5bd/mzaf_8102882277995122875.plus.aac.p.m4a'
    },
    {
      id: 'blinding_lights',
      title: 'BLINDING LIGHTS',
      artist: 'The Weeknd',
      genre: 'Modern pop',
      duration: '3:20',
      sec: 200,
      likes: 1240,
      isLiked: true,
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg',
      fileUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/12/73/ca/1273ca46-233a-5331-189b-25ac1d656533/mzaf_976341070785891411.plus.aac.p.m4a'
    },
    {
      id: 'bohemian_rhapsody',
      title: 'Bohemian Rhapsody',
      artist: 'Queen',
      genre: 'Classic',
      duration: '5:55',
      sec: 355,
      likes: 1530,
      isLiked: true,
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/4d/08/2a/4d082a9e-7898-1aa1-a02f-339810058d9e/14DMGIM05632.rgb.jpg/600x600bb.jpg',
      fileUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8f/11/52/8f1152a9-fd5f-0021-f546-b97579c22ec3/mzaf_3962258993076347789.plus.aac.p.m4a'
    },
    {
      id: 'smells_like_teen_spirit',
      title: 'Smells Like Teen Spirit',
      artist: 'Nirvana',
      genre: '90s',
      duration: '5:01',
      sec: 301,
      likes: 1120,
      isLiked: true,
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/95/fd/b9/95fdb9b2-6d2b-92a6-97f2-51c1a6d77f1a/00602527874609.rgb.jpg/600x600bb.jpg',
      fileUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/65/49/4e/65494e02-b6d3-26d8-6b0c-9bd98dcf4d5d/mzaf_7665413316386155700.plus.aac.p.m4a'
    },
    {
      id: 'dreams',
      title: 'Dreams',
      artist: 'Fleetwood Mac',
      genre: 'Classic',
      duration: '4:14',
      sec: 254,
      likes: 890,
      isLiked: true,
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d2/48/f4/d248f4ae-a7e4-a48e-1588-6617de3e8d76/mzi.izeorbmm.jpg/600x600bb.jpg',
      fileUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b6/5a/4b/b65a4b6f-54dd-ee99-0b36-98e27d5b5dd8/mzaf_13813391014293209258.plus.aac.p.m4a'
    },
    {
      id: 'clair_de_lune',
      title: 'Clair de Lune',
      artist: 'Claude Debussy',
      genre: 'Instrumental',
      duration: '3:38',
      sec: 218,
      likes: 670,
      isLiked: false,
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music/5f/f2/dc/mzi.cjpwuohz.jpg/600x600bb.jpg',
      fileUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/49/22/f3/4922f374-b517-fb33-cff6-8fa6ca15656b/mzaf_12675765766962791398.plus.aac.p.m4a'
    },
    {
      id: 'starboy',
      title: 'Starboy (feat. Daft Punk)',
      artist: 'The Weeknd',
      genre: 'Modern pop',
      duration: '3:50',
      sec: 230,
      likes: 1450,
      isLiked: true,
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg',
      fileUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/71/d6/1171d6ad-3c96-e027-2af6-58028426588c/mzaf_15137631797407745471.plus.aac.p.m4a'
    },
    {
      id: 'hotel_california',
      title: 'Hotel California',
      artist: 'Eagles',
      genre: 'Classic',
      duration: '6:31',
      sec: 391,
      likes: 1390,
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/88/16/2c/88162c3d-46db-8321-61f3-3a47404cfe76/075596050920.jpg/600x600bb.jpg',
      fileUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/17/30/06/1730066d-13fb-6803-0e52-46d4762b94e0/mzaf_8068080726527063383.plus.aac.p.m4a'
    },
    {
      id: 'espresso',
      title: 'Espresso',
      artist: 'Sabrina Carpenter',
      genre: 'Modern pop',
      duration: '2:55',
      sec: 175,
      likes: 980,
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e8/7b/57e87ba0-5057-9bb9-c247-ce7dbe426e89/24UMGIM55213.rgb.jpg/600x600bb.jpg',
      fileUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e9/4d/02/e94d0230-11ee-ef94-d2cf-a5d547bd73f4/mzaf_554140808559155562.plus.aac.p.m4a'
    },
    {
      id: 'lose_control',
      title: 'Lose Control',
      artist: 'Teddy Swims',
      genre: 'New',
      duration: '3:30',
      sec: 210,
      likes: 830,
      artwork: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/36/19/66/36196640-1561-dc5e-c6bc-1e5f4befa583/093624856771.jpg/600x600bb.jpg',
      fileUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9f/65/d6/9f65d67d-db40-d7da-c954-9a23d28dfe1a/mzaf_7625794503195542708.plus.aac.p.m4a'
    }
  ];

  // --- AUDIO & PLAYBACK STATE ---
  const state = {
    isPlaying: false,
    currentRpm: 33,
    currentTime: 114, // 1:54 matching media_1788851125140.png
    duration: 215, // 3:35 matching media_1788851125140.png
    isShuffle: false,
    likes: 392,
    isLiked: false,
    theme: 'dark',
    activeTab: 'home',
    activeCategory: 'all',
    currentTrack: { ...REAL_CATALOG[0] },
    libraryTracks: [ ...REAL_CATALOG ],
    playlists: [
      { id: 'weeknd', name: 'The Weeknd Essentials', count: '32 songs in this list', targetTrackId: 'blinding_lights' },
      { id: 'classic_rock', name: 'Classic Rock Anthems', count: '28 songs in this list', targetTrackId: 'bohemian_rhapsody' },
      { id: 'grunge_90s', name: '90s Alternative & Grunge', count: '30 songs in this list', targetTrackId: 'smells_like_teen_spirit' },
      { id: 'analog_chill', name: 'Analog Warmth & Chill', count: '24 songs in this list', targetTrackId: 'dreams' }
    ],
    downloadedTracks: []
  };

  // --- DOM REFERENCES ---
  const audioEl = document.getElementById('audio-engine');
  const filePicker = document.getElementById('device-audio-picker');

  // Turntable
  const vinylDisc = document.getElementById('vinyl-disc');
  const armWand = document.getElementById('arm-wand');
  const speed33Btn = document.getElementById('speed-33');
  const speed45Btn = document.getElementById('speed-45');
  const dropZoneOverlay = document.getElementById('drop-zone-overlay');
  const turntableDeck = document.getElementById('turntable-deck');

  // Metadata & Controls
  const trackTitleEl = document.getElementById('track-title');
  const trackGenreEl = document.getElementById('track-genre');
  const likeBadgeEl = document.getElementById('like-badge');
  const likesCountEl = document.getElementById('likes-count');
  const currentTimeEl = document.getElementById('current-time');
  const durationTimeEl = document.getElementById('duration-time');
  const waveformBarsContainer = document.getElementById('waveform-bars');

  // Buttons
  const mainPlayBtn = document.getElementById('main-play-btn');
  const mainPlayIcon = document.getElementById('main-play-icon');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const shuffleBtn = document.getElementById('shuffle-btn');
  const expandBtn = document.getElementById('expand-btn');

  // Header & Theme
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  const fontToggleBtn = document.getElementById('font-toggle-btn');
  const fontBadgeText = document.getElementById('font-badge-text');
  const searchInput = document.getElementById('search-input');
  const brandLogoBtn = document.getElementById('brand-logo-btn');
  const mailImportBtn = document.getElementById('mail-import-btn');
  const welcomeOpenBtn = document.getElementById('welcome-open-btn');
  const welcomeModal = document.getElementById('welcome-modal');
  const welcomeGetStartedBtn = document.getElementById('welcome-get-started-btn');

  // Toast & MP3Juice Dropdown Elements
  const mp3juiceToast = document.getElementById('mp3juice-toast');
  const toastTextContent = document.getElementById('toast-text-content');
  const searchResultsDropdown = document.getElementById('search-results-dropdown');
  const searchDropdownList = document.getElementById('search-dropdown-list');
  const searchDropdownStatus = document.getElementById('search-dropdown-status');
  const btnCloseDropdown = document.getElementById('btn-close-dropdown');

  // Navigation Dock & Views
  const dockItems = document.querySelectorAll('.dock-item');
  const viewPanels = {
    home: document.getElementById('view-home'),
    favorites: document.getElementById('view-favorites'),
    mp3juice: document.getElementById('view-mp3juice'),
    songs: document.getElementById('view-songs')
  };

  // View Specific Elements
  const categoryPills = document.querySelectorAll('.category-pill');
  const categoryCards = document.querySelectorAll('.category-card');
  const playlistItems = document.querySelectorAll('.playlist-item');
  const favoritesList = document.getElementById('favorites-list');
  const allSongsList = document.getElementById('all-songs-list');
  const mp3juiceDownloadsList = document.getElementById('mp3juice-downloads-list');
  const mp3juiceDownloadsCount = document.getElementById('mp3juice-downloads-count');
  const allTracksCount = document.getElementById('all-tracks-count');
  const dockCloudMp3Juice = document.getElementById('dock-cloud-mp3juice');
  const btnGotoMp3Juice = document.getElementById('btn-goto-mp3juice');
  const mp3juiceIframe = document.getElementById('mp3juice-iframe');
  const btnBrowseLocal = document.getElementById('btn-browse-local');
  const dlUrlInput = document.getElementById('dl-url-input');
  const dlFetchBtn = document.getElementById('dl-fetch-btn');
  const dlHistoryList = document.getElementById('dl-history-list');
  const libraryPlaylistsContainer = document.getElementById('library-playlists-container');
  const btnNewPlaylist = document.getElementById('btn-new-playlist');

  // --- WEB AUDIO GENERATIVE LO-FI & CRACKLE ENGINE ---
  let audioCtx = null;
  let vinylCrackleNode = null;
  let synthInterval = null;

  function initWebAudio() {
    if (audioCtx) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();

      // Create warm vinyl noise buffer
      const bufferSize = audioCtx.sampleRate * 2;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        // Subtle analog crackle & pops
        if (Math.random() < 0.001) {
          output[i] = (Math.random() * 2 - 1) * 0.35;
        } else {
          output[i] = (Math.random() * 2 - 1) * 0.015;
        }
      }

      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Warm low-pass filter
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1400;

      const noiseGain = audioCtx.createGain();
      noiseGain.gain.value = 0.12;

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(audioCtx.destination);
      whiteNoise.start();
      vinylCrackleNode = noiseGain;
    } catch (e) {
      console.warn('Web Audio error:', e);
    }
  }

  function playLoFiChord() {
    if (!audioCtx) return;
    const chords = [
      [261.63, 329.63, 392.00], // C
      [220.00, 261.63, 329.63], // Am
      [174.61, 220.00, 261.63], // F
      [196.00, 246.94, 293.66]  // G
    ];
    const chord = chords[Math.floor(Math.random() * chords.length)];
    chord.forEach(freq => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq * (state.currentRpm === 45 ? 1.35 : 1.0), audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 3.2);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 3.3);
    });
  }

  // --- FLOATING MP3JUICE DOWNLOAD TOAST ---
  let toastTimer = null;
  function showDownloadToast(songTitle, onDone) {
    if (!mp3juiceToast || !toastTextContent) return;
    if (toastTimer) clearTimeout(toastTimer);

    mp3juiceToast.classList.add('active');
    toastTextContent.innerHTML = `
      <div class="toast-spinner"></div>
      <div>📥 Song is downloading from MP3Juice... <span class="song-name">${escapeHtml(songTitle)}</span></div>
    `;

    setTimeout(() => {
      toastTextContent.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#38bdf8" style="flex-shrink:0;">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <div>✅ Downloaded from MP3Juice! Playing on Vinyl...</div>
      `;
      if (onDone) onDone();

      toastTimer = setTimeout(() => {
        mp3juiceToast.classList.remove('active');
      }, 1600);
    }, 1200);
  }

  function showInfoToast(msg) {
    if (!mp3juiceToast || !toastTextContent) return;
    if (toastTimer) clearTimeout(toastTimer);
    mp3juiceToast.classList.add('active');
    toastTextContent.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:16px;">✨</span>
        <div style="font-family:var(--font-pixel); font-size:12.5px;">${escapeHtml(msg)}</div>
      </div>
    `;
    toastTimer = setTimeout(() => {
      mp3juiceToast.classList.remove('active');
    }, 1800);
  }

  // --- DOWNLOAD & PLAY (SUGGESTIONS & SEARCH RESULTS) ---
  function downloadAndPlaySong(track) {
    if (!track) return;

    if (!track.fileUrl) {
      const match = REAL_CATALOG.find(t => 
        (track.id && t.id === track.id) || 
        t.title.toLowerCase() === track.title.toLowerCase()
      );
      if (match) {
        track.fileUrl = match.fileUrl;
        track.artwork = match.artwork || track.artwork;
        track.sec = match.sec || track.sec;
        track.duration = match.duration || track.duration;
        track.artist = match.artist || track.artist;
        track.genre = match.genre || track.genre;
      }
    }

    // Play immediately and synchronously within the user gesture token
    if (track.fileUrl) {
      showDownloadToast(track.title);
      addToDownloaded(track);
      let existing = state.libraryTracks.find(t => t.title.toLowerCase() === track.title.toLowerCase());
      if (!existing) {
        state.libraryTracks.unshift(track);
      } else {
        if (track.fileUrl) existing.fileUrl = track.fileUrl;
      }
      loadTrack(track, true);
      return;
    }

    // Fallback: search online stream if fileUrl not present
    showDownloadToast(track.title);
    fetchOnlineFallback(track);
  }

  async function fetchOnlineFallback(track) {
    try {
      const query = encodeURIComponent(`${track.title} ${track.artist || ''}`.trim());
      const resp = await fetch(`https://itunes.apple.com/search?term=${query}&entity=song&limit=1`);
      if (resp.ok) {
        const data = await resp.json();
        if (data.results && data.results.length > 0) {
          const item = data.results[0];
          track.fileUrl = item.previewUrl;
          if (item.trackTimeMillis) {
            track.sec = Math.round(item.trackTimeMillis / 1000);
            track.duration = formatTime(track.sec);
          }
          if (item.artistName && (!track.artist || track.artist === 'Curated Vinyl Playlist')) {
            track.artist = item.artistName;
          }
        }
      }
    } catch (err) {
      console.warn('Online stream fetch fallback:', err);
    }

    addToDownloaded(track);

    let existing = state.libraryTracks.find(t => t.title.toLowerCase() === track.title.toLowerCase());
    if (!existing) {
      state.libraryTracks.unshift(track);
    } else {
      if (track.fileUrl) existing.fileUrl = track.fileUrl;
    }

    loadTrack(track, true);
  }

  function addToDownloaded(track) {
    const clean = {
      id: track.id || 'dl_' + Date.now(),
      title: track.title,
      artist: track.artist || 'MP3Juice Online',
      genre: track.genre || 'Downloaded',
      duration: track.duration || '3:30',
      sec: track.sec || 210,
      likes: track.likes || 120,
      fileUrl: track.fileUrl,
      isLiked: !!track.isLiked
    };
    const existIdx = state.downloadedTracks.findIndex(t => t.title.toLowerCase() === clean.title.toLowerCase());
    if (existIdx !== -1) {
      const existing = state.downloadedTracks.splice(existIdx, 1)[0];
      if (clean.fileUrl) existing.fileUrl = clean.fileUrl;
      state.downloadedTracks.unshift(existing);
    } else {
      state.downloadedTracks.unshift(clean);
    }
    saveDownloaded();
    renderDownloaderHistory();
    renderSongsView();
  }

  function saveDownloaded() {
    try {
      localStorage.setItem('vinyl_downloaded_tracks', JSON.stringify(state.downloadedTracks.slice(0, 30)));
    } catch (e) {}
  }

  function loadDownloaded() {
    try {
      const saved = localStorage.getItem('vinyl_downloaded_tracks');
      if (saved) {
        state.downloadedTracks = JSON.parse(saved);
      }
    } catch (e) {}
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // --- TURNTABLE & PLAYBACK LOGIC ---
  function startPlayback() {
    state.isPlaying = true;
    initWebAudio();
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!audioEl.src || audioEl.src === window.location.href) {
      if (state.currentTrack && state.currentTrack.fileUrl) {
        audioEl.src = state.currentTrack.fileUrl;
      } else {
        audioEl.src = REAL_CATALOG[0].fileUrl;
      }
    }

    if (audioEl.src && audioEl.src !== window.location.href) {
      audioEl.play().catch((err) => {
        console.warn('Playback attempt:', err);
      });
    }

    // Physical Tonearm Drops onto Record
    if (armWand) {
      armWand.classList.add('playing', 'arm-on-record');
    }
    // Vinyl Disc Spins
    if (vinylDisc) {
      vinylDisc.classList.add('spinning');
    }
    // Update Play Button Icon to Pause Bars
    mainPlayIcon.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
      </svg>
    `;

    startWaveformTimer();
  }

  function pausePlayback() {
    state.isPlaying = false;
    if (audioEl.src) audioEl.pause();
    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }

    // Tonearm Lifts Off & Returns to Rest
    if (armWand) {
      armWand.classList.remove('playing', 'arm-on-record');
    }
    // Vinyl Disc Halts
    if (vinylDisc) {
      vinylDisc.classList.remove('spinning');
    }
    // Update Play Button Icon to Triangle
    mainPlayIcon.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    `;

    stopWaveformTimer();
  }

  function togglePlay() {
    if (state.isPlaying) {
      pausePlayback();
    } else {
      startPlayback();
    }
  }

  // --- WAVEFORM PROGRESS BAR / SEEK SLIDER (Matching media_1788851125140.png) ---
  const BAR_COUNT = 36;
  let isScrubbing = false;

  const WAVEFORM_HEIGHTS = [
    10, 14, 20, 26, 18, 24, 34, 20, 28, 32, 22, 30, 
    38, 22, 26, 32, 28, 18, 24, 34, 30, 22, 16, 26, 
    36, 24, 20, 30, 26, 18, 20, 26, 18, 14, 10, 8
  ];

  function renderWaveformBars() {
    waveformBarsContainer.innerHTML = '';
    for (let i = 0; i < BAR_COUNT; i++) {
      const bar = document.createElement('div');
      bar.className = 'waveform-bar wave-bar';
      bar.style.height = `${WAVEFORM_HEIGHTS[i % WAVEFORM_HEIGHTS.length]}px`;
      waveformBarsContainer.appendChild(bar);
    }
    updateWaveformUI();
  }

  function updateWaveformUI() {
    currentTimeEl.textContent = formatTime(state.currentTime);
    durationTimeEl.textContent = formatTime(state.duration);

    const bars = waveformBarsContainer.querySelectorAll('.waveform-bar');
    const currentFraction = state.duration > 0 ? (state.currentTime / state.duration) : 0;
    const activeIndex = Math.floor(currentFraction * BAR_COUNT);

    bars.forEach((bar, idx) => {
      const isPast = idx <= activeIndex;
      bar.classList.toggle('active', isPast);
      bar.classList.toggle('seek-head', idx === activeIndex);
    });
  }

  function seekToFraction(fraction, updateAudio = true) {
    fraction = Math.max(0, Math.min(1, fraction));
    const effectiveDuration = (audioEl.duration && !isNaN(audioEl.duration) && audioEl.duration > 0)
      ? audioEl.duration
      : state.duration;

    state.currentTime = Math.floor(fraction * effectiveDuration);
    state.duration = Math.floor(effectiveDuration);

    if (updateAudio && audioEl.src && !isNaN(audioEl.duration)) {
      audioEl.currentTime = fraction * audioEl.duration;
    }

    updateWaveformUI();
  }

  function getFractionFromEvent(e) {
    const rect = waveformBarsContainer.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  }

  function setupWaveformScrubbing() {
    // Mouse down on waveform
    waveformBarsContainer.addEventListener('mousedown', (e) => {
      isScrubbing = true;
      waveformBarsContainer.classList.add('is-dragging');
      const frac = getFractionFromEvent(e);
      seekToFraction(frac, true);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isScrubbing) return;
      const frac = getFractionFromEvent(e);
      seekToFraction(frac, true);
    });

    window.addEventListener('mouseup', () => {
      if (isScrubbing) {
        isScrubbing = false;
        waveformBarsContainer.classList.remove('is-dragging');
        if (audioEl.src && !isNaN(audioEl.duration)) {
          audioEl.currentTime = state.currentTime;
        }
      }
    });

    // Touch support for mobile phones / tablets
    waveformBarsContainer.addEventListener('touchstart', (e) => {
      isScrubbing = true;
      waveformBarsContainer.classList.add('is-dragging');
      const frac = getFractionFromEvent(e);
      seekToFraction(frac, true);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isScrubbing) return;
      const frac = getFractionFromEvent(e);
      seekToFraction(frac, true);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      if (isScrubbing) {
        isScrubbing = false;
        waveformBarsContainer.classList.remove('is-dragging');
        if (audioEl.src && !isNaN(audioEl.duration)) {
          audioEl.currentTime = state.currentTime;
        }
      }
    });

    // Keyboard Arrow navigation: Left (-5s) and Right (+5s)
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        seekDelta(-5);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        seekDelta(5);
      } else if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      }
    });
  }

  function seekDelta(seconds) {
    const effectiveDuration = (audioEl.duration && !isNaN(audioEl.duration) && audioEl.duration > 0)
      ? audioEl.duration
      : state.duration;
    let newTime = Math.max(0, Math.min(effectiveDuration, state.currentTime + seconds));
    state.currentTime = Math.floor(newTime);
    if (audioEl.src && !isNaN(audioEl.duration)) {
      audioEl.currentTime = newTime;
    }
    updateWaveformUI();
  }

  let progressTimer = null;
  function startWaveformTimer() {
    if (progressTimer) clearInterval(progressTimer);
    progressTimer = setInterval(() => {
      if (isScrubbing) return;
      if (audioEl.duration && !isNaN(audioEl.duration)) {
        state.currentTime = Math.floor(audioEl.currentTime);
        state.duration = Math.floor(audioEl.duration);
      } else {
        state.currentTime++;
        if (state.currentTime >= state.duration) {
          state.currentTime = 0;
          if (!state.isShuffle) playNextTrack();
        }
      }
      updateWaveformUI();
    }, 1000);
  }

  function stopWaveformTimer() {
    if (progressTimer) {
      clearInterval(progressTimer);
      progressTimer = null;
    }
  }

  function formatTime(sec) {
    if (isNaN(sec) || sec < 0) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // --- TRACK SELECTION & QUEUE ---
  function loadTrack(track, autoPlay = true) {
    state.currentTrack = track;
    trackTitleEl.textContent = track.title;
    trackGenreEl.textContent = track.genre || 'Vinyl';
    state.currentTime = 0;
    state.duration = track.sec || 215;

    if (track.likes) {
      state.likes = track.likes;
      likesCountEl.textContent = `+ ${state.likes}`;
    }

    state.isLiked = !!track.isLiked;
    if (likeBadgeEl) {
      likeBadgeEl.style.color = state.isLiked ? '#ff3b30' : 'inherit';
    }

    if (track.fileUrl) {
      if (audioEl.src !== track.fileUrl) {
        audioEl.src = track.fileUrl;
        audioEl.load();
      }
    } else {
      audioEl.src = '';
    }

    updateWaveformUI();

    if (autoPlay) {
      startPlayback();
    }
  }

  function playNextTrack() {
    const currentIdx = state.libraryTracks.findIndex(t => t.title === state.currentTrack.title);
    let nextIdx = (currentIdx + 1) % state.libraryTracks.length;
    if (state.isShuffle) {
      nextIdx = Math.floor(Math.random() * state.libraryTracks.length);
    }
    loadTrack(state.libraryTracks[nextIdx], true);
  }

  function playPrevTrack() {
    if (state.currentTime > 3) {
      state.currentTime = 0;
      if (audioEl.src) audioEl.currentTime = 0;
      updateWaveformUI();
      return;
    }
    const currentIdx = state.libraryTracks.findIndex(t => t.title === state.currentTrack.title);
    let prevIdx = currentIdx - 1;
    if (prevIdx < 0) prevIdx = state.libraryTracks.length - 1;
    loadTrack(state.libraryTracks[prevIdx], true);
  }

  // --- DOCK MULTI-VIEW NAVIGATION ---
  function switchView(tabKey) {
    if (!tabKey) return;
    state.activeTab = tabKey;
    document.body.setAttribute('data-active-view', tabKey);

    try {
      if (window.location.hash !== '#' + tabKey) {
        history.replaceState(null, '', '#' + tabKey);
      }
    } catch (e) {}

    // Update dock items active class
    dockItems.forEach(item => {
      const itemTab = item.getAttribute('data-tab');
      item.classList.toggle('active', Boolean(itemTab && itemTab === tabKey));
    });

    // Update panels
    Object.keys(viewPanels).forEach(key => {
      if (viewPanels[key]) {
        viewPanels[key].classList.toggle('active', key === tabKey);
      }
    });

    // On 3rd page, show full-size MP3Juice next to dock bar
    document.body.classList.toggle('viewing-mp3juice', tabKey === 'mp3juice');

    // Handle MP3Juice iframe initialization if needed
    if (tabKey === 'mp3juice' && mp3juiceIframe) {
      if (!mp3juiceIframe.src || mp3juiceIframe.src === 'about:blank') {
        mp3juiceIframe.src = 'https://v7.mp3juice.za.com/';
      }
    }

    // Refresh panel specific data
    if (tabKey === 'favorites') renderFavoritesView();
    if (tabKey === 'songs') renderSongsView();
  }

  // --- VIEW RENDERERS ---
  function renderFavoritesView() {
    if (!favoritesList) return;
    favoritesList.innerHTML = '';

    const allTracks = [...state.libraryTracks, ...state.downloadedTracks];
    const seen = new Set();
    const liked = [];

    // 1. "The Suffering" by Coheed and Cambria first to exactly match media_1788852121929.png
    const suffering = allTracks.find(t => t.title.toLowerCase().includes('suffering'));
    if (suffering) {
      liked.push(suffering);
      seen.add(suffering.title.toLowerCase());
    }

    // 2. Add other liked tracks from state
    allTracks.forEach(t => {
      const key = t.title.toLowerCase();
      if (!seen.has(key) && (t.isLiked || t.title === 'The Suffering')) {
        seen.add(key);
        liked.push(t);
      }
    });

    // 3. Fallback to top real songs if list is small
    if (liked.length < 5) {
      REAL_CATALOG.forEach(t => {
        const key = t.title.toLowerCase();
        if (!seen.has(key)) {
          seen.add(key);
          liked.push({ ...t, isLiked: true });
        }
      });
    }

    liked.forEach(t => {
      const isPlayingNow = state.isPlaying && state.currentTrack && state.currentTrack.title.toLowerCase() === t.title.toLowerCase();
      const item = document.createElement('div');
      item.className = `fav-track-item ${isPlayingNow ? 'active-playing' : ''}`;
      item.setAttribute('data-track-id', t.id || t.title);
      item.innerHTML = `
        <div class="fav-track-content">
          <div class="fav-track-title pixel-text">${escapeHtml(t.title.toUpperCase())}</div>
          <div class="fav-track-artist">${escapeHtml(t.artist)}</div>
          <div class="fav-track-time pixel-text">${t.duration || '3:30'}</div>
        </div>
        <div class="fav-track-actions">
          <button class="btn-fav-play" title="Play on Vinyl Turntable">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6 4 18 12 6 20 6 4"></polygon>
            </svg>
          </button>
        </div>
      `;

      item.addEventListener('click', () => {
        downloadAndPlaySong(t);
        setTimeout(renderFavoritesView, 150);
      });

      favoritesList.appendChild(item);
    });
  }

  function renderSongsView() {
    if (mp3juiceDownloadsCount) {
      mp3juiceDownloadsCount.textContent = state.downloadedTracks.length;
    }
    if (allTracksCount) {
      allTracksCount.textContent = state.libraryTracks.length;
    }

    // 1. Render MP3Juice Downloads Sub-Section
    if (mp3juiceDownloadsList) {
      mp3juiceDownloadsList.innerHTML = '';
      if (state.downloadedTracks.length === 0) {
        mp3juiceDownloadsList.innerHTML = `
          <div class="empty-songs-notice">
            <div>No songs downloaded from MP3Juice yet.</div>
            <div style="font-size: 11.5px; opacity: 0.8;">Click the <strong>Cloud icon #3</strong> to browse MP3Juice, or search any song above to download & play!</div>
          </div>
        `;
      } else {
        state.downloadedTracks.forEach(t => {
          const isPlayingNow = state.isPlaying && state.currentTrack && state.currentTrack.title.toLowerCase() === t.title.toLowerCase();
          const item = document.createElement('div');
          item.className = `fav-track-item ${isPlayingNow ? 'active-playing' : ''}`;
          item.setAttribute('data-track-id', t.id || t.title);
          item.innerHTML = `
            <div class="fav-track-content">
              <div class="fav-track-title pixel-text">${escapeHtml(t.title.toUpperCase())}</div>
              <div class="fav-track-artist">${escapeHtml(t.artist || 'MP3Juice Online')}</div>
              <div class="fav-track-time pixel-text">${t.duration || '3:30'}</div>
            </div>
            <div class="fav-track-actions">
              <button class="btn-fav-play" title="Play on Vinyl Turntable">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 4 18 12 6 20 6 4"></polygon>
                </svg>
              </button>
            </div>
          `;
          item.addEventListener('click', () => {
            loadTrack(t, true);
            setTimeout(renderSongsView, 150);
          });
          mp3juiceDownloadsList.appendChild(item);
        });
      }
    }

    // 2. Render All Songs Catalog Sub-Section
    if (allSongsList) {
      allSongsList.innerHTML = '';
      state.libraryTracks.forEach(t => {
        const isPlayingNow = state.isPlaying && state.currentTrack && state.currentTrack.title.toLowerCase() === t.title.toLowerCase();
        const item = document.createElement('div');
        item.className = `fav-track-item ${isPlayingNow ? 'active-playing' : ''}`;
        item.setAttribute('data-track-id', t.id || t.title);
        item.innerHTML = `
          <div class="fav-track-content">
            <div class="fav-track-title pixel-text">${escapeHtml(t.title.toUpperCase())}</div>
            <div class="fav-track-artist">${escapeHtml(t.artist)} • <span style="font-size: 11px; opacity: 0.8;">${t.genre || 'Vinyl'}</span></div>
            <div class="fav-track-time pixel-text">${t.duration || '3:30'}</div>
          </div>
          <div class="fav-track-actions">
            <button class="btn-fav-play" title="Play on Vinyl Turntable">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 4 18 12 6 20 6 4"></polygon>
              </svg>
            </button>
          </div>
        `;
        item.addEventListener('click', () => {
          loadTrack(t, true);
          setTimeout(renderSongsView, 150);
        });
        allSongsList.appendChild(item);
      });
    }
  }

  function renderExploreView() {
    const exploreCarousel = document.getElementById('explore-carousel');
    if (!exploreCarousel) return;
    exploreCarousel.innerHTML = '';
    state.libraryTracks.forEach((t, i) => {
      const disc = document.createElement('div');
      disc.className = 'carousel-disc';
      disc.title = `${t.title} - ${t.artist}`;
      disc.innerHTML = `
        <div class="carousel-disc-label">
          <span>${t.title.toUpperCase()}</span>
        </div>
      `;
      disc.addEventListener('click', () => {
        loadTrack(t, true);
      });
      exploreCarousel.appendChild(disc);
    });
  }

  function renderDownloaderHistory() {
    if (!dlHistoryList) return;
    dlHistoryList.innerHTML = '';
    if (state.downloadedTracks.length === 0) {
      dlHistoryList.innerHTML = '<div style="color:var(--text-muted); font-size:12px; padding:10px 0;">No songs fetched yet.</div>';
      return;
    }
    state.downloadedTracks.forEach(t => {
      const row = document.createElement('div');
      row.className = 'song-row';
      row.innerHTML = `
        <div>
          <div style="font-weight:700; font-family:var(--font-pixel); font-size:13px;">${t.title}</div>
          <div class="song-meta" style="font-size:12px; color:var(--text-muted);">Web Audio Stream</div>
        </div>
        <button class="category-pill active" style="padding:4px 12px; font-size:11px;">Play</button>
      `;
      row.addEventListener('click', () => loadTrack(t, true));
      dlHistoryList.appendChild(row);
    });
  }

  function renderLibraryView() {
    if (!libraryPlaylistsContainer) return;
    libraryPlaylistsContainer.innerHTML = '';
    state.playlists.forEach(p => {
      const div = document.createElement('div');
      div.className = 'playlist-item';
      div.innerHTML = `
        <div class="playlist-left">
          <div class="playlist-thumb">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin:15px; color:#aaa;">
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
          </div>
          <div class="playlist-info">
            <h4 class="playlist-name">${p.name}</h4>
            <p class="playlist-meta">${p.count}</p>
          </div>
        </div>
        <button class="playlist-play-btn" aria-label="Play">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="6 4 18 12 6 20 6 4"></polygon>
          </svg>
        </button>
      `;
      div.addEventListener('click', () => {
        const found = state.libraryTracks[0];
        loadTrack(found, true);
      });
      libraryPlaylistsContainer.appendChild(div);
    });
  }

  // --- LOCAL AUDIO FILE IMPORTER (PHONE & PC) ---
  function handleImportedFiles(files) {
    if (!files || !files.length) return;
    Array.from(files).forEach((file, idx) => {
      if (!file.type.startsWith('audio/') && !/\.(mp3|wav|ogg|flac|m4a|aac)$/i.test(file.name)) return;
      const fileUrl = URL.createObjectURL(file);
      let title = file.name.replace(/\.[^/.]+$/, "").replace(/_/g, " ").replace(/-/g, " ").trim();
      const newTrack = {
        id: 'local_' + Date.now() + '_' + idx,
        title: title || 'Local Track',
        artist: 'Device Storage',
        genre: 'Local',
        duration: '3:30',
        sec: 210,
        likes: 100,
        fileUrl: fileUrl,
        isLiked: false
      };
      state.libraryTracks.unshift(newTrack);
      if (idx === 0) {
        loadTrack(newTrack, true);
      }
    });
    renderSongsView();
    renderFavoritesView();
  }

  // --- ONLINE MP3JUICE SEARCH ENGINE ---
  let searchDebounceTimer = null;
  function handleSearchInput(query) {
    const q = query.trim();

    // Filter home view cards and playlists in real time
    categoryCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = (!q || text.includes(q.toLowerCase())) ? 'block' : 'none';
    });
    playlistItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = (!q || text.includes(q.toLowerCase())) ? 'flex' : 'none';
    });

    if (!q || q.length < 2) {
      if (searchResultsDropdown) searchResultsDropdown.style.display = 'none';
      return;
    }

    if (searchResultsDropdown) {
      searchResultsDropdown.style.display = 'flex';
      searchDropdownStatus.textContent = `SEARCHING MP3JUICE FOR "${q.toUpperCase()}"...`;
      searchDropdownList.innerHTML = `
        <div style="text-align:center; padding:18px; color:var(--text-muted); font-size:12px;">
          Connecting to MP3Juice & online catalog...
        </div>
      `;
    }

    if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      fetchOnlineSearch(q);
    }, 350);
  }

  async function fetchOnlineSearch(query) {
    try {
      const resp = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=6`);
      if (!resp.ok) throw new Error('Network error');
      const data = await resp.json();

      searchDropdownStatus.textContent = `MP3JUICE RESULTS (${data.resultCount || 0} SONGS)`;

      if (!data.results || data.results.length === 0) {
        searchDropdownList.innerHTML = `
          <div style="text-align:center; padding:18px; color:var(--text-muted); font-size:12px;">
            No tracks found for "${escapeHtml(query)}".
          </div>
        `;
        return;
      }

      searchDropdownList.innerHTML = '';
      data.results.forEach(item => {
        const itemSec = Math.round((item.trackTimeMillis || 180000) / 1000);
        const searchTrack = {
          id: 'mp3j_' + item.trackId,
          title: item.trackName || 'Unknown Title',
          artist: item.artistName || 'Unknown Artist',
          genre: item.primaryGenreName || 'Pop',
          duration: formatTime(itemSec),
          sec: itemSec,
          likes: Math.floor(Math.random() * 400 + 100),
          fileUrl: item.previewUrl,
          cover: (item.artworkUrl100 || '').replace('100x100bb', '300x300bb')
        };

        const row = document.createElement('div');
        row.className = 'search-dropdown-item';
        row.innerHTML = `
          <div class="search-item-left">
            <img class="search-item-thumb" src="${searchTrack.cover}" alt="${escapeHtml(searchTrack.title)}">
            <div class="search-item-info">
              <div class="search-item-title">${escapeHtml(searchTrack.title)}</div>
              <div class="search-item-artist">${escapeHtml(searchTrack.artist)} • ${searchTrack.duration}</div>
            </div>
          </div>
          <div class="search-item-actions">
            <button class="btn-item-spin" data-action="spin" title="Play on Vinyl">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 18 12 6 20 6 4"></polygon></svg>
              <span>Spin</span>
            </button>
            <button class="btn-item-mp3juice" data-action="mp3juice" title="Download on MP3Juice">MP3Juice</button>
          </div>
        `;

        row.addEventListener('click', (e) => {
          if (e.target.closest('[data-action="mp3juice"]')) {
            e.stopPropagation();
            showDownloadToast(searchTrack.title);
            addToDownloaded(searchTrack);
            window.open('https://v7.mp3juice.za.com/', '_blank');
            return;
          }
          downloadAndPlaySong(searchTrack);
          if (searchResultsDropdown) searchResultsDropdown.style.display = 'none';
        });

        searchDropdownList.appendChild(row);
      });
    } catch (e) {
      searchDropdownList.innerHTML = `
        <div style="text-align:center; padding:18px; color:var(--text-muted); font-size:12px;">
          Could not reach MP3Juice search. Check your internet connection.
        </div>
      `;
    }
  }

  // --- CATEGORY FILTER REAL SPOTLIGHT TRACKS ---
  function updateCategoryCardsForGenre(cat) {
    let filtered = [];
    if (cat === 'all') {
      filtered = [
        REAL_CATALOG.find(t => t.id === 'birds_of_a_feather'),
        REAL_CATALOG.find(t => t.id === 'die_with_a_smile'),
        REAL_CATALOG.find(t => t.id === 'blinding_lights')
      ].filter(Boolean);
    } else if (cat === '90s') {
      filtered = REAL_CATALOG.filter(t => t.genre === '90s');
    } else if (cat === 'new') {
      filtered = REAL_CATALOG.filter(t => t.genre === 'New');
    } else if (cat === 'instrumental') {
      filtered = REAL_CATALOG.filter(t => t.genre === 'Instrumental');
    } else if (cat === 'modern') {
      filtered = REAL_CATALOG.filter(t => t.genre === 'Modern pop');
    } else {
      filtered = REAL_CATALOG.filter(t => t.genre.toLowerCase().includes(cat.toLowerCase()));
    }

    if (filtered.length < 3) {
      filtered = filtered.concat(REAL_CATALOG.filter(t => !filtered.includes(t)));
    }
    const top3 = filtered.slice(0, 3);

    categoryCards.forEach((card, idx) => {
      if (top3[idx]) {
        const t = top3[idx];
        card.setAttribute('data-track-id', t.id);
        card.setAttribute('data-category', t.genre.toLowerCase());
        const titleEl = card.querySelector('.card-title');
        const subEl = card.querySelector('.card-subtitle');
        const imgEl = card.querySelector('img');

        if (titleEl) titleEl.textContent = t.title;
        if (subEl) subEl.textContent = `by ${t.artist}`;
        if (imgEl && t.artwork) {
          imgEl.src = t.artwork;
          imgEl.alt = `${t.title} Album Cover`;
        }
        card.style.display = 'block';
      }
    });
  }

  // --- SETUP EVENT LISTENERS ---
  function setupEvents() {
    // Play/Pause
    mainPlayBtn.addEventListener('click', togglePlay);
    if (vinylDisc) {
      vinylDisc.addEventListener('click', togglePlay);
    }
    if (armWand) {
      armWand.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePlay();
      });
    }
    nextBtn.addEventListener('click', playNextTrack);
    prevBtn.addEventListener('click', playPrevTrack);

    shuffleBtn.addEventListener('click', () => {
      state.isShuffle = !state.isShuffle;
      shuffleBtn.style.opacity = state.isShuffle ? '1.0' : '0.6';
    });

    // Speed switches (33 vs 45) - Slowed down for authentic vinyl rotational aesthetics
    speed33Btn.addEventListener('click', () => {
      state.currentRpm = 33;
      speed33Btn.classList.add('active');
      speed45Btn.classList.remove('active');
      vinylDisc.style.animationDuration = '5.5s';
      if (audioEl.src) audioEl.playbackRate = 1.0;
    });
    speed45Btn.addEventListener('click', () => {
      state.currentRpm = 45;
      speed45Btn.classList.add('active');
      speed33Btn.classList.remove('active');
      vinylDisc.style.animationDuration = '4.0s';
      if (audioEl.src) audioEl.playbackRate = 1.35;
    });

    // Like badge
    likeBadgeEl.addEventListener('click', () => {
      state.isLiked = !state.isLiked;
      state.likes += state.isLiked ? 1 : -1;
      likesCountEl.textContent = `+ ${state.likes}`;
      likeBadgeEl.style.color = state.isLiked ? '#ff3b30' : 'inherit';
      if (state.currentTrack) {
        state.currentTrack.isLiked = state.isLiked;
        const inLib = state.libraryTracks.find(t => t.title.toLowerCase() === state.currentTrack.title.toLowerCase());
        if (inLib) inLib.isLiked = state.isLiked;
      }
      if (state.activeTab === 'favorites') {
        renderFavoritesView();
      }
    });

    // Category pills filter (Switches real spotlight tracks per genre)
    categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const cat = pill.getAttribute('data-category');
        state.activeCategory = cat;
        updateCategoryCardsForGenre(cat);
      });
    });

    // Category cards click (Real Spotlight Songs)
    categoryCards.forEach(card => {
      card.addEventListener('click', () => {
        const trackId = card.getAttribute('data-track-id');
        const title = card.querySelector('.card-title').textContent.trim();
        const artist = card.querySelector('.card-subtitle').textContent.replace('by ', '').trim();
        let matched = REAL_CATALOG.find(t => t.id === trackId || t.title.toLowerCase() === title.toLowerCase());
        const track = matched ? { ...matched } : {
          id: trackId || ('card_' + title.toLowerCase().replace(/\s+/g, '_')),
          title: title,
          artist: artist,
          genre: card.getAttribute('data-category') || 'Modern pop',
          duration: '3:30',
          sec: 210,
          likes: Math.floor(Math.random() * 300 + 500)
        };
        downloadAndPlaySong(track);
      });
    });

    // Playlist items click (Real Playlists)
    playlistItems.forEach(item => {
      item.addEventListener('click', () => {
        const plKey = item.getAttribute('data-playlist');
        const pl = state.playlists.find(p => p.id === plKey);
        let track = null;
        if (pl && pl.targetTrackId) {
          track = REAL_CATALOG.find(t => t.id === pl.targetTrackId);
        }
        if (!track) {
          const name = item.querySelector('.playlist-name').textContent.trim();
          track = {
            id: 'pl_' + name.toLowerCase().replace(/\s+/g, '_'),
            title: name,
            artist: 'Curated Vinyl Playlist',
            genre: 'Vinyl Stage',
            duration: '3:45',
            sec: 225,
            likes: 512
          };
        }
        downloadAndPlaySong({ ...track });
      });
    });

    // Dock navigation clicks (makes all pages functional!)
    dockItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const tab = item.getAttribute('data-tab');
        if (!tab) {
          // Direct navigation link like MP3Juice Cloud #3 (navigates in same tab)
          return;
        }
        e.preventDefault();
        switchView(tab);
      });
    });

    // Brand logo returns to home
    brandLogoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      switchView('home');
    });

    // Expand button browses local files
    expandBtn.addEventListener('click', () => filePicker.click());
    if (btnBrowseLocal) {
      btnBrowseLocal.addEventListener('click', () => filePicker.click());
    }
    if (btnGotoMp3Juice) {
      btnGotoMp3Juice.addEventListener('click', () => switchView('mp3juice'));
    }
    if (mailImportBtn) {
      mailImportBtn.addEventListener('click', () => filePicker.click());
    }

    filePicker.addEventListener('change', (e) => {
      handleImportedFiles(e.target.files);
    });

    // Drag and Drop Audio on Turntable
    turntableDeck.addEventListener('dragenter', (e) => {
      e.preventDefault();
      dropZoneOverlay.classList.add('active');
    });
    turntableDeck.addEventListener('dragover', (e) => e.preventDefault());
    turntableDeck.addEventListener('dragleave', (e) => {
      if (!turntableDeck.contains(e.relatedTarget)) {
        dropZoneOverlay.classList.remove('active');
      }
    });
    turntableDeck.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZoneOverlay.classList.remove('active');
      if (e.dataTransfer && e.dataTransfer.files) {
        handleImportedFiles(e.dataTransfer.files);
      }
    });

    // Downloader Fetch Button (if available)
    if (dlFetchBtn) {
      dlFetchBtn.addEventListener('click', handleDownloaderFetch);
    }
    if (dlUrlInput) {
      dlUrlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleDownloaderFetch();
      });
    }

    // Theme Toggle
    themeToggleBtn.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      if (state.theme === 'light') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      }
    });

    // Font Style Toggle (Pixel Retro -> Modern Sans -> Clean Mono)
    const fontStyles = ['pixel', 'modern', 'mono'];
    const fontNames = {
      pixel: 'Pixel Retro (Pixelify Sans)',
      modern: 'Modern Sans (Jakarta Sans)',
      mono: 'Clean Mono (JetBrains Mono)'
    };
    const badgeLabels = {
      pixel: 'Pixel',
      modern: 'Sans',
      mono: 'Mono'
    };
    let currentFontIdx = 0;
    const savedFont = localStorage.getItem('vinyl_font_style') || 'pixel';
    if (savedFont && fontStyles.includes(savedFont)) {
      currentFontIdx = fontStyles.indexOf(savedFont);
      document.documentElement.setAttribute('data-font-style', savedFont);
    }
    if (fontBadgeText) {
      fontBadgeText.textContent = badgeLabels[fontStyles[currentFontIdx]];
    }

    if (fontToggleBtn) {
      fontToggleBtn.addEventListener('click', () => {
        currentFontIdx = (currentFontIdx + 1) % fontStyles.length;
        const nextFont = fontStyles[currentFontIdx];
        document.documentElement.setAttribute('data-font-style', nextFont);
        localStorage.setItem('vinyl_font_style', nextFont);
        if (fontBadgeText) {
          fontBadgeText.textContent = badgeLabels[nextFont];
        }
        showInfoToast(`Font style: ${fontNames[nextFont]}`);
      });
    }

    // About / Welcome modal (if available)
    if (welcomeOpenBtn && welcomeModal) {
      welcomeOpenBtn.addEventListener('click', () => welcomeModal.classList.add('active'));
    }
    if (welcomeGetStartedBtn && welcomeModal) {
      welcomeGetStartedBtn.addEventListener('click', () => welcomeModal.classList.remove('active'));
    }
    if (welcomeModal) {
      welcomeModal.addEventListener('click', (e) => {
        if (e.target === welcomeModal) welcomeModal.classList.remove('active');
      });
    }

    // Search input with MP3Juice lookup
    searchInput.addEventListener('input', (e) => {
      handleSearchInput(e.target.value);
    });

    if (btnCloseDropdown) {
      btnCloseDropdown.addEventListener('click', () => {
        if (searchResultsDropdown) searchResultsDropdown.style.display = 'none';
      });
    }

    // New Playlist button
    if (btnNewPlaylist) {
      btnNewPlaylist.addEventListener('click', () => {
        const name = prompt('Enter new playlist name:');
        if (name && name.trim()) {
          state.playlists.push({
            id: 'user_' + Date.now(),
            name: name.trim(),
            count: '0 songs in this list'
          });
          renderLibraryView();
        }
      });
    }
  }

  function handleDownloaderFetch() {
    const rawVal = dlUrlInput.value.trim();
    if (!rawVal) return;
    if (rawVal.startsWith('http://') || rawVal.startsWith('https://')) {
      let title = rawVal.substring(rawVal.lastIndexOf('/') + 1) || 'Fetched Stream';
      title = title.replace(/\.[^/.]+$/, "").replace(/_/g, " ");
      const newTrack = {
        id: 'dl_' + Date.now(),
        title: title,
        artist: 'Web Audio Stream',
        genre: 'Web Stream',
        duration: 'Online',
        sec: 240,
        likes: 350,
        fileUrl: rawVal,
        isLiked: false
      };
      downloadAndPlaySong(newTrack);
      dlUrlInput.value = '';
    } else {
      window.open('https://v7.mp3juice.za.com/', '_blank');
    }
  }

  // --- INITIALIZE APPLICATION ---
  function init() {
    loadDownloaded();
    renderWaveformBars();
    setupWaveformScrubbing();
    updateWaveformUI();
    setupEvents();
    document.body.setAttribute('data-active-view', 'home');

    // Attach native HTML5 audio listeners for smooth playback & seek syncing
    audioEl.addEventListener('timeupdate', () => {
      if (!isScrubbing && audioEl.duration && !isNaN(audioEl.duration)) {
        state.currentTime = Math.floor(audioEl.currentTime);
        state.duration = Math.floor(audioEl.duration);
        updateWaveformUI();
      }
    });

    audioEl.addEventListener('ended', () => {
      playNextTrack();
    });

    // Ensure audio element has initial real track audio preloaded
    if (state.currentTrack && state.currentTrack.fileUrl) {
      audioEl.src = state.currentTrack.fileUrl;
      audioEl.preload = 'auto';
    }

    // Support URL hash navigation (#home, #favorites, #mp3juice, #songs)
    const initHash = window.location.hash.replace('#', '').trim();
    if (initHash && viewPanels[initHash]) {
      switchView(initHash);
    }

    window.addEventListener('hashchange', () => {
      const h = window.location.hash.replace('#', '').trim();
      if (h && viewPanels[h] && state.activeTab !== h) {
        switchView(h);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
