// ================================================================
// NODES — koordinat bangunan & gerbang UNIB (Data Baru)
// ================================================================
const nodes = {
  gerbang: {
    id: 'gerbang',
    name: 'Gerbang Keluar UNIB Depan',
    coords: [-3.7591260778177786, 102.26663362932524],
    icon: '⛩️',
    desc: 'Gerbang utama & akses keluar kampus'
  },
  basket: {
    id: 'basket',
    name: 'Lapangan Basket UNIB',
    coords: [-3.7595503267493457, 102.26720511569208],
    icon: '🏀',
    desc: 'Fasilitas olahraga lapangan basket'
  },
  gor: {
    id: 'gor',
    name: 'GOR UNIB',
    coords: [-3.76074773232111, 102.26750488781309],
    icon: '🏸',
    desc: 'Gedung Olahraga Universitas Bengkulu'
  },
  hukum: {
    id: 'hukum',
    name: 'Fakultas Hukum',
    coords: [-3.7605312536864184, 102.26847793769042],
    icon: '⚖️',
    desc: 'Fakultas Hukum UNIB'
  },
  feb: {
    id: 'feb',
    name: 'Fakultas Ekonomi dan Bisnis',
    coords: [-3.7616617767927454, 102.26855271182856],
    icon: '💼',
    desc: 'Fakultas Ekonomi dan Bisnis UNIB'
  },
  pertanian: {
    id: 'pertanian',
    name: 'Fakultas Pertanian UNIB',
    coords: [-3.7593752084777687, 102.26922935250059],
    icon: '🌾',
    desc: 'Fakultas Pertanian (FP) UNIB'
  },
  rektorat: {
    id: 'rektorat',
    name: 'Gedung Rektorat',
    coords: [-3.758937446666454, 102.27227166318588],
    icon: '🏢',
    desc: 'Gedung Rektorat Pusat UNIB'
  },
  glt: {
    id: 'glt',
    name: 'Gedung Layanan Terpadu',
    coords: [-3.7579953866240476, 102.27192719771439],
    icon: '🛠️',
    desc: 'Pusat Layanan Terpadu Mahasiswa'
  },
  danau: {
    id: 'danau',
    name: 'Danau UNIB',
    coords: [-3.758364572432455, 102.273120068887],
    icon: '🌊',
    desc: 'Ikonik Danau Universitas Bengkulu'
  },
  mushola: {
    id: 'mushola',
    name: 'Mushola UNIB',
    coords: [-3.757715893568994, 102.2736182830509],
    icon: '🕌',
    desc: 'Fasilitas ibadah (Mushola)'
  },
  gb2: {
    id: 'gb2',
    name: 'GB 2 UNIB',
    coords: [-3.758010528186283, 102.27395776427626],
    icon: '🏫',
    desc: 'Gedung Belajar 2'
  },
  fmipa: {
    id: 'fmipa',
    name: 'FMIPA UNIB',
    coords: [-3.7560285312312187, 102.27476313128244],
    icon: '🔬',
    desc: 'Fakultas Matematika dan Ilmu Pengetahuan Alam'
  },
  upatik: {
    id: 'upatik',
    name: 'UPATIK UNIB',
    coords: [-3.758522464562341, 102.27501919160771],
    icon: '💻',
    desc: 'Pusat Komputer dan TIK Kampus'
  },
  perpustakaan: {
    id: 'perpustakaan',
    name: 'Perpustakaan UNIB',
    coords: [-3.756785983681448, 102.2748615332291],
    icon: '📚',
    desc: 'Gedung Perpustakaan Pusat'
  },
  pkm: {
    id: 'pkm',
    name: 'PKM UNIB',
    coords: [-3.756449566309567, 102.2758265394791],
    icon: '🤝',
    desc: 'Pusat Kegiatan Mahasiswa'
  },
  ft: {
    id: 'ft',
    name: 'FT UNIB',
    coords: [-3.758441886565752, 102.27668755108738],
    icon: '⚙️',
    desc: 'Fakultas Teknik UNIB'
  },
  gsg: {
    id: 'gsg',
    name: 'GSG UNIB',
    coords: [-3.7575273903634456, 102.27656652603036],
    icon: '🎭',
    desc: 'Gedung Serba Guna (GSG)'
  },
  gb3: {
    id: 'gb3',
    name: 'GB 3 UNIB',
    coords: [-3.7564901859145112, 102.27654051141583],
    icon: '🏫',
    desc: 'Gedung Belajar 3'
  },
  gb5: {
    id: 'gb5',
    name: 'GB 5 UNIB',
    coords: [-3.7555256567637896, 102.2764626598008],
    icon: '🏫',
    desc: 'Gedung Belajar 5'
  },
  fkip: {
    id: 'fkip',
    name: 'FKIP UNIB',
    coords: [-3.7561795970982788, 102.27746650376268],
    icon: '📖',
    desc: 'Fakultas Keguruan dan Ilmu Pendidikan'
  },
  danau_fkip: {
    id: 'danau_fkip',
    name: 'DANAU FKIP UNIB',
    coords: [-3.7561297281030677, 102.27796591350565],
    icon: '🦆',
    desc: 'Danau di area FKIP'
  },
  fkik: {
    id: 'fkik',
    name: 'FKIK UNIB',
    coords: [-3.7550800861944125, 102.2780382704129],
    icon: '🩺',
    desc: 'Fakultas Kedokteran dan Ilmu Kesehatan'
  },
  stadion: {
    id: 'stadion',
    name: 'Stadion UNIB',
    coords: [-3.757510342692321, 102.27815529205822],
    icon: '🏟️',
    desc: 'Stadion Pusat Olahraga Mahasiswa'
  }
};

