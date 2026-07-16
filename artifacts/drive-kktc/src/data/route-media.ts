import type { RouteData, Stop } from "@/data/routes";

const routeImage = (filename: string) => `/images/routes/${encodeURIComponent(filename)}`;
const photos = (...filenames: string[]) => filenames.map(routeImage);

type RouteMedia = {
  cover: string;
  fallbackPhotos: string[];
};

// These are location photographs kept with the project. Keeping the media map
// separate from the editorial route data makes it straightforward to replace or
// add images without touching the itinerary copy.
const routeMedia: Record<string, RouteMedia> = {
  "forgotten-kingdoms": {
    cover: routeImage("vouni-palace1.jpg"),
    fallbackPhotos: photos("vouni-palace2.jpg", "Soli-ruins1.jpg", "Ancient-theatre-soli1.jpg"),
  },
  "secret-villages": {
    cover: routeImage("korucam3.jpg"),
    fallbackPhotos: photos("Sadrazamköy3.jpeg", "kozan1.webp", "tulipvil1.jpg"),
  },
  "hidden-coastline": {
    cover: routeImage("horseshoe beach.webp"),
    fallbackPhotos: photos("kaplicacoast.webp", "golden beach1.jpg", "capeapostolos1.jpg"),
  },
  "venetian-byzantine": {
    cover: routeImage("kyrenia-castle3.jpg"),
    fallbackPhotos: photos("bellapais3.jpg", "sthilarion2.jpg", "kantara1.jpg"),
  },
  "sunset-stargazing": {
    cover: routeImage("Sadrazamköy3.jpeg"),
    fallbackPhotos: photos("escape beach1.jpg", "kormakitis2.webp", "ronnas bay1.jpg"),
  },
  "legends-mysteries": {
    cover: routeImage("sthilarion2.jpg"),
    fallbackPhotos: photos("buffavento2.jpg", "othello3.jpg", "varosha3.jpg"),
  },
  "vineyards-harvest": {
    cover: routeImage("panagra3.webp"),
    fallbackPhotos: photos("Değirmenlik Village1.jpg", "alevkaya1.webp", "lefkosa old bars2.jpg"),
  },
  "family-beach": {
    cover: routeImage("alagidi1.jpg"),
    fallbackPhotos: photos("escape beach1.jpg", "wilddonkeysanct1.jpg", "golden beach2.jpg"),
  },
  "food-flavors": {
    cover: routeImage("bogazseafood.jpg"),
    fallbackPhotos: photos("guzorangegrove.jpg", "pexels-beyza-yalcin-153182170-20181681.jpg", "lefkosa old bars2.jpg"),
  },
  "karpaz-wild-nature": {
    cover: routeImage("wilddonkeysanct1.jpg"),
    fallbackPhotos: photos("golden beach2.jpg", "capeapostolos3.jpg", "ronnas bay1.jpg"),
  },
};

// A few route IDs retain their longer editorial names in routes.ts. The alias
// keeps their photo configuration concise without compromising lookup safety.
const routeIdAliases: Record<string, string> = {
  "venetian-byzantine-heritage": "venetian-byzantine",
  "family-beach-day": "family-beach",
  "food-and-flavors": "food-flavors",
};

const getMediaRouteId = (routeId: string) => routeIdAliases[routeId] ?? routeId;

