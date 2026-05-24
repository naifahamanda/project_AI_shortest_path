// ================================================================
// CAMPUS_ROUTES — Koneksi jalan antar gedung UNIB (ID baru)
// Digunakan sebagai fallback ketika OSRM tidak tersedia
// ================================================================
const CAMPUS_ROUTES = {
  // === GERBANG & AREA BARAT ===
  "gerbang|basket": { d: 90, poly: [[-3.7591, 102.2666], [-3.7596, 102.2672]] },
  "basket|gor": { d: 130, poly: [[-3.7596, 102.2672], [-3.7607, 102.2675]] },
  "basket|pertanian": { d: 230, poly: [[-3.7596, 102.2672], [-3.7594, 102.2692]] },
  "gor|hukum": { d: 120, poly: [[-3.7607, 102.2675], [-3.7605, 102.2685]] },
  "hukum|feb": { d: 130, poly: [[-3.7605, 102.2685], [-3.7617, 102.2686]] },
  "hukum|pertanian": { d: 200, poly: [[-3.7605, 102.2685], [-3.7594, 102.2692]] },

  // === PERTANIAN & REKTORAT ===
  "pertanian|rektorat": { d: 350, poly: [[-3.7594, 102.2692], [-3.7589, 102.2723]] },
  "rektorat|glt": { d: 110, poly: [[-3.7589, 102.2723], [-3.7580, 102.2719]] },
  "rektorat|danau": { d: 180, poly: [[-3.7589, 102.2723], [-3.7584, 102.2731]] },
  "glt|danau": { d: 120, poly: [[-3.7580, 102.2719], [-3.7584, 102.2731]] },
  "glt|mushola": { d: 170, poly: [[-3.7580, 102.2719], [-3.7577, 102.2736]] },

  // === AREA TENGAH ===
  "danau|mushola": { d: 90, poly: [[-3.7584, 102.2731], [-3.7577, 102.2736]] },
  "danau|gb2": { d: 100, poly: [[-3.7584, 102.2731], [-3.7580, 102.2740]] },
  "mushola|gb2": { d: 80, poly: [[-3.7577, 102.2736], [-3.7580, 102.2740]] },
  "mushola|fmipa": { d: 200, poly: [[-3.7577, 102.2736], [-3.7560, 102.2748]] },
  "gb2|upatik": { d: 120, poly: [[-3.7580, 102.2740], [-3.7585, 102.2750]] },
  "gb2|perpustakaan": { d: 170, poly: [[-3.7580, 102.2740], [-3.7568, 102.2749]] },

  // === AREA PERPUSTAKAAN & FMIPA ===
  "fmipa|perpustakaan": { d: 80, poly: [[-3.7560, 102.2748], [-3.7568, 102.2749]] },
  "perpustakaan|pkm": { d: 110, poly: [[-3.7568, 102.2749], [-3.7564, 102.2758]] },
  "upatik|ft": { d: 180, poly: [[-3.7585, 102.2750], [-3.7584, 102.2767]] },

  // === AREA TIMUR (GSG, GB, FT, FKIP) ===
  "pkm|gb3": { d: 110, poly: [[-3.7564, 102.2758], [-3.7565, 102.2765]] },
  "ft|gsg": { d: 100, poly: [[-3.7584, 102.2767], [-3.7575, 102.2766]] },
  "gsg|gb3": { d: 110, poly: [[-3.7575, 102.2766], [-3.7565, 102.2765]] },
  "gb3|gb5": { d: 110, poly: [[-3.7565, 102.2765], [-3.7555, 102.2765]] },
  "gb3|fkip": { d: 110, poly: [[-3.7565, 102.2765], [-3.7562, 102.2775]] },
  "gb5|fkip": { d: 130, poly: [[-3.7555, 102.2765], [-3.7562, 102.2775]] },

  // === AREA UTARA (FKIP, FKIK, STADION) ===
  "fkip|danau_fkip": { d: 60, poly: [[-3.7562, 102.2775], [-3.7561, 102.2780]] },
  "fkip|fkik": { d: 130, poly: [[-3.7562, 102.2775], [-3.7551, 102.2780]] },
  "danau_fkip|fkik": { d: 110, poly: [[-3.7561, 102.2780], [-3.7551, 102.2780]] },
  "fkik|stadion": { d: 270, poly: [[-3.7551, 102.2780], [-3.7575, 102.2782]] },
  "ft|stadion": { d: 160, poly: [[-3.7584, 102.2767], [-3.7575, 102.2782]] },
  "gsg|stadion": { d: 130, poly: [[-3.7575, 102.2766], [-3.7575, 102.2782]] },
};

// Lookup rute: coba kedua arah
function getCampusRoute(idA, idB) {
  const k1 = `${idA}|${idB}`;
  const k2 = `${idB}|${idA}`;
  if (CAMPUS_ROUTES[k1]) return { ...CAMPUS_ROUTES[k1], reversed: false };
  if (CAMPUS_ROUTES[k2]) return {
    ...CAMPUS_ROUTES[k2],
    poly: [...CAMPUS_ROUTES[k2].poly].reverse(),
    reversed: true
  };
  return null;
}