const campusNodes = Object.values(nodes).map(n => ({
  id: n.id,
  nama: n.name,
  lat: n.coords[0],
  lng: n.coords[1],
  icon: n.icon,
  type: n.id.startsWith('gerbang') ? 'gate' : 'building'
}));

// ================================================================
// GRAPH & A*
// ================================================================
const GRAPH = {};
const nodeMap = {};
let map, markers = {}, pathLine, pathGlow;
let satelliteLayer, street2DLayer;
const osrmCache = {};

function haversine(a, b) {
  const R = 6371e3, p = Math.PI / 180;
  const x = Math.sin((b.lat - a.lat) * p / 2) ** 2
    + Math.cos(a.lat * p) * Math.cos(b.lat * p)
    * Math.sin((b.lng - a.lng) * p / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

// Bangun graph dari CAMPUS_ROUTES + KNN untuk memastikan semua node terhubung
function buildGraph() {
  campusNodes.forEach(n => nodeMap[n.id] = n);

  // Inisialisasi graph kosong
  campusNodes.forEach(n => { GRAPH[n.id] = {}; });

  // 1. Tambahkan semua edge dari CAMPUS_ROUTES
  Object.entries(CAMPUS_ROUTES).forEach(([key, val]) => {
    const [u, v] = key.split('|');
    if (nodeMap[u] && nodeMap[v]) {
      GRAPH[u][v] = val.d;
      GRAPH[v][u] = val.d;
    }
  });

  // 2. KNN fallback: pastikan setiap node punya minimal 3 koneksi
  const K = 3;
  campusNodes.forEach(na => {
    const neighbors = Object.keys(GRAPH[na.id]);
    if (neighbors.length < K) {
      const sorted = campusNodes
        .filter(nb => nb.id !== na.id)
        .map(nb => ({ id: nb.id, dist: haversine(na, nb) }))
        .sort((a, b) => a.dist - b.dist);

      let added = 0;
      for (const nb of sorted) {
        if (neighbors.length + added >= K) break;
        if (!GRAPH[na.id][nb.id]) {
          GRAPH[na.id][nb.id] = nb.dist;
          GRAPH[nb.id][na.id] = nb.dist;
          added++;
        }
      }
    }
  });
}

function aStarSearch(startId, endId) {
  const open = [startId], closed = new Set();
  const g = {}, f = {}, came = {};
  Object.keys(GRAPH).forEach(id => { g[id] = Infinity; f[id] = Infinity; });
  g[startId] = 0;
  f[startId] = haversine(nodeMap[startId], nodeMap[endId]);

  while (open.length > 0) {
    let cur = open.reduce((m, n) => f[n] < f[m] ? n : m, open[0]);
    if (cur === endId) {
      const path = [cur];
      while (cur in came) { cur = came[cur]; path.unshift(cur); }
      return path;
    }
    open.splice(open.indexOf(cur), 1);
    closed.add(cur);
    for (let nb in GRAPH[cur]) {
      if (closed.has(nb)) continue;
      const tg = g[cur] + GRAPH[cur][nb];
      if (!open.includes(nb)) open.push(nb);
      else if (tg >= g[nb]) continue;
      came[nb] = cur;
      g[nb] = tg;
      f[nb] = g[nb] + haversine(nodeMap[nb], nodeMap[endId]);
    }
  }
  return null;
}

// ================================================================
// ROUTING — OSRM Langsung (Satu Jalur Bersih Tanpa Cabang Perantara)
// ================================================================
async function fetchDirectRoute(na, nb, mode = 'walk') {
  // Pilih profil OSRM: 'foot' untuk jalan/motor, 'driving' untuk mobil
  const profile = (mode === 'car') ? 'driving' : 'foot';
  const key = `direct|${na.id}|${nb.id}|${profile}`;
  if (osrmCache[key]) return osrmCache[key];

  try {
    const url = `https://router.project-osrm.org/route/v1/${profile}/`
      + `${na.lng},${na.lat};${nb.lng},${nb.lat}`
      + `?overview=full&geometries=geojson`;
    const res  = await fetch(url);
    const data = await res.json();
    if (!data.routes?.length) throw new Error('no route');

    const coords = data.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);
    
    // Paksa start/end tepat di posisi node agar pas di marker
    if (coords.length > 0) {
      coords[0]               = [na.lat, na.lng];
      coords[coords.length-1] = [nb.lat, nb.lng];
    }

    const result = { poly: coords, dist: data.routes[0].distance };
    osrmCache[key] = result;
    return result;
  } catch {
    // Fallback: data pre-built dari CAMPUS_ROUTES jika offline
    const r = getCampusRoute(na.id, nb.id);
    if (r) {
      const result = { poly: r.poly, dist: r.d };
      osrmCache[key] = result;
      return result;
    }
    // Last resort: garis lurus
    return { poly: [[na.lat, na.lng], [nb.lat, nb.lng]], dist: haversine(na, nb) };
  }
}

// ================================================================
// MAP & UI
// ================================================================
function init() {
  buildGraph();
  map = L.map('map', {
    zoomSnap: 0.5, zoomDelta: 0.5, wheelPxPerZoomLevel: 120,
    tap: false, dragging: true, inertia: true, zoomAnimation: true, preferCanvas: true
  }).setView([-3.7580, 102.2720], 16);

  // Satelit Esri — gratis, kualitas tinggi, tanpa API key
  satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USDA, USGS, AEX, GeoEye, Aerogrid, IGN, IGP',
    maxZoom: 19
  });

  // 2D Peta Jalan / OpenStreetMap Standard (Sangat jelas & warna kontras tinggi)
  street2DLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  });

  // Default layer is 2D Street Map (Sangat jelas & berwarna)
  street2DLayer.addTo(map);

  populateSelects();
  drawMarkers();

  document.getElementById('find-path').addEventListener('click', calculatePath);
  document.getElementById('btn-satelit').addEventListener('click', () => setMapLayer('satelit'));
  document.getElementById('btn-2d').addEventListener('click', () => setMapLayer('2d'));

  // Toggle menu for mobile
  const menuToggle = document.getElementById('menu-toggle');
  const searchConsole = document.getElementById('search-console');
  if (menuToggle && searchConsole) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menuToggle.classList.toggle('active');
      searchConsole.classList.toggle('active');
    });

    // Close console if clicking elsewhere
    document.addEventListener('click', (e) => {
      if (!searchConsole.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        searchConsole.classList.remove('active');
      }
    });
  }
}