const stopMedia: Record<string, string[]> = {
  "forgotten-kingdoms:Vouni Palace": photos("vouni-palace1.jpg", "vouni-palace2.jpg", "vouni-palace3.jpg"),
  "forgotten-kingdoms:Soli Ruins": photos("Soli-ruins1.jpg", "Soli-ruins2.jpg", "Soli-ruins3.jpg"),
  "forgotten-kingdoms:Ancient Theatre of Soli": photos("Ancient-theatre-soli1.jpg", "Ancient-theatre-soli2.jpg", "Ancient-theatre-soli3.jpg"),
  "forgotten-kingdoms:Lefke Old Town": photos("lefke-old-town1.jpg", "lefke-old town2.jpg", "lefke-old-town3.jpg"),
  "forgotten-kingdoms:Ottoman Aqueduct of Lefke": photos("Lefke-Aqueduct-1.jpg", "Lefke-Aqueduct-2.jpg", "lefketownsquare1.webp"),
  "forgotten-kingdoms:Yeşilırmak Coastal Cliffs": photos("yesilirmak1.jpg", "yesilirmak2.jpg", "yesilirmak3.jpg"),
  "forgotten-kingdoms:Gemikonağı Harbour": photos("gemik-mining1.jpg", "gemik-mining-2.jpg", "gemik-mining3.jpg"),

  "secret-villages:Koruçam Village": photos("korucam1.jpg", "korucam2.jpg", "korucam3.jpg"),
  "secret-villages:Tepebaşı (Tulip Village)": photos("tulipvil1.jpg", "tulipvil1.avif", "korucam4.webp"),
  "secret-villages:Kayalar Village": photos("Kavalar.png", "Screenshot 2026-07-16 150948.png", "Sadrazamköy1.jpg"),
  "secret-villages:Sadrazamköy": photos("Sadrazamköy1.jpg", "Sadrazamköy2.jpeg", "Sadrazamköy3.jpeg"),
  "secret-villages:Kozan Village": photos("kozan1.webp", "kozan2.webp", "kozan3.webp"),
  "secret-villages:Kalkanlı": photos("guzorangegrove.jpg", "guzorangegrove.avif", "pexels-merterim-24779063.jpg"),
  "secret-villages:Lefke Town Centre": photos("lefketownsquare1.webp", "lefke-old-town1.jpg", "lefke-old town2.jpg"),

  "hidden-coastline:Blue House Sea Cave": photos("Kavalar.png", "Screenshot 2026-07-16 152956.png", "capeapostolos1.jpg"),
  "hidden-coastline:Camel Point": photos("capeapostolos1.jpg", "capeapostolos2.jpg", "capeapostolos3.jpg"),
  "hidden-coastline:Horseshoe Beach": photos("horseshoe beach.webp", "horseshoe2.webp", "horseshoe3.webp"),
  "hidden-coastline:Kaplıca Coast": photos("kaplicacoast.webp", "kaplicacoast1.webp", "Screenshot 2026-07-16 152956.png"),
  "hidden-coastline:Golden Beach (less crowded end)": photos("golden beach1.jpg", "golden beach2.jpg", "Screenshot 2026-07-16 153924.png"),
  "hidden-coastline:Cape Apostolos Andreas Cliffs": photos("capeapostolos1.jpg", "capeapostolos2.jpg", "capeapostolos3.jpg"),
  "hidden-coastline:Karpaz Gate Marina": photos("karpaz gate marina.jpg", "karpaz gate marina2.jpg", "karpaz gate marina 3.jpg"),

  "venetian-byzantine:Kyrenia Castle": photos("kyreniacastle1.jpg", "kyreniacatle.jpg", "kyrenia-castle3.jpg"),
  "venetian-byzantine:Bellapais Abbey": photos("bellapais1.jpg", "bellapais2.jpg", "bellapais3.jpg"),
  "venetian-byzantine:St. Hilarion Castle": photos("sthilarion1.jpg", "sthilarion2.jpg", "sthillarion3.jpg"),
  "venetian-byzantine:Buffavento Castle": photos("buffavento1.jpg", "buffavento2.jpg", "buffavento3.jpg"),
  "venetian-byzantine:Kantara Castle": photos("kantara1.jpg", "kantara2.jpg", "kantara3.jpg"),
  "venetian-byzantine:Apostolos Andreas Monastery": photos("capeapostolos1.jpg", "capeapostolos2.jpg", "capeapostolos3.jpg"),
  "venetian-byzantine:Othello Tower (Famagusta)": photos("othello1.jpg", "othello2.jpg", "othello3.jpg"),

  "sunset-stargazing:St. Hilarion Viewpoint": photos("sthilarion1.jpg", "sthilarion2.jpg", "sthillarion3.jpg"),
  "sunset-stargazing:Bellapais Terrace": photos("bellapais1.jpg", "bellapais2.jpg", "bellapais3.jpg"),
  "sunset-stargazing:Sadrazamköy Sunset Point": photos("Sadrazamköy1.jpg", "Sadrazamköy2.jpeg", "Sadrazamköy3.jpeg"),
  "sunset-stargazing:Cape Kormakitis": photos("kormakitis1.webp", "kormakitis2.webp", "korucam4.webp"),
  "sunset-stargazing:Escape Beach Sunset Deck": photos("escape beach1.jpg", "escapebeach2.jpg", "Screenshot 2026-07-16 152956.png"),
  "sunset-stargazing:Karpaz Peninsula Night Sky": photos("ronnas bay1.jpg", "capeapostolos3.jpg", "golden beach2.jpg"),
  "sunset-stargazing:Golden Beach": photos("golden beach1.jpg", "golden beach2.jpg", "Screenshot 2026-07-16 153924.png"),

  "legends-mysteries:Golden Beach": photos("golden beach1.jpg", "golden beach2.jpg", "Screenshot 2026-07-16 153924.png"),
  "legends-mysteries:St. Hilarion Castle": photos("sthilarion1.jpg", "sthilarion2.jpg", "sthillarion3.jpg"),
  "legends-mysteries:Bellapais Abbey": photos("bellapais1.jpg", "bellapais2.jpg", "bellapais3.jpg"),
  "legends-mysteries:Buffavento Castle": photos("buffavento1.jpg", "buffavento2.jpg", "buffavento3.jpg"),
  "legends-mysteries:Othello Tower": photos("othello1.jpg", "othello2.jpg", "othello3.jpg"),
  "legends-mysteries:Varosha": photos("varosha1.jpg", "varosha2.jpg", "varosha3.jpg"),
  "legends-mysteries:Apostolos Andreas Monastery": photos("capeapostolos1.jpg", "capeapostolos2.jpg", "capeapostolos3.jpg"),
  "legends-mysteries:Vouni Palace": photos("vouni-palace1.jpg", "vouni-palace2.jpg", "vouni-palace3.jpg"),

  "vineyards-harvest:Panagra Winery": photos("panagra1.webp", "panagra2.webp", "panagra3.webp"),
  "vineyards-harvest:Değirmenlik Village": photos("Değirmenlik Village1.jpg", "Değirmenlik Village2.jpg", "pexels-merterim-24779063.jpg"),
  "vineyards-harvest:Alevkaya Herbarium & Forest": photos("alevkaya1.webp", "alevkaya3.jpg", "pexels-beyza-yalcin-153182170-20181681.jpg"),
  "vineyards-harvest:Değirmenlik Restaurant": photos("Screenshot 2026-07-16 152956.png", "bogazseafood.jpg", "bogazseafood2.jpg"),
  "vineyards-harvest:Lefkoşa Old Town Wine Bars": photos("lefkosa old bars1.jpg", "lefkosa old bars2.jpg", "pexels-zehra-gor-100261023-15301611.jpg"),
  "vineyards-harvest:Boğaz Village & Harbour": photos("bogazseafood.jpg", "bogazseafood2.jpg", "bogaz1.jpg"),
  "vineyards-harvest:Kantara Castle Viewpoint": photos("kantara1.jpg", "kantara2.jpg", "kantara3.jpg"),

  "family-beach:Alagadi Turtle Beach": photos("alagidi1.jpg", "alagidi2.jpg", "alagidi3.jpg"),
  "family-beach:Escape Beach": photos("escape beach1.jpg", "escapebeach2.jpg", "Screenshot 2026-07-16 152956.png"),
  "family-beach:Kyrenia Harbour": photos("kyreniacastle1.jpg", "kyreniacatle.jpg", "kyrenia-castle3.jpg"),
  "family-beach:Karpaz Wild Donkey Sanctuary Area": photos("wilddonkeysanct1.jpg", "wilddonkeysanct2.jpg", "wilddonkeysanct3.jpg"),
  "family-beach:Golden Beach": photos("golden beach1.jpg", "golden beach2.jpg", "Screenshot 2026-07-16 153924.png"),
  "family-beach:Dipkarpaz Village": photos("dipvil1.jpg", "yerenikoy1.jpg", "pexels-merterim-24779063.jpg"),

  "food-flavors:Güzelyurt Orange Groves": photos("guzorangegrove.jpg", "guzorangegrove.avif", "pexels-m1ddl3-m7n-288920932-14766898.jpg"),
  "food-flavors:Village Halloumi Dairy": photos("pexels-beyza-yalcin-153182170-20181681.jpg", "Screenshot 2026-07-16 152956.png", "bogazseafood.jpg"),
  "food-flavors:Lefke Old Town Bakeries": photos("lefke-old-town1.jpg", "lefke-old town2.jpg", "lefke-old-town3.jpg"),
  "food-flavors:Değirmenlik Restaurant (Mezze Lunch)": photos("Screenshot 2026-07-16 152956.png", "bogazseafood.jpg", "bogazseafood2.jpg"),
  "food-flavors:Alevkaya Honey & Herb Producers": photos("pexels-beyza-yalcin-153182170-20181681.jpg", "alevkaya1.webp", "alevkaya3.jpg"),
  "food-flavors:Boğaz Harbour Seafood": photos("bogazseafood.jpg", "bogazseafood2.jpg", "bogaz1.jpg"),

  "karpaz-wild-nature:Yenierenköy": photos("yerenikoy1.jpg", "karpaz gate marina.jpg", "ronnas bay1.jpg"),
  "karpaz-wild-nature:Karpaz National Park": photos("karpaz national p[ark1.jpg", "wilddonkeysanct1.jpg", "capeapostolos3.jpg"),
  "karpaz-wild-nature:Golden Beach": photos("golden beach1.jpg", "golden beach2.jpg", "Screenshot 2026-07-16 153924.png"),
  "karpaz-wild-nature:Dipkarpaz Village": photos("dipvil1.jpg", "yerenikoy1.jpg", "pexels-merterim-24779063.jpg"),
  "karpaz-wild-nature:Zafer Burnu (Cape Apostolos Andreas)": photos("capeapostolos1.jpg", "capeapostolos2.jpg", "capeapostolos3.jpg"),
  "karpaz-wild-nature:Apostolos Andreas Monastery": photos("capeapostolos1.jpg", "capeapostolos2.jpg", "capeapostolos3.jpg"),
  "karpaz-wild-nature:Ronnas Bay": photos("ronnas bay1.jpg", "golden beach2.jpg", "capeapostolos3.jpg"),
};

export function getRouteCover(route: Pick<RouteData, "id">) {
  return routeMedia[getMediaRouteId(route.id)]?.cover ?? routeImage("vouni-palace1.jpg");
}

export function getStopPhotos(route: Pick<RouteData, "id">, stop: Pick<Stop, "name">) {
  const mediaRouteId = getMediaRouteId(route.id);
  return stopMedia[`${mediaRouteId}:${stop.name}`] ?? routeMedia[mediaRouteId]?.fallbackPhotos ?? [];
}