function setMapLayer(mode) {
  if (mode === 'satelit') {
    map.removeLayer(street2DLayer);
    satelliteLayer.addTo(map);
    document.getElementById('btn-satelit').classList.add('active');
    document.getElementById('btn-2d').classList.remove('active');
  } else {
    map.removeLayer(satelliteLayer);
    street2DLayer.addTo(map);
    document.getElementById('btn-2d').classList.add('active');
    document.getElementById('btn-satelit').classList.remove('active');
  }
}

function populateSelects() {
  const s1 = document.getElementById('start-node');
  const s2 = document.getElementById('end-node');
  s1.innerHTML = "";
  s2.innerHTML = "";
  campusNodes.forEach(n => {
    s1.add(new Option(`${n.icon || ''} ${n.nama}`, n.id));
    s2.add(new Option(`${n.icon || ''} ${n.nama}`, n.id));
  });
  if (campusNodes.length > 1) {
    s2.selectedIndex = 1;
  }
}

function drawMarkers() {
  campusNodes.forEach(n => {
    const m = L.marker([n.lat, n.lng], {
      icon: L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="marker-container" id="marker-${n.id}"><div class="marker-pin"></div><span class="marker-label">${n.nama}</span></div>`,
        iconSize: [12, 12], iconAnchor: [6, 6]
      })
    }).addTo(map);
    m.bindPopup(`<b>${n.nama}</b>`);
    markers[n.id] = m;
  });
}

async function calculatePath() {
  // Close mobile drawer on navigation
  const menuToggle = document.getElementById('menu-toggle');
  const searchConsole = document.getElementById('search-console');
  if (menuToggle && searchConsole) {
    menuToggle.classList.remove('active');
    searchConsole.classList.remove('active');
  }

  const startId = document.getElementById('start-node').value;
  const endId = document.getElementById('end-node').value;
  const mode = document.getElementById('travel-mode').value;
  const btn = document.getElementById('find-path');

  if (startId === endId) {
    alert("Titik awal dan destinasi tidak boleh sama!");
    btn.textContent = "NAVIGASI";
    btn.disabled = false;
    return;
  }

  btn.textContent = "MENGHITUNG...";
  btn.disabled = true;

  try {
    const pathIds = aStarSearch(startId, endId);
    if (!pathIds) {
      alert("Jalur tidak ditemukan antara kedua lokasi ini.");
      return;
    }

    const { poly: finalCoords, dist: totalDist } = await fetchDirectRoute(nodeMap[startId], nodeMap[endId], mode);

    if (!finalCoords || finalCoords.length < 2) {
      alert("Gagal mendapatkan rute jalan. Coba lagi.");
      return;
    }

    // Reset semua marker ke tampilan normal, lalu highlight start/end
    for (let id in markers) {
      const el = document.getElementById(`marker-${id}`);
      if (el) { el.classList.remove('marker-hidden', 'marker-start', 'marker-end'); }
    }
    const se = document.getElementById(`marker-${startId}`);
    if (se) { se.classList.add('marker-start'); }
    const ee = document.getElementById(`marker-${endId}`);
    if (ee) { ee.classList.add('marker-end'); }

    if (pathLine) map.removeLayer(pathLine);
    if (pathGlow) map.removeLayer(pathGlow);

    pathGlow = L.polyline(finalCoords, { color: '#ff3b30', weight: 12, opacity: 0.2, lineCap: 'round' }).addTo(map);
    pathLine = L.polyline(finalCoords, { color: '#ff3b30', weight: 4, opacity: 1, lineCap: 'round' }).addTo(map);

    const paddingVal = window.innerWidth <= 768 ? [40, 40] : [120, 120];
    map.fitBounds(pathLine.getBounds(), { padding: paddingVal });

    const speeds = { walk: 80, motor: 400, car: 250 };
    document.getElementById('res-distance').textContent = `${(totalDist || 0).toFixed(0)} m`;
    document.getElementById('res-time').textContent = `${Math.ceil((totalDist || 0) / speeds[mode])} mnt`;

    const names = pathIds.map(id => nodeMap[id].nama);
    document.getElementById('route-steps').innerHTML =
      `<div style="color:#fff;font-size:0.75rem;opacity:0.8;">${names.join(' <span style="color:#ff3b30;">→</span> ')}</div>`;

  } catch (err) {
    console.error("Error saat navigasi:", err);
    alert("Terjadi kesalahan saat menghitung rute. Silakan coba lagi.");
  } finally {
    // Tombol SELALU diaktifkan kembali, apapun yang terjadi
    btn.textContent = "NAVIGASI";
    btn.disabled = false;
  }
}

init();
