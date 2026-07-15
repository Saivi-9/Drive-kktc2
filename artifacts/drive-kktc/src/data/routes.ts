// Drive KKTC — curated self-drive route data for Northern Cyprus (TRNC).
// All content is original editorial writing grounded in real geography and history.
// Coordinates are approximate WGS84 decimal degrees, suitable for map pins and Google Maps links.

export interface Stop {
  name: string;
  description: string;
  coordinates: [number, number]; // [lat, lng]
  hours: string;
  entryFee: string;
  parking: string;
  accessibility: string;
  timeRequired: string;
  photographyTip: string;
  nearbyRestaurant: string;
  nearbyAttraction: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type Category =
  | 'History'
  | 'Nature'
  | 'Food'
  | 'Family Friendly'
  | 'Photography'
  | 'Coastline'
  | 'Villages'
  | 'Sunset'
  | 'Wine';

export type Difficulty = 'Easy' | 'Moderate' | 'Challenging';

export interface RouteData {
  id: string;
  slug: string;
  title: string;
  icon: string; // lucide-react icon name, chosen by frontend
  theme: string;
  tagline: string;
  category: Category[];
  difficulty: Difficulty;
  duration: string;
  distanceKm: number;
  drivingTimeHours: number;
  walkingTimeHours: number;
  bestSeason: string;
  budget: string;
  heroDescription: string;
  stops: Stop[];
  travelTips: string[];
  insiderTips: string[];
  faq: FaqItem[];
}

export const routes: RouteData[] = [
  {
    id: 'forgotten-kingdoms',
    slug: 'forgotten-kingdoms',
    title: 'Forgotten Kingdoms',
    icon: 'landmark',
    theme: 'Hidden medieval ruins and abandoned civilizations',
    tagline: 'Drive through 3,000 years of empires that time left behind.',
    category: ['History', 'Photography'],
    difficulty: 'Moderate',
    duration: '1 Day (7-8 hours)',
    distanceKm: 128,
    drivingTimeHours: 2.5,
    walkingTimeHours: 3,
    bestSeason: 'October to April',
    budget: '250-400 TRY per person (entry fees + fuel + lunch)',
    heroDescription:
      "This route traces the island's forgotten dynasties along the northwest coast, from a Persian-era hilltop palace to a Roman theatre still cut into the hillside. Few tour buses make it out here, so you will often have entire ruined cities to yourself.",
    stops: [
      {
        name: 'Vouni Palace',
        description:
          "Perched 250 metres above the sea on a windswept ridge, Vouni Palace was built around 500 BC, most likely by a pro-Persian king of Marion looking to keep watch over the pro-Greek city of Soli just down the coast. Archaeologists uncovered a striking blend of Persian and Greek architecture: a monumental staircase, a sunken bathing pool, and a shrine to Athena. The palace was deliberately burned and abandoned around 380 BC, freezing it in time. Today only foundations remain, but the 360-degree view over the Morphou Bay makes the climb worthwhile on its own.",
        coordinates: [35.1494, 32.7333],
        hours: '9:00 - 17:00 daily (16:00 in winter)',
        entryFee: '~15 TRY',
        parking: 'Small gravel lot at the base of the access road, free',
        accessibility: 'Uneven stone paths and stairs; not wheelchair accessible',
        timeRequired: '45-60 minutes',
        photographyTip:
          'Shoot from the highest terrace at the northwest corner just before sunset for a golden light over Morphou Bay.',
        nearbyRestaurant: 'Riverside fish taverns in Gemikonağı, 15 minutes away',
        nearbyAttraction: 'Soli Ruins, an 8-minute drive downhill',
      },
      {
        name: 'Soli Ruins',
        description:
          'Founded in the 6th century BC and later rebuilt by the Romans, Soli was once one of the ten city-kingdoms of ancient Cyprus. Its remains include a colonnaded agora, a basilica with a famous swan mosaic (partially preserved), and remnants of a Roman aqueduct. The site was named for the Athenian statesman Solon, who is said to have advised the local king to move his capital here. Walking the excavated colonnade at midday, cicadas humming in the carob trees, is as close as Cyprus gets to a private audience with antiquity.',
        coordinates: [35.1478, 32.7628],
        hours: '9:00 - 17:00 daily',
        entryFee: '~15 TRY (combined ticket available with Vouni Palace)',
        parking: 'Paved lot at the entrance, free',
        accessibility: 'Mostly flat gravel paths; partially accessible',
        timeRequired: '45 minutes',
        photographyTip: 'The mosaic floor photographs best in soft, overcast light to avoid harsh glare off the marble.',
        nearbyRestaurant: 'Değirmenlik Restaurant, Lefke, 20 minutes',
        nearbyAttraction: 'Ancient Theatre of Soli, a 3-minute walk uphill',
      },
      {
        name: 'Ancient Theatre of Soli',
        description:
          "A restored Roman theatre carved directly into the hillside above the ruins, originally seating around 3,500 spectators for tragedies and gladiatorial games. It was heavily reconstructed in the 1960s using original stones wherever possible, and today hosts occasional open-air performances. Standing on the stage and speaking normally, you can be heard clearly from the topmost row — an acoustic trick built into the amphitheatre's curve two thousand years ago.",
        coordinates: [35.1487, 32.7637],
        hours: '9:00 - 17:00 daily (shared ticket with Soli Ruins)',
        entryFee: 'Included with Soli Ruins ticket',
        parking: 'Shared with Soli Ruins car park',
        accessibility: 'Stepped seating, no wheelchair access',
        timeRequired: '20-30 minutes',
        photographyTip: 'Stand at the top row and shoot down toward the stage and the sea beyond — it frames the whole coastline.',
        nearbyRestaurant: 'Değirmenlik Restaurant, Lefke, 20 minutes',
        nearbyAttraction: 'Lefke Old Town, 15-minute drive',
      },
      {
        name: 'Lefke Old Town',
        description:
          'Lefke (Lefka) was once the wealthiest town on the island thanks to copper mining and citrus orchards, and its old quarter still shows it: Ottoman houses with carved wooden balconies, a 16th-century mosque, and quiet courtyards shaded by orange trees. The town produces the small, intensely sweet Lefke orange, celebrated every March with its own festival. Wander the backstreets near the old market and you will find working artisans, tiny neighbourhood mosques, and locals who still greet strangers with an offer of coffee.',
        coordinates: [35.1119, 32.8506],
        hours: 'Streets always open; shops typically 9:00-18:00',
        entryFee: 'Free to explore',
        parking: 'Street parking near the market square',
        accessibility: 'Mostly flat, some cobblestone streets',
        timeRequired: '1 hour',
        photographyTip: 'The orange-tree courtyards behind the old mosque are magical in late afternoon light.',
        nearbyRestaurant: 'Lefke Kebap Evi, in the town centre',
        nearbyAttraction: 'Ottoman Aqueduct of Lefke, 5-minute drive',
      },
      {
        name: 'Ottoman Aqueduct of Lefke',
        description:
          'Built in the Ottoman period to carry mountain spring water into Lefke, this stone aqueduct still arches gracefully over a small valley on the edge of town, half-swallowed by fig trees and wild bougainvillea. It is one of the least-visited historic structures in Northern Cyprus, which is precisely its charm: no ticket booth, no crowd, just weathered stone and running water exactly as engineers left it two centuries ago.',
        coordinates: [35.1147, 32.8461],
        hours: 'Always accessible (unmanaged site)',
        entryFee: 'Free',
        parking: 'Roadside pull-off near the aqueduct',
        accessibility: 'Uneven dirt path, moderate walking required',
        timeRequired: '20 minutes',
        photographyTip: 'Shoot from below the arches looking up to capture the scale against the sky.',
        nearbyRestaurant: 'Lefke Kebap Evi, 5 minutes back in town',
        nearbyAttraction: 'Yeşilırmak Coastal Cliffs, 20-minute drive',
      },
      {
        name: 'Yeşilırmak Coastal Cliffs',
        description:
          'Where the Troodos foothills meet the sea, red-brown cliffs drop straight into deep blue water, riddled with old copper-mining scars from the early 20th century. The village of Yeşilırmak (Limnitis) sits just behind the cliffs, largely bypassed by development, and the coastal road here offers some of the most dramatic, least-photographed panoramas on the island.',
        coordinates: [35.1875, 32.7333],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Roadside viewpoint pull-offs',
        accessibility: 'Viewpoints accessible by car; cliff paths are uneven',
        timeRequired: '30 minutes',
        photographyTip: 'Best light is mid-morning when the sun catches the rust-red cliff face against the turquoise water.',
        nearbyRestaurant: 'Harbour cafés in Gemikonağı, 10 minutes',
        nearbyAttraction: 'Gemikonağı Harbour, 10-minute drive',
      },
      {
        name: 'Gemikonağı Harbour',
        description:
          "This small industrial harbour once shipped copper ore from the Lefke mines to the world; today its rusted loading gantry stands as an accidental monument, framed against fishing boats and sunset skies. A handful of unpretentious seafood restaurants line the water, serving the day's catch to a mostly local crowd. It is the kind of place travel photographers stumble on by accident and can't stop shooting.",
        coordinates: [35.1656, 32.7369],
        hours: 'Always accessible; restaurants typically open 12:00-23:00',
        entryFee: 'Free',
        parking: 'Free lot along the harbour road',
        accessibility: 'Flat, paved harbourfront',
        timeRequired: '45 minutes including a meal',
        photographyTip: 'The old loading gantry silhouettes beautifully at sunset — arrive 30 minutes before golden hour.',
        nearbyRestaurant: 'Harbour View Fish Restaurant, on site',
        nearbyAttraction: 'Vouni Palace, 15-minute drive back east',
      },
    ],
    travelTips: [
      'Fill your tank in Güzelyurt before starting — fuel stations thin out west of Lefke.',
      'Bring water and a hat; the ruins have almost no shade.',
      'Combined tickets for Vouni Palace and Soli save both time and money — ask at either gate.',
      'Mobile signal is patchy around Vouni Palace; download offline maps beforehand.',
    ],
    insiderTips: [
      "Arrive at Vouni Palace right at opening — you'll likely have the entire ridge to yourself for the first hour.",
      "Lefke's Thursday morning market is the best place to buy Lefke oranges directly from growers, in season (Dec-Mar).",
      'Ask any Gemikonağı restaurant owner about the old copper mine — most have family stories that never make it into guidebooks.',
    ],
    faq: [
      {
        question: 'Is this route suitable for a rental sedan, or do I need a 4x4?',
        answer:
          'A standard rental car handles this route comfortably. The access road to Vouni Palace is paved but narrow near the top — drive slowly and yield on blind curves.',
      },
      {
        question: 'Can I do this route with young children?',
        answer:
          'Yes, though the ruins involve walking on uneven ground. The theatre steps and open ridge at Vouni are the trickiest sections; keep an eye on younger children there.',
      },
      {
        question: 'Is there shade or shelter if it rains?',
        answer:
          'Lefke Old Town has covered cafés and shops. The ruin sites themselves are fully exposed, so check the forecast before setting out in winter.',
      },
    ],
  },
  {
    id: 'secret-villages',
    slug: 'secret-villages',
    title: 'Secret Villages & Local Life',
    icon: 'home',
    theme: 'Traditional villages untouched by mass tourism',
    tagline: 'Meet the Northern Cyprus that never made it onto a postcard.',
    category: ['Villages', 'Food'],
    difficulty: 'Easy',
    duration: '1 Day (6-7 hours)',
    distanceKm: 96,
    drivingTimeHours: 2,
    walkingTimeHours: 2,
    bestSeason: 'March to May (tulip season) and September to November',
    budget: '200-350 TRY per person',
    heroDescription:
      'This is the anti-itinerary: no castles, no crowds, just olive groves, stone churches, and villages where the biggest event of the week is still market day. Expect to be waved at by strangers and offered more coffee than you can drink.',
    stops: [
      {
        name: 'Koruçam Village',
        description:
          "Koruçam (Kormakitis) is the heart of Cyprus's small Maronite Christian community, whose ancestors arrived from Lebanon centuries ago and still speak a unique Cypriot Maronite Arabic dialect alongside Greek and Turkish. The village church, Ayios Georgios, anchors a tight cluster of stone houses, and elderly residents often sit outside in the late morning, happy to chat if you greet them. It is one of the last places on the island where a genuinely distinct minority culture survives intact.",
        coordinates: [35.3389, 32.9525],
        hours: 'Village always open; church hours vary, generally mornings',
        entryFee: 'Free',
        parking: 'Free street parking near the church square',
        accessibility: 'Flat village streets, some unpaved',
        timeRequired: '45 minutes',
        photographyTip: 'The whitewashed church against the blue sky is the classic shot — go before 11am for soft light.',
        nearbyRestaurant: 'Village kahve (coffeehouse) on the main square',
        nearbyAttraction: 'Cape Kormakitis lighthouse, 15-minute drive north',
      },
      {
        name: 'Tepebaşı (Tulip Village)',
        description:
          "Every spring, the fields around Tepebaşı burst into wild tulip bloom — a native Cyprus species (Tulipa cypria) found almost nowhere else on the island. Villagers have started small roadside stalls selling honey, thyme, and preserves during the March-April season, turning tulip season into an unofficial local festival. Outside bloom season, it remains a peaceful farming village worth a slow drive-through for the terracotta rooftops and citrus groves.",
        coordinates: [35.3134, 32.9931],
        hours: 'Always accessible; tulip fields best late March to mid-April',
        entryFee: 'Free',
        parking: 'Roadside pull-offs near the fields',
        accessibility: 'Field paths are uneven and can be muddy after rain',
        timeRequired: '30-45 minutes',
        photographyTip: 'Get low to the ground with a wide lens to fill the frame with tulips and blue sky behind.',
        nearbyRestaurant: 'Home-style lokanta in nearby Kayalar village',
        nearbyAttraction: 'Kayalar Village, 10-minute drive',
      },
      {
        name: 'Kayalar Village',
        description:
          "A quiet farming village known locally for its honey and carob production, Kayalar (Orga) sits among rolling hills dotted with old stone terracing. The village square has a handful of unmarked family-run lokantas serving whatever was cooked that morning — usually the best, most unpretentious meal on the whole route. There is no tourist infrastructure here at all, which is exactly the point.",
        coordinates: [35.3364, 32.9736],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Free parking around the village square',
        accessibility: 'Flat village centre, unpaved lanes',
        timeRequired: '45 minutes including lunch',
        photographyTip: 'The stone terracing on the hillsides catches beautiful texture in low afternoon sun.',
        nearbyRestaurant: 'Kayalar Village Lokantası, on the main square',
        nearbyAttraction: 'Sadrazamköy, 20-minute drive',
      },
      {
        name: 'Sadrazamköy',
        description:
          "The northwesternmost village on the Karpaz-style tip of the peninsula, Sadrazamköy (Livera) feels like the edge of the world — low stone houses, free-roaming goats, and a coastline that erupts into brilliant orange at sunset. It shares its name with an unrelated but excellent sunset viewpoint just outside the village, where locals gather most evenings with folding chairs and thermoses of tea.",
        coordinates: [35.3625, 32.9903],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Open gravel areas throughout the village',
        accessibility: 'Flat but unpaved village roads',
        timeRequired: '30 minutes',
        photographyTip: 'Return here at golden hour if your schedule allows — the sunset light on the stone houses is exceptional.',
        nearbyRestaurant: 'Bring supplies — no formal restaurants in the village itself',
        nearbyAttraction: 'Kozan Village, 25-minute drive south',
      },
      {
        name: 'Kozan Village',
        description:
          'Set in the folds of the Kyrenia mountain range, Kozan is known for its cooler microclimate, walnut trees, and a small stone church that predates Ottoman rule. Village life here still runs on an agricultural calendar — you may pass mule-drawn carts loaded with fruit, or elderly farmers tending terraced gardens exactly as their grandparents did. It is a five-minute stop that quietly resets your sense of pace.',
        coordinates: [35.2919, 33.1567],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Free roadside parking',
        accessibility: 'Hilly, narrow streets; comfortable walking shoes recommended',
        timeRequired: '30 minutes',
        photographyTip: 'The mountain backdrop behind the church roofline is the standout composition.',
        nearbyRestaurant: 'Village kahve near the church',
        nearbyAttraction: 'Kalkanlı, 20-minute drive',
      },
      {
        name: 'Kalkanlı',
        description:
          "Kalkanlı sits close to the university town of Güzelyurt and blends citrus farming with a growing student-town energy nearby, but the village core has kept its character: a domed mosque, narrow lanes, and orchards heavy with oranges and grapefruits from November through February. It's an easy, unhurried final village stop before heading back toward Lefke.",
        coordinates: [35.2019, 32.9525],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Free street parking',
        accessibility: 'Flat, mostly paved streets',
        timeRequired: '30 minutes',
        photographyTip: 'Citrus groves in fruiting season (Nov-Feb) make a vivid orange-and-green backdrop for portraits.',
        nearbyRestaurant: 'Güzelyurt town centre restaurants, 10 minutes away',
        nearbyAttraction: 'Lefke Town Centre, 20-minute drive',
      },
      {
        name: 'Lefke Town Centre',
        description:
          "Ending the day in Lefke's town centre lets you close the loop with dinner among Ottoman-era architecture and the gentle bustle of a real working town rather than a tourist strip. Grab a Turkish coffee at one of the old coffeehouses on the main square and watch the evening unfold — backgammon games, kids on bicycles, and the call to prayer echoing gently off stone walls.",
        coordinates: [35.1119, 32.8506],
        hours: 'Shops and cafés typically 9:00-22:00',
        entryFee: 'Free',
        parking: 'Public parking near the market square',
        accessibility: 'Flat, mostly paved',
        timeRequired: '1 hour',
        photographyTip: 'Streetlamps and café lights make the square glow warmly after dusk — bring a tripod for long exposures.',
        nearbyRestaurant: 'Lefke Kebap Evi, on the main square',
        nearbyAttraction: "Ottoman Aqueduct, a 5-minute drive if you have energy left",
      },
    ],
    travelTips: [
      'Cash (Turkish Lira) is essential — most village lokantas and stalls do not take cards.',
      'A few words of Turkish greeting go a long way here; a simple "merhaba" opens doors.',
      'Villages have minimal signage — download offline maps before you leave Kyrenia or Nicosia.',
      'Most village restaurants have no menu; just ask what they cooked today.',
    ],
    insiderTips: [
      'Tulip season is short and weather-dependent — call ahead to a Tepebaşı stallholder if you can, to check bloom status.',
      'Kayalar honey sellers often keep their best jars for regulars, but a friendly chat and a bit of patience usually gets you the good stuff too.',
      "Sadrazamköy's sunset point gets a small but loyal local crowd every clear evening — arrive early to get a good spot.",
    ],
    faq: [
      {
        question: 'Do people in these villages speak English?',
        answer:
          'Younger residents often do; older residents may not. A translation app and a warm smile will get you further than perfect grammar.',
      },
      {
        question: 'Is it rude to take photos of villagers or their homes?',
        answer:
          'Always ask first, even with gestures. Most people are happy to be photographed once asked, and many will invite you in for coffee afterward.',
      },
      {
        question: "What's the best time of year for this route?",
        answer:
          'Late March to mid-April for wild tulips in bloom, or September to November for harvest season and cooler driving weather.',
      },
    ],
  },
  {
    id: 'hidden-coastline',
    slug: 'hidden-coastline',
    title: 'Hidden Coastline & Sea Caves',
    icon: 'waves',
    theme: 'Wild coastline, caves, cliffs and secluded beaches',
    tagline: 'Where the Mediterranean carves its own architecture.',
    category: ['Coastline', 'Nature', 'Photography'],
    difficulty: 'Moderate',
    duration: '1 Day (7-8 hours)',
    distanceKm: 210,
    drivingTimeHours: 3.5,
    walkingTimeHours: 2,
    bestSeason: 'May to June and September to October',
    budget: '300-500 TRY per person',
    heroDescription:
      'From a sea cave with an eerie blue glow to the last untouched stretches of Golden Beach, this route strings together the wildest edges of the coastline. Bring swimwear — several stops demand it.',
    stops: [
      {
        name: 'Blue House Sea Cave',
        description:
          "Named for the striking cobalt light that fills the cave when the midday sun hits the water at the right angle, this sea cave near Kaplıca is reachable by a short scramble down volcanic rock or by swimming in from a nearby cove. Local fishermen have used it as a shelter for generations; today it's a quiet swimming spot known mostly to residents of nearby villages.",
        coordinates: [35.4711, 33.9328],
        hours: 'Best visited 11:00-14:00 for the blue-light effect',
        entryFee: 'Free',
        parking: 'Small dirt pull-off above the trailhead',
        accessibility: 'Steep rocky scramble; sturdy shoes essential, not suitable for young children',
        timeRequired: '1 hour including swim',
        photographyTip: 'Shoot from inside the cave looking out toward the entrance to capture the blue glow against the dark rock.',
        nearbyRestaurant: 'Kaplıca Coast beach cafés, 10 minutes away',
        nearbyAttraction: 'Camel Point, 15-minute drive',
      },
      {
        name: 'Camel Point',
        description:
          "Camel Point (Deve Burnu) earns its name from twin rock formations that resemble a resting camel's humps, rising from turquoise water just off a rugged headland. It's a favourite spot for cliff photography and, on calm days, cliff jumping by confident local swimmers. The surrounding scrubland is home to wild caper bushes that locals harvest each spring.",
        coordinates: [35.4889, 33.9575],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Roadside gravel parking',
        accessibility: 'Uneven headland paths, moderate walking',
        timeRequired: '30-45 minutes',
        photographyTip: 'A drone shot (where legally permitted) captures the camel-hump rock formation best; otherwise shoot from the eastern cliff edge.',
        nearbyRestaurant: 'Horseshoe Beach snack bar, 10 minutes',
        nearbyAttraction: 'Horseshoe Beach, 10-minute drive',
      },
      {
        name: 'Horseshoe Beach',
        description:
          'A near-perfect crescent of golden sand wrapped by low cliffs, Horseshoe Beach (Alaçatı) stays remarkably uncrowded even in peak summer thanks to a bumpy access track that keeps casual visitors away. The bay is sheltered from prevailing winds, making the water almost lake-calm most mornings — ideal for a mid-route swim.',
        coordinates: [35.5083, 34.0181],
        hours: 'Always accessible; unofficial beach with no facilities',
        entryFee: 'Free',
        parking: 'Dirt lot at the top of the access track',
        accessibility: 'Steep dirt track down to the beach; 4x4 recommended in wet weather',
        timeRequired: '1 hour',
        photographyTip: 'Shoot the crescent shape from the cliff above before descending — it only reads as a horseshoe from height.',
        nearbyRestaurant: 'Bring your own supplies — no facilities on site',
        nearbyAttraction: 'Kaplıca Coast, 20-minute drive',
      },
      {
        name: 'Kaplıca Coast',
        description:
          "The stretch of coastline around Kaplıca combines pebble coves, a small fishing harbour, and a scatter of relaxed beach restaurants serving grilled fish caught that morning. It makes an easy, comfortable base for a proper lunch stop midway through the route, with enough shade and seating to recover from the morning's scrambling and swimming.",
        coordinates: [35.4744, 33.9161],
        hours: 'Restaurants typically 11:00-22:00',
        entryFee: 'Free to visit the coast; restaurant prices vary',
        parking: 'Free lots along the coast road',
        accessibility: 'Flat harbour area, easy walking',
        timeRequired: '1-1.5 hours for lunch',
        photographyTip: 'The small fishing boats at the harbour make excellent foreground subjects at midday.',
        nearbyRestaurant: 'Kaplıca Beach Restaurant, on site',
        nearbyAttraction: 'Golden Beach, 45-minute drive east',
      },
      {
        name: 'Golden Beach (less crowded end)',
        description:
          "Golden Beach (Nangomi Bay) stretches for kilometres along the Karpaz Peninsula, and while its western access point sees the most visitors, the far eastern end near the Ronnas Bay turn-off remains wild and nearly empty — just soft golden sand, sea turtle nesting signs in summer, and the occasional wild donkey wandering out of the scrub. It is one of the last truly undeveloped great beaches in the Mediterranean.",
        coordinates: [35.6167, 34.5667],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Informal parking areas along the dirt access road',
        accessibility: 'Soft sand, long walk from parking to the quiet stretch',
        timeRequired: '1.5-2 hours',
        photographyTip: 'Walk at least 20 minutes east from the main access point for empty-beach shots with no other visitors in frame.',
        nearbyRestaurant: 'Basic beach shacks near the main access point',
        nearbyAttraction: 'Cape Apostolos Andreas Cliffs, 30-minute drive',
      },
      {
        name: 'Cape Apostolos Andreas Cliffs',
        description:
          "At the very tip of the Karpaz Peninsula, dramatic limestone cliffs drop into water so clear you can see the seabed from twenty metres up. This is mainland Cyprus's easternmost point, and on a clear day the coast of Turkey is visible across the water. The cliffs are largely unfenced and unmanaged, which makes them both spectacular and a place to watch your footing.",
        coordinates: [35.6725, 34.5769],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Gravel lot near the monastery access road',
        accessibility: 'Uneven, unfenced cliff edges — supervise children closely',
        timeRequired: '45 minutes',
        photographyTip: 'Wide-angle shots from the highest point capture the cliff, the open sea, and the peninsula curving away below.',
        nearbyRestaurant: 'Karpaz Gate Marina restaurants, 40-minute drive',
        nearbyAttraction: 'Apostolos Andreas Monastery, 5-minute drive',
      },
      {
        name: 'Karpaz Gate Marina',
        description:
          "A modern, low-key marina near Yenierenköy that feels almost incongruous against the wild coastline around it — clean docks, a handful of relaxed restaurants, and yachts bobbing in a sheltered basin. It's the natural place to end a long day on the road with a calm sunset dinner before the long drive back.",
        coordinates: [35.5647, 34.3717],
        hours: 'Restaurants typically 12:00-23:00',
        entryFee: 'Free to walk the marina; restaurant prices vary',
        parking: 'Free marina parking',
        accessibility: 'Flat, paved marina walkways',
        timeRequired: '1 hour for dinner',
        photographyTip: 'The marina lights reflecting on calm water make for a great blue-hour shot just after sunset.',
        nearbyRestaurant: 'Marina Grill House, on site',
        nearbyAttraction: 'Golden Beach main access point, 20-minute drive',
      },
    ],
    travelTips: [
      'Bring reef shoes or sandals — several coves have rocky rather than sandy entry points.',
      'Fuel up before Yenierenköy; stations become sparse further into the Karpaz Peninsula.',
      'Bring your own water and snacks for the more remote stops, which have no facilities.',
      'A car with slightly higher ground clearance handles the dirt access tracks more comfortably.',
    ],
    insiderTips: [
      'Blue House Sea Cave shows its best colour between 11am and 2pm when the sun angle is highest — visit outside that window and the effect disappears almost entirely.',
      'Ask any Kaplıca restaurant owner about calm-water days — some coves are only swimmable when the wind is right.',
      'The far eastern stretch of Golden Beach is a protected turtle nesting site from June to September — avoid driving on the sand and keep torches off after dark.',
    ],
    faq: [
      {
        question: 'Can I swim at all these stops?',
        answer:
          'Blue House Sea Cave, Horseshoe Beach, and Golden Beach are all swimmable. Camel Point and the Cape Apostolos Andreas cliffs are better for viewing than swimming due to rocky, uneven access.',
      },
      {
        question: 'Is this route doable in a single day?',
        answer:
          "It's a long day — plan for an early start (by 8am) and expect to return after dark. Splitting it over two days with an overnight in the Karpaz Peninsula is a comfortable alternative.",
      },
      {
        question: 'Are there lifeguards at any of these beaches?',
        answer:
          'No — all of these are unmanaged, undeveloped coastline. Swim within your ability and be cautious of currents, especially at Horseshoe Beach and Golden Beach.',
      },
    ],
  },
  {
    id: 'venetian-byzantine-heritage',
    slug: 'venetian-byzantine-heritage',
    title: 'Venetian & Byzantine Heritage',
    icon: 'castle',
    theme: 'Castles, monasteries and forgotten fortifications',
    tagline: 'Seven centuries of empires fighting over one mountain range.',
    category: ['History', 'Photography'],
    difficulty: 'Challenging',
    duration: '1-2 Days',
    distanceKm: 175,
    drivingTimeHours: 3,
    walkingTimeHours: 4,
    bestSeason: 'October to May (avoid midsummer heat on the climbs)',
    budget: '350-550 TRY per person',
    heroDescription:
      "This is the route for anyone who has ever wanted to stand inside a real castle without a rope barrier in sight. From Kyrenia's harbor fortress to Buffavento's clouds-level ruins, this drive climbs through the entire defensive history of medieval Cyprus.",
    stops: [
      {
        name: 'Kyrenia Castle',
        description:
          "Guarding the entrance to Kyrenia's horseshoe harbour, this castle began as a Byzantine fort before the Venetians rebuilt its massive corner bastions to withstand cannon fire in the 15th century. Inside, the Shipwreck Museum houses the remarkably preserved hull of a 4th-century BC Greek merchant ship — the oldest shipwreck ever recovered from the sea — along with its cargo of amphorae and almonds. Climbing to the castle's upper ramparts gives an unbeatable view over the harbour's fishing boats and yachts.",
        coordinates: [35.3411, 33.3186],
        hours: '9:00 - 18:45 daily (shorter hours in winter)',
        entryFee: '~90 TRY',
        parking: 'Paid lots near the harbour, 5-minute walk',
        accessibility: 'Stone stairs and uneven ramparts; not wheelchair accessible',
        timeRequired: '1.5-2 hours',
        photographyTip: 'Shoot the castle from the far side of the harbour in early morning for reflections in calm water.',
        nearbyRestaurant: 'Harbour-front seafood restaurants, steps away',
        nearbyAttraction: 'Bellapais Abbey, 15-minute drive',
      },
      {
        name: 'Bellapais Abbey',
        description:
          'Often called one of the most beautiful Gothic ruins in the Eastern Mediterranean, Bellapais Abbey was founded by Augustinian monks in the 13th century and expanded by Lusignan kings seeking a peaceful mountain retreat. Its refectory and cloister remain largely intact, framed by a single ancient tree in the courtyard said to be centuries old. Lawrence Durrell lived in the village and wrote about the abbey extensively in "Bitter Lemons," cementing its literary fame.',
        coordinates: [35.3081, 33.3572],
        hours: '9:00 - 19:00 daily (shorter in winter)',
        entryFee: '~55 TRY',
        parking: 'Village square parking, short walk uphill',
        accessibility: 'Some stairs and uneven stone floors',
        timeRequired: '1 hour',
        photographyTip: 'The cloister arches frame the mountains beautifully — shoot through them rather than of them.',
        nearbyRestaurant: 'Kybele Restaurant, in Bellapais village',
        nearbyAttraction: 'St. Hilarion Castle, 20-minute drive',
      },
      {
        name: 'St. Hilarion Castle',
        description:
          "Sprawled across a jagged mountain ridge like something from a fantasy novel — and reportedly one inspiration for Tolkien's imagery — St. Hilarion began as a Byzantine monastery before the Lusignans transformed it into a royal summer residence with three defensive tiers. Climbing through the lower, middle, and upper wards takes you past a banqueting hall, royal apartments, and finally a dizzying viewpoint said to see both the northern and southern coasts of Cyprus on a clear day.",
        coordinates: [35.3222, 33.2833],
        hours: '9:00 - 18:45 daily (shorter in winter)',
        entryFee: '~55 TRY',
        parking: 'Free lot at the base, short walk to ticket booth',
        accessibility: 'Steep stairs throughout all three wards; strenuous climb, not accessible',
        timeRequired: '1.5-2 hours',
        photographyTip: 'The upper ward window frames — nicknamed the "Queen\'s Window" — are the most photographed spot on the whole route.',
        nearbyRestaurant: 'Buffavento view cafés on the mountain road',
        nearbyAttraction: 'Buffavento Castle, 40-minute drive along the ridge road',
      },
      {
        name: 'Buffavento Castle',
        description:
          "The highest and most remote of the three great Kyrenia mountain castles, Buffavento sits nearly 950 metres above sea level — its Italian name means 'buffeted by winds,' and on most days you will feel exactly why. Used by the Byzantines as a signal station and later as a Lusignan prison for political enemies, its ruins are the least restored of the three, giving it a raw, wind-scoured atmosphere that rewards the steep 30-minute climb from the car park.",
        coordinates: [35.3011, 33.4131],
        hours: '9:00 - 17:00 daily (closes earlier in bad weather)',
        entryFee: 'Free (unmanaged site)',
        parking: 'Small gravel lot at the trailhead',
        accessibility: 'Steep, rocky trail; sturdy footwear essential, not accessible',
        timeRequired: '1.5 hours round trip',
        photographyTip: 'On a clear day you can photograph both the northern and southern coastlines from the summit ruins — a genuinely rare shot.',
        nearbyRestaurant: 'Bring your own food — no facilities at the site',
        nearbyAttraction: 'Kantara Castle, roughly 1.5-hour drive east',
      },
      {
        name: 'Kantara Castle',
        description:
          "Marking the western gateway to the Karpaz Peninsula, Kantara Castle was the easternmost link in the chain of Byzantine and Lusignan mountain fortresses, watching over both the northern and southern coasts from a single vantage point. Legend holds that the last Lusignan king, Prince John, was imprisoned and possibly poisoned here. Less crowded than St. Hilarion, its ruined towers and long defensive wall are a quieter, more contemplative castle experience.",
        coordinates: [35.3931, 33.8631],
        hours: '9:00 - 17:00 daily',
        entryFee: '~30 TRY',
        parking: 'Free lot at the base of the access road',
        accessibility: 'Uneven stone paths, some stairs; moderate difficulty',
        timeRequired: '1 hour',
        photographyTip: 'The dual-coast view from the highest tower is the money shot — visit on a clear, low-humidity day.',
        nearbyRestaurant: 'Boğaz harbour fish restaurants, 15-minute drive',
        nearbyAttraction: 'Apostolos Andreas Monastery, roughly 1-hour drive further into the Karpaz',
      },
      {
        name: 'Apostolos Andreas Monastery',
        description:
          "One of the most important pilgrimage sites in the Orthodox Christian world, this monastery at the tip of the Karpaz Peninsula has drawn pilgrims for centuries who believed its holy spring water had healing properties. Rebuilt several times, its current form dates largely from the 19th century, with an active restoration effort ongoing. Whatever your faith, the setting — a lone monastery facing an empty sea at the edge of the island — carries real weight.",
        coordinates: [35.6672, 34.5758],
        hours: '8:00 - 18:00 daily',
        entryFee: 'Free (donations welcomed)',
        parking: 'Free lot adjacent to the monastery',
        accessibility: 'Mostly flat courtyard, some steps into the chapel',
        timeRequired: '45 minutes',
        photographyTip: 'The monastery framed against the open sea from the coastal road just before it is the classic establishing shot.',
        nearbyRestaurant: 'Dipkarpaz village restaurants, 20-minute drive',
        nearbyAttraction: 'Othello Tower, roughly 1.5-hour drive back toward Famagusta',
      },
      {
        name: 'Othello Tower (Famagusta)',
        description:
          "Anchoring the sea walls of the old walled city of Famagusta, this Venetian-strengthened fortress takes its popular name from Shakespeare's tragedy, which may have been set here based on the historical governor Cristoforo Moro (whose surname means 'Moor'). Its Gothic hall and cavernous vaulted chambers were built for Lusignan royalty before Venetian engineers reinforced it against Ottoman cannon. It is the perfect closing stop, tying medieval military history to literary legend.",
        coordinates: [35.1231, 33.9414],
        hours: '9:00 - 17:00 daily (later in summer)',
        entryFee: '~40 TRY',
        parking: 'Street parking near the old city walls',
        accessibility: 'Stone stairs and vaulted passages; not fully accessible',
        timeRequired: '1 hour',
        photographyTip: 'The vaulted Gothic hall photographs beautifully with a wide lens and available light streaming through the arrow slits.',
        nearbyRestaurant: 'Petek Pastanesi, in the walled city',
        nearbyAttraction: 'Salamis ancient city ruins, 15-minute drive north',
      },
    ],
    travelTips: [
      'St. Hilarion, Buffavento, and Kantara all involve serious climbing — wear proper walking shoes, not sandals.',
      'This route is genuinely long — most travelers split it across two days with an overnight in Kyrenia.',
      'Bring more water than you think you need for the mountain castles; there is no water for sale at Buffavento.',
      'The mountain road between St. Hilarion and Buffavento has sharp switchbacks — take it slowly, especially in a rental car.',
    ],
    insiderTips: [
      "Buffavento is the castle almost nobody makes time for, and it's the most atmospheric of the three mountain fortresses precisely because of that.",
      'Visit Kyrenia Castle right at 9am opening to get the Shipwreck Museum galleries before tour groups arrive.',
      'The road between Kantara and the Karpaz tip has some of the emptiest, most scenic driving on the entire island — roll the windows down.',
    ],
    faq: [
      {
        question: 'Which single castle should I prioritize if I only have time for one?',
        answer:
          "St. Hilarion is the most complete and dramatic experience for most travelers. For a quieter, wilder atmosphere, choose Buffavento instead.",
      },
      {
        question: 'Are the castle climbs safe for someone with a fear of heights?',
        answer:
          "St. Hilarion's upper ward and Buffavento's summit trail both have exposed drops without full railings. Kyrenia Castle and Bellapais Abbey are much gentler if heights are a concern.",
      },
      {
        question: 'Should I split this into two days?',
        answer:
          'If you want to properly explore each site rather than rush, yes — Day 1 for Kyrenia Castle, Bellapais, and St. Hilarion; Day 2 for Buffavento, Kantara, the monastery, and Othello Tower.',
      },
    ],
  },
  {
    id: 'sunset-stargazing',
    slug: 'sunset-stargazing',
    title: 'Sunset & Stargazing',
    icon: 'sunset',
    theme: 'The best evening viewpoints in Northern Cyprus',
    tagline: 'Chase the golden hour across the whole northern coast.',
    category: ['Sunset', 'Photography', 'Nature'],
    difficulty: 'Easy',
    duration: 'Half Day (afternoon into night)',
    distanceKm: 145,
    drivingTimeHours: 2.5,
    walkingTimeHours: 1,
    bestSeason: 'Year-round; clearest skies July to September',
    budget: '150-300 TRY per person',
    heroDescription:
      'A route built entirely around light — timed so you catch golden hour at a mountaintop castle, blue hour on a terrace, and full dark under some of the least light-polluted skies in the Eastern Mediterranean.',
    stops: [
      {
        name: 'St. Hilarion Viewpoint',
        description:
          "Begin the afternoon at St. Hilarion's upper ward, timed to arrive about ninety minutes before sunset. As the light softens, the Kyrenia mountain range turns amber and the coastline below catches the last direct sun before the castle closes for the day — this is one of the very few times you'll want to check a castle's exact closing time in advance.",
        coordinates: [35.3222, 33.2833],
        hours: 'Closes at 18:45 in summer, 16:00 in winter — check before arriving',
        entryFee: '~55 TRY',
        parking: 'Free lot at the base',
        accessibility: 'Steep stairs; strenuous, not accessible',
        timeRequired: '1 hour',
        photographyTip: "Position yourself at the 'Queen's Window' about 30 minutes before sunset for a warm, framed shot of the coast.",
        nearbyRestaurant: 'Bellapais village cafés, 20-minute drive',
        nearbyAttraction: 'Bellapais Terrace, 20-minute drive',
      },
      {
        name: 'Bellapais Terrace',
        description:
          "The terrace cafés around Bellapais Abbey catch the abbey's Gothic silhouette against a darkening sky, and several serve a proper sit-down dinner with the ruins as a backdrop. It's a gentler, more social alternative to a wilderness viewpoint — order slowly and let the light change around you.",
        coordinates: [35.3081, 33.3572],
        hours: 'Restaurants typically 12:00-23:00',
        entryFee: 'Free to visit; restaurant prices vary',
        parking: 'Village square, short walk',
        accessibility: 'Some cobblestones and stairs in the village',
        timeRequired: '1-1.5 hours',
        photographyTip: 'Shoot the abbey silhouette against the last purple light in the sky, roughly 20 minutes after sunset.',
        nearbyRestaurant: 'Kybele Restaurant terrace',
        nearbyAttraction: 'Sadrazamköy Sunset Point, roughly 1-hour drive west',
      },
      {
        name: 'Sadrazamköy Sunset Point',
        description:
          "A stretch of low cliffs just outside Sadrazamköy village on the northwestern tip of the island, where locals gather most clear evenings with folding chairs and thermoses of tea to watch the sun drop directly into the sea. Because there is no development for miles, the horizon here is completely unobstructed — one of the purest sea-horizon sunsets on the island.",
        coordinates: [35.3625, 32.9903],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Open gravel pull-offs',
        accessibility: 'Flat cliff-top ground, easy walking',
        timeRequired: '45 minutes',
        photographyTip: 'Arrive 45 minutes before sunset to claim a clear foreground spot away from parked cars.',
        nearbyRestaurant: 'Bring supplies — no facilities nearby',
        nearbyAttraction: 'Cape Kormakitis, 20-minute drive',
      },
      {
        name: 'Cape Kormakitis',
        description:
          'The island\'s northwesternmost headland, marked by a working lighthouse and swept by near-constant sea breeze. After sunset, the cape\'s isolation becomes its biggest asset: almost no artificial light for kilometres in any direction, making it one of the most reliable dark-sky spots on this side of Cyprus for early stargazing.',
        coordinates: [35.3778, 32.9306],
        hours: 'Always accessible; lighthouse itself is not open to the public',
        entryFee: 'Free',
        parking: 'Gravel area near the lighthouse access track',
        accessibility: 'Flat headland, some loose gravel underfoot',
        timeRequired: '30 minutes',
        photographyTip: 'Shoot the lighthouse silhouette against the last blue-hour light before full darkness sets in.',
        nearbyRestaurant: 'Koruçam village kahve, 10-minute drive',
        nearbyAttraction: 'Escape Beach Sunset Deck, roughly 1-hour drive back east',
      },
      {
        name: 'Escape Beach Sunset Deck',
        description:
          "A relaxed beach club near Kyrenia with a raised wooden deck built specifically to catch the sunset over the water, popular with both visitors and locals for evening drinks. If you want comfort and a cocktail with your golden hour rather than a folding chair on a cliff, this is the stop for it.",
        coordinates: [35.3208, 33.2456],
        hours: 'Typically 10:00 - late, seasonal hours',
        entryFee: 'Free entry; consumption pricing applies',
        parking: 'Free lot at the venue',
        accessibility: 'Flat wooden decking, accessible',
        timeRequired: '1 hour',
        photographyTip: 'Shoot silhouettes of the deck seating against the setting sun for a classic travel-magazine composition.',
        nearbyRestaurant: 'On-site bar and grill',
        nearbyAttraction: 'Karpaz Peninsula Night Sky, roughly 1.5-hour drive east — best saved for a separate late evening',
      },
      {
        name: 'Karpaz Peninsula Night Sky',
        description:
          "Once you are deep into the Karpaz Peninsula, artificial light all but disappears. On clear, moonless nights the Milky Way is visible to the naked eye above the silhouettes of wild donkeys grazing in the scrub — a genuinely rare sight this close to a Mediterranean coastline. This stop rewards patience: give your eyes twenty minutes to adjust before judging the sky.",
        coordinates: [35.6, 34.35],
        hours: 'Best 21:00 onward on clear, moonless nights',
        entryFee: 'Free',
        parking: 'Roadside pull-offs away from any lighting',
        accessibility: 'Flat roadside ground; bring a torch for walking safely in the dark',
        timeRequired: '1 hour or more',
        photographyTip: 'A tripod and a wide-aperture lens (f/2.8 or faster) with a 15-20 second exposure captures the Milky Way clearly here.',
        nearbyRestaurant: 'Dipkarpaz village restaurants, 20-minute drive',
        nearbyAttraction: 'Golden Beach, 20-minute drive, worth a return visit by daylight',
      },
      {
        name: 'Golden Beach',
        description:
          'If your stargazing runs late, Golden Beach makes an atmospheric final stop — waves breaking softly under starlight, with the added chance of spotting a nesting sea turtle during the summer months if you keep torches switched off and stay well back from any marked nesting sites.',
        coordinates: [35.6167, 34.5667],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Informal parking along the access road',
        accessibility: 'Soft sand, uneven in the dark — walk carefully',
        timeRequired: '30-45 minutes',
        photographyTip: 'Long exposures of breaking waves under starlight need a sturdy tripod and a remote shutter to avoid camera shake.',
        nearbyRestaurant: 'Basic beach shacks near the main access point',
        nearbyAttraction: 'Apostolos Andreas Monastery, 30-minute drive further east',
      },
    ],
    travelTips: [
      'Check moonrise/moonset times before planning the stargazing stops — a bright moon washes out the Milky Way.',
      'Bring a red-light torch if you have one; it preserves night vision better than a white flashlight.',
      'Layer up — coastal evenings cool quickly even in summer, especially at exposed viewpoints.',
      'Fill your tank before dark; some rural fuel stations close by early evening.',
    ],
    insiderTips: [
      'The clearest, most stable skies typically come in the week around a new moon in July and August.',
      "Sadrazamköy's local sunset crowd is friendly and often shares tea — a good spot to strike up conversation with residents.",
      "If you only have time for one dark-sky stop, the Karpaz Peninsula stretch near Golden Beach outperforms every other location on the island.",
    ],
    faq: [
      {
        question: 'Do I need special stargazing equipment?',
        answer:
          'No — the Milky Way is visible to the naked eye on clear, moonless nights in the Karpaz Peninsula. Binoculars enhance the view but are not required.',
      },
      {
        question: 'Is it safe to drive rural roads after dark?',
        answer:
          'Yes, but roads are unlit and sometimes shared with grazing donkeys or goats — drive at moderate speed and stay alert, especially in the Karpaz Peninsula.',
      },
      {
        question: 'Can I do the whole route in one evening?',
        answer:
          'You can hit 4-5 stops comfortably in one evening. Doing all seven, including the deep-Karpaz stargazing stop, works better split across two evenings.',
      },
    ],
  },
  {
    id: 'legends-mysteries',
    slug: 'legends-mysteries',
    title: 'Legends & Mysteries',
    icon: 'sparkles',
    theme: 'Places tied to myths, legends and fascinating stories',
    tagline: 'Every ruin here comes with a story nobody can quite confirm.',
    category: ['History', 'Photography'],
    difficulty: 'Moderate',
    duration: '1 Day (7-8 hours)',
    distanceKm: 165,
    drivingTimeHours: 3,
    walkingTimeHours: 3,
    bestSeason: 'October to April',
    budget: '300-450 TRY per person',
    heroDescription:
      "Some places earn their fame from what happened there. These earn it from what people believe happened there. A route through castles, a ghost town, and a monastery, each wrapped in legend that history has never fully untangled.",
    stops: [
      {
        name: 'St. Hilarion Castle',
        description:
          "Local legend claims the castle is named for a hermit saint who fled here for solitude, and that its jagged silhouette inspired J.R.R. Tolkien's imagination for the Mines of Moria — a claim without solid documentary proof, but persistent enough to have become part of the site's identity. Deeper in local folklore, the castle is said to be haunted by the ghosts of Lusignan nobility who never left their mountain refuge.",
        coordinates: [35.3222, 33.2833],
        hours: '9:00 - 18:45 daily (shorter in winter)',
        entryFee: '~55 TRY',
        parking: 'Free lot at the base',
        accessibility: 'Steep stairs throughout; strenuous, not accessible',
        timeRequired: '1.5 hours',
        photographyTip: "Shoot the jagged ridge silhouette from the approach road below for the full fantasy-novel effect.",
        nearbyRestaurant: 'Bellapais village cafés, 20-minute drive',
        nearbyAttraction: 'Bellapais Abbey, 20-minute drive',
      },
      {
        name: 'Bellapais Abbey',
        description:
          "Legend holds that the abbey's ancient courtyard tree grants eternal youth — or a curse of eternal restlessness — to anyone who eats its fruit, a tale locals still tell half-jokingly to visitors. The abbey's real history is dramatic enough without embellishment: it was sacked by Genoese raiders in 1373 and slowly declined until its 20th-century restoration.",
        coordinates: [35.3081, 33.3572],
        hours: '9:00 - 19:00 daily',
        entryFee: '~55 TRY',
        parking: 'Village square, short walk',
        accessibility: 'Uneven stone floors, some stairs',
        timeRequired: '1 hour',
        photographyTip: "The famous courtyard tree, shot from directly beneath looking up through its canopy, is the most requested photo on this route.",
        nearbyRestaurant: 'Kybele Restaurant',
        nearbyAttraction: 'Buffavento Castle, 40-minute drive',
      },
      {
        name: 'Buffavento Castle',
        description:
          "Byzantine legend claims Buffavento's remote ruins once held a hidden treasure that was never recovered when the fortress fell, inspiring generations of amateur treasure hunters to comb the mountainside. Its Italian name — 'buffeted by wind' — has its own folk explanation: sailors said you could hear the wind moaning through the ruins from ships far out at sea.",
        coordinates: [35.3011, 33.4131],
        hours: '9:00 - 17:00 daily',
        entryFee: 'Free',
        parking: 'Small gravel lot at the trailhead',
        accessibility: 'Steep rocky trail, strenuous',
        timeRequired: '1.5 hours round trip',
        photographyTip: 'Wind-blasted, weathered stone against dramatic sky — shoot on a day with moving clouds for atmosphere.',
        nearbyRestaurant: 'Bring your own food',
        nearbyAttraction: 'Othello Tower, roughly 1.5-hour drive',
      },
      {
        name: 'Othello Tower',
        description:
          "The tower's enduring legend is literary rather than ancient: tradition holds that Shakespeare set 'Othello' here, inspired by a real Venetian governor of Famagusta named Cristoforo Moro, whose surname means 'the Moor.' Whether or not Shakespeare ever intended this specific fortress, the association has stuck for centuries, and the tower's cavernous Gothic hall does nothing to dispel the mood.",
        coordinates: [35.1231, 33.9414],
        hours: '9:00 - 17:00 daily',
        entryFee: '~40 TRY',
        parking: 'Street parking near the walled city',
        accessibility: 'Stone stairs, vaulted passages, not fully accessible',
        timeRequired: '1 hour',
        photographyTip: 'The vaulted Gothic hall reads almost theatrical in low natural light through the arrow slits.',
        nearbyRestaurant: 'Petek Pastanesi, in the walled city',
        nearbyAttraction: 'Varosha, 15-minute drive south',
      },
      {
        name: 'Varosha',
        description:
          "Once the most glamorous resort district in the Mediterranean, hosting stars like Elizabeth Taylor and Brigitte Bardot in the 1960s and early 70s, Varosha was abandoned overnight in 1974 and sealed for nearly five decades — beach umbrellas reportedly still standing where they were left. Partially reopened for visitors in recent years, driving or walking through its crumbling hotel facades is one of the strangest, most sobering experiences in the Mediterranean.",
        coordinates: [35.1131, 33.9494],
        hours: 'Daylight hours only; some restricted zones remain',
        entryFee: 'Free to enter open sections',
        parking: 'Designated visitor parking at entry checkpoints',
        accessibility: 'Uneven, decaying pavements; extreme caution advised, structures are unstable',
        timeRequired: '1-1.5 hours',
        photographyTip: 'The row of collapsing beachfront hotels along the coast road is the defining image of the ghost town.',
        nearbyRestaurant: 'Famagusta walled city restaurants, 15-minute drive',
        nearbyAttraction: 'Apostolos Andreas Monastery, roughly 1.5-hour drive',
      },
      {
        name: 'Apostolos Andreas Monastery',
        description:
          "According to legend, Saint Andrew's ship stopped here for fresh water during a storm, and a miraculous spring burst from the rock at his prayer. The spring's water was believed for centuries to cure blindness and other ailments, drawing pilgrims from across the Orthodox world — a tradition that continues in modified form today.",
        coordinates: [35.6672, 34.5758],
        hours: '8:00 - 18:00 daily',
        entryFee: 'Free (donations welcomed)',
        parking: 'Free lot adjacent to the monastery',
        accessibility: 'Mostly flat courtyard, some steps',
        timeRequired: '45 minutes',
        photographyTip: 'The monastery against the empty sea horizon, shot from the coastal approach road, is the most evocative composition.',
        nearbyRestaurant: 'Dipkarpaz village restaurants, 20-minute drive',
        nearbyAttraction: 'Vouni Palace, a full drive across the island — better saved for the Forgotten Kingdoms route',
      },
      {
        name: 'Vouni Palace',
        description:
          "Local legend suggests the palace was cursed by the gods after its pro-Persian ruler betrayed his Greek neighbors, explaining its sudden and violent destruction around 380 BC. Archaeology tells a more grounded story of political conflict between rival city-kingdoms — but standing amid the burned foundations at dusk, the legend is easy to believe.",
        coordinates: [35.1494, 32.7333],
        hours: '9:00 - 17:00 daily',
        entryFee: '~15 TRY',
        parking: 'Small gravel lot at the base',
        accessibility: 'Uneven stone paths and stairs, not accessible',
        timeRequired: '1 hour',
        photographyTip: 'Late afternoon light across the burned foundation stones adds real drama to an already dramatic story.',
        nearbyRestaurant: 'Gemikonağı harbour restaurants, 15-minute drive',
        nearbyAttraction: 'Soli Ruins, 8-minute drive',
      },
    ],
    travelTips: [
      'Varosha has designated visitor routes only — do not enter fenced-off buildings under any circumstances.',
      'This route spans nearly the whole island east to west — an early start is essential.',
      'Bring a printed or offline map; some of these sites have limited signal for navigation apps.',
      'Wear closed shoes throughout — several sites have unstable or uneven ground.',
    ],
    insiderTips: [
      "Ask a Famagusta local about Varosha before you go — many have personal or family memories of the district before 1974 that add real depth to the visit.",
      'The Buffavento treasure legend has inspired real amateur searches over the decades — ask the site caretaker (if present) for the most colorful version of the story.',
      "Visit Vouni Palace as late in the day as opening hours allow for the most atmospheric light on the ruins.",
    ],
    faq: [
      {
        question: 'Is Varosha safe to visit?',
        answer:
          'Yes, within the officially designated visitor areas that have been reopened. Stay on marked paths and do not attempt to enter any of the fenced or restricted buildings.',
      },
      {
        question: 'Are these legends historically documented?',
        answer:
          'Some have partial documentary support (like the Othello association with a real Venetian governor); others are pure oral tradition. We note this distinction where it matters.',
      },
      {
        question: 'Which stop has the most impact for first-time visitors?',
        answer:
          'Varosha consistently leaves the strongest impression — few places anywhere let you walk through a frozen moment in time quite like it.',
      },
    ],
  },
  {
    id: 'vineyards-harvest',
    slug: 'vineyards-harvest',
    title: 'Vineyards & Harvest Trail',
    icon: 'grape',
    theme: "Northern Cyprus's quiet wine country and its harvest traditions",
    tagline: "The island's oldest crop, poured by the people who grow it.",
    category: ['Wine', 'Food', 'Villages'],
    difficulty: 'Easy',
    duration: 'Half Day (5-6 hours)',
    distanceKm: 88,
    drivingTimeHours: 1.5,
    walkingTimeHours: 1,
    bestSeason: 'August to October (harvest season)',
    budget: '300-450 TRY per person (includes tastings)',
    heroDescription:
      "Cyprus has grown wine grapes for over 4,000 years, and the low hills between Bogaz and the Karpaz foothills quietly carry on that tradition today. This is a slow, unhurried route built around small family wineries, mountain villages, and a proper long lunch.",
    stops: [
      {
        name: 'Boğaz Village & Harbour',
        description:
          "Start in Boğaz, a small fishing village turned relaxed harbour town that also serves as the gateway to the Karpaz wine country beyond. Its harbour restaurants make an easy first coffee stop, with fishing boats unloading the morning catch right beside the tables.",
        coordinates: [35.3903, 33.8514],
        hours: 'Harbour always open; cafés from 8:00',
        entryFee: 'Free',
        parking: 'Free harbour parking',
        accessibility: 'Flat, paved harbourfront',
        timeRequired: '30 minutes',
        photographyTip: 'Morning light on the fishing boats works best before 9am, while the harbour is still quiet.',
        nearbyRestaurant: 'Boğaz Harbour Restaurant, on site',
        nearbyAttraction: 'Kantara Castle, 15-minute drive uphill',
      },
      {
        name: 'Kantara Castle Viewpoint',
        description:
          "A short detour uphill from the wine country gives you a sweeping view down over the vineyards and orchards you're about to drive through, plus both coastlines of the island from the same viewpoint. It's worth the small climb before descending back into the growing valleys below.",
        coordinates: [35.3931, 33.8631],
        hours: '9:00 - 17:00 daily',
        entryFee: '~30 TRY',
        parking: 'Free lot at the base',
        accessibility: 'Uneven paths, some stairs',
        timeRequired: '45 minutes',
        photographyTip: 'The patchwork of vineyard rows below reads best in the softer light of mid-morning.',
        nearbyRestaurant: 'Boğaz harbour restaurants, 15 minutes back down',
        nearbyAttraction: 'Panagra Winery, 25-minute drive',
      },
      {
        name: 'Panagra Winery',
        description:
          "One of the most established boutique wineries on the island, Panagra grows indigenous Cypriot varietals like Mavro and Xynisteri alongside international grapes, on terraced hillsides near the village of Değirmenlik. Family-run for generations, it offers relaxed tastings on a shaded terrace, usually hosted by a member of the family who will happily talk through each vintage.",
        coordinates: [35.2611, 33.5972],
        hours: '10:00 - 18:00, tastings by advance arrangement',
        entryFee: 'Tasting flights from ~150 TRY',
        parking: 'Free on-site parking',
        accessibility: 'Flat gravel courtyard and terrace',
        timeRequired: '1-1.5 hours',
        photographyTip: 'The terraced vine rows catch beautiful long shadows in late afternoon light.',
        nearbyRestaurant: 'On-site terrace snacks; full meals in Değirmenlik village',
        nearbyAttraction: 'Değirmenlik Village, 10-minute drive',
      },
      {
        name: 'Değirmenlik Village',
        description:
          "This farming village has supplied grapes to island wineries for generations, and during the September harvest its streets fill with the smell of pressed grapes and the low hum of small family presses still running by hand in some households. A village bakery near the main square makes an excellent stop for fresh bread to go with whatever wine you've just bought.",
        coordinates: [35.2394, 33.5561],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Free street parking',
        accessibility: 'Flat, mostly paved village streets',
        timeRequired: '30-45 minutes',
        photographyTip: 'During September harvest, ask permission to photograph a family press in action — most are proud to show visitors.',
        nearbyRestaurant: 'Değirmenlik Restaurant, on the main square',
        nearbyAttraction: 'Alevkaya Herbarium & Forest, 20-minute drive',
      },
      {
        name: 'Alevkaya Herbarium & Forest',
        description:
          'A cool pine-forest detour partway through the wine country, this small herbarium and forest station documents the native plants of the Kyrenia mountain range, many of which — wild thyme, sage, and juniper — end up flavoring the honey and cheeses sold alongside local wine at village stalls. A short, shaded walking trail makes a pleasant break between tastings.',
        coordinates: [35.2864, 33.6825],
        hours: '9:00 - 16:30 (herbarium building); forest trails always open',
        entryFee: 'Free',
        parking: 'Free forest station parking',
        accessibility: 'Flat forest trail, easy walking',
        timeRequired: '30 minutes',
        photographyTip: 'The pine forest interior offers a cool, green contrast shot to the sun-baked vineyards elsewhere on the route.',
        nearbyRestaurant: 'Bring a picnic — no restaurants directly on site',
        nearbyAttraction: 'Değirmenlik Restaurant, 20-minute drive back',
      },
      {
        name: 'Değirmenlik Restaurant',
        description:
          "Close the loop with a long, unhurried lunch at this village institution, known for its slow-cooked oven kleftiko (lamb) and generous mezze spread designed to be eaten over a couple of hours, not twenty minutes. It's the kind of meal that makes the whole idea of a 'harvest route' click into place.",
        coordinates: [35.2394, 33.5561],
        hours: '12:00 - 22:00',
        entryFee: 'Meal prices from ~300 TRY per person',
        parking: 'Free street parking nearby',
        accessibility: 'Flat, easy access',
        timeRequired: '1.5-2 hours',
        photographyTip: 'The mezze spread, shot from directly above on the table, makes the most shareable food photo of the day.',
        nearbyRestaurant: '(This is the restaurant stop)',
        nearbyAttraction: 'Lefkoşa (Nicosia) old town, 30-minute drive if you have energy for one more stop',
      },
      {
        name: 'Lefkoşa Old Town Wine Bars',
        description:
          "If the day still has room, finish in the walled old town of Lefkoşa (North Nicosia), where a handful of small wine bars near the Arabahmet quarter pour local vintages you tasted earlier in the day, alongside imported bottles, in a relaxed indoor setting perfect for a cooler evening cap to the trip.",
        coordinates: [35.1819, 33.3608],
        hours: 'Typically 17:00 - late',
        entryFee: 'Drink prices vary',
        parking: 'Paid lots near the old city walls',
        accessibility: 'Flat, paved old-town streets',
        timeRequired: '1 hour',
        photographyTip: 'The old town\'s narrow lit alleyways after dark make a moody final frame for the day.',
        nearbyRestaurant: 'This is the final stop of the route',
        nearbyAttraction: 'Büyük Han (Great Inn), a 5-minute walk for a nightcap view of Ottoman architecture',
      },
    ],
    travelTips: [
      'Arrange winery tastings a day ahead where possible — most are small family operations without walk-in staff on quieter days.',
      'Designate a driver, or plan an overnight in the area, since tastings add up across multiple stops.',
      'Harvest season (Aug-Oct) is the most atmospheric time to visit but also the busiest for the wineries themselves — call ahead.',
      'Bring a cooler bag if you plan to buy bottles; midday heat is unkind to wine left in a parked car.',
    ],
    insiderTips: [
      'Ask Panagra directly about their Mavro-Xynisteri blends — the indigenous varietals are the most distinctive thing you can bring home.',
      'September weekday mornings in Değirmenlik are the best time to see small family presses actually running.',
      "Lefkoşa's Arabahmet quarter wine bars are known mostly to locals — worth asking a Değirmenlik winery host for a specific recommendation.",
    ],
    faq: [
      {
        question: 'Do I need to book winery visits in advance?',
        answer:
          'For the best experience, yes — call or message ahead, especially for Panagra Winery, since most are small family operations without dedicated visitor staff every day.',
      },
      {
        question: 'Is this route family-friendly if not everyone is drinking?',
        answer:
          'Yes — the villages, forest walk, and viewpoints are enjoyable regardless, and most wineries offer non-alcoholic grape juice or soft drinks for younger travelers or designated drivers.',
      },
      {
        question: 'What wine styles should I expect?',
        answer:
          'Look for Xynisteri (a crisp native white) and Mavro (a light native red), alongside more familiar international varietals grown locally.',
      },
    ],
  },
  {
    id: 'family-beach-day',
    slug: 'family-beach-day',
    title: 'Family Beach Day',
    icon: 'sun',
    theme: 'Turtles, calm coves, and easy fun for every age',
    tagline: 'A whole day of sand, sea, and things kids actually want to do.',
    category: ['Family Friendly', 'Coastline', 'Nature'],
    difficulty: 'Easy',
    duration: '1 Day (6-7 hours)',
    distanceKm: 95,
    drivingTimeHours: 2,
    walkingTimeHours: 1,
    bestSeason: 'May to September',
    budget: '300-500 TRY for a family of four',
    heroDescription:
      "Built for families rather than photographers, this route trades cliff scrambles for calm, shallow water, shaded beach clubs, and a nature centre kids genuinely love. Everything here is stroller-friendly or close to it.",
    stops: [
      {
        name: 'Alagadi Turtle Beach',
        description:
          "One of the most important nesting sites in the Mediterranean for both green and loggerhead sea turtles, Alagadi runs a dedicated conservation program with a small visitor centre explaining nesting cycles, hatchling protection, and how families can help without disturbing nests. From June through September, evening 'turtle watches' (booked through the conservation project) let children see hatchlings make their first journey to the sea.",
        coordinates: [35.3389, 33.4658],
        hours: 'Beach always open; visitor centre 9:00-17:00 in season',
        entryFee: 'Beach free; turtle watch programs have a small fee, book ahead',
        parking: 'Free beach parking',
        accessibility: 'Flat sandy beach, easy access; visitor centre is accessible',
        timeRequired: '1.5-2 hours',
        photographyTip: 'Photography during turtle watches is restricted (no flash) to protect hatchlings — bring a fast lens instead.',
        nearbyRestaurant: 'Beach café at the visitor centre',
        nearbyAttraction: 'Escape Beach, 15-minute drive',
      },
      {
        name: 'Escape Beach',
        description:
          "A full-service beach club with shallow, calm water, sun loungers, a beachside pool, and a menu built for picky young eaters as much as adults. It's an easy stop for a mid-morning swim break with proper facilities — showers, toilets, and lifeguard-monitored swimming areas.",
        coordinates: [35.3208, 33.2456],
        hours: '9:00 - 19:00 (seasonal)',
        entryFee: 'Entry/lounger fee ~100-150 TRY, often includes a drink credit',
        parking: 'Free lot at the venue',
        accessibility: 'Flat, wheelchair and stroller accessible throughout',
        timeRequired: '2 hours',
        photographyTip: 'The pool-to-sea view makes a fun, colourful family photo spot around midday.',
        nearbyRestaurant: 'On-site restaurant and snack bar',
        nearbyAttraction: 'Kyrenia Harbour, 20-minute drive',
      },
      {
        name: 'Kyrenia Harbour',
        description:
          'A relaxed midday stop where kids can watch fishing boats and yachts up close, feed the resident seagulls (carefully), and grab ice cream from one of the many harbourfront cafés, all under the watchful backdrop of Kyrenia Castle. It is scenic, walkable, and never feels rushed.',
        coordinates: [35.3411, 33.3186],
        hours: 'Always accessible; café hours vary, generally 9:00-22:00',
        entryFee: 'Free to walk the harbour',
        parking: 'Paid lots a short walk away',
        accessibility: 'Flat, stroller-friendly promenade',
        timeRequired: '1 hour',
        photographyTip: 'Late morning light on the colourful boats against the castle wall is the classic family photo backdrop.',
        nearbyRestaurant: 'Any of the harbourfront cafés',
        nearbyAttraction: 'Kyrenia Castle Shipwreck Museum, right on the harbour if energy allows',
      },
      {
        name: 'Karpaz Wild Donkey Sanctuary Area',
        description:
          "Along the roads of the Karpaz Peninsula, wild donkeys roam freely and are famously unbothered by passing cars — a near-guaranteed animal encounter that delights children without requiring a zoo enclosure. A small feeding area near Dipkarpaz sells carrots and apples for a gentle, safe interaction.",
        coordinates: [35.55, 34.25],
        hours: 'Always accessible; donkeys roam freely along the road',
        entryFee: 'Free; feed purchases ~20-30 TRY',
        parking: 'Roadside pull-offs where donkeys are commonly seen',
        accessibility: 'Roadside viewing, easy for all ages',
        timeRequired: '30-45 minutes',
        photographyTip: 'Keep a respectful distance and let the donkeys approach — they are wild animals, not petting-zoo residents.',
        nearbyRestaurant: 'Dipkarpaz village restaurants, 15-minute drive',
        nearbyAttraction: 'Golden Beach, 20-minute drive',
      },
      {
        name: 'Golden Beach',
        description:
          "The wide, gently sloping sand at Golden Beach's main access point is ideal for family play — sandcastles, gentle waves, and enough space that nobody feels crowded even in peak summer. A couple of relaxed beach shacks near the entrance sell grilled corn, drinks, and simple snacks.",
        coordinates: [35.62, 34.55],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Informal parking near the main access point',
        accessibility: 'Wide, gently sloping sand; strollers manageable near the entrance',
        timeRequired: '1.5-2 hours',
        photographyTip: 'Golden hour here genuinely lives up to the name — the sand itself glows amber in late afternoon light.',
        nearbyRestaurant: 'Beach shacks near the main entrance',
        nearbyAttraction: 'Dipkarpaz village, 20-minute drive',
      },
      {
        name: 'Dipkarpaz Village',
        description:
          "A relaxed final stop with a mixed Turkish and Greek Cypriot community, simple family-run restaurants, and a slower pace that makes a natural wind-down after a beach day. Kids tend to enjoy the free-roaming chickens and goats around the village as much as the meal itself.",
        coordinates: [35.5989, 34.3775],
        hours: 'Restaurants typically 12:00-22:00',
        entryFee: 'Free to explore',
        parking: 'Free street parking',
        accessibility: 'Flat village streets, easy walking',
        timeRequired: '1 hour',
        photographyTip: 'End-of-day family portraits work well in the soft light near the village square just before dinner.',
        nearbyRestaurant: 'Karpaz House Restaurant, in the village',
        nearbyAttraction: 'Golden Beach, 20-minute drive back if you want one more sunset swim',
      },
    ],
    travelTips: [
      'Bring reef-safe sunscreen, hats, and reapply often — coastal sun is stronger than it feels with the sea breeze.',
      'Book Alagadi turtle watch programs in advance during peak June-August season; slots fill up.',
      'Pack a cooler with water and snacks for the Karpaz Peninsula stretch, where services are sparse between stops.',
      'Escape Beach and Alagadi both have accessible restrooms and showers — useful landmarks to plan around with young kids.',
    ],
    insiderTips: [
      'Ask at the Alagadi visitor centre about daytime nest markers even outside evening watch hours — staff are usually happy to explain the conservation work to curious kids.',
      'The donkeys near Dipkarpaz are most active and visible in the cooler hours of morning and late afternoon.',
      'Golden Beach empties out noticeably after 4pm on weekdays — a good window for a calmer family swim.',
    ],
    faq: [
      {
        question: 'Is the water safe and calm for young children?',
        answer:
          'Escape Beach and the main access point of Golden Beach both have gentle, shallow entry points well suited to young swimmers. Always supervise closely, as none of these beaches has constant lifeguard coverage outside managed club areas.',
      },
      {
        question: 'Are the wild donkeys safe to be near?',
        answer:
          "Generally yes if approached calmly and without sudden movement, but they are wild animals — never let children run at them or attempt to touch them without an adult present and the donkey's clear willingness to approach.",
      },
      {
        question: "What's the best month for turtle hatchling watching?",
        answer:
          'July and August typically offer the highest chance of seeing hatchlings, though exact timing depends on the nesting season and is announced by the conservation project closer to each date.',
      },
    ],
  },
  {
    id: 'food-and-flavors',
    slug: 'food-and-flavors',
    title: 'Food & Flavors Trail',
    icon: 'utensils',
    theme: 'A working tour of Cypriot food, from citrus groves to village ovens',
    tagline: 'Eat your way across the island, one village kitchen at a time.',
    category: ['Food', 'Villages'],
    difficulty: 'Easy',
    duration: '1 Day (6-8 hours)',
    distanceKm: 110,
    drivingTimeHours: 2,
    walkingTimeHours: 1,
    bestSeason: 'November to March (citrus season) or year-round for the rest',
    budget: '350-500 TRY per person (multiple meals and tastings)',
    heroDescription:
      "This is a route best attempted with an appetite and loose trousers. It follows the raw ingredients of Cypriot cuisine — citrus, halloumi, olives, carob — from the fields and dairies where they're made to the family kitchens that turn them into a proper meal.",
    stops: [
      {
        name: 'Güzelyurt Orange Groves',
        description:
          "Güzelyurt (Morphou) is the citrus capital of Northern Cyprus, its groves producing the sweet oranges celebrated every January at the town's long-running Orange Festival. Several roadside stands let you buy fruit picked that same morning, and in season the entire drive into town smells of citrus blossom or ripe fruit depending on the month.",
        coordinates: [35.1961, 32.9903],
        hours: 'Roadside stands typically 8:00-18:00, seasonal (Nov-Mar)',
        entryFee: 'Free to visit; fruit purchases by weight',
        parking: 'Roadside pull-offs near the stands',
        accessibility: 'Flat roadside access',
        timeRequired: '20-30 minutes',
        photographyTip: 'Backlit shots through the orange trees in late afternoon show off the fruit\'s color beautifully.',
        nearbyRestaurant: 'Güzelyurt town centre kebap houses, 10 minutes',
        nearbyAttraction: 'Local halloumi dairy, 20-minute drive',
      },
      {
        name: 'Village Halloumi Dairy',
        description:
          "Halloumi has been made on Cyprus for centuries using a traditional method of curdling sheep and goat milk with a touch of mint, and several small family dairies near Güzelyurt still make it by hand daily. Watching the curds pulled and stretched into shape — and tasting it minutes later, still warm — is a completely different experience from the vacuum-packed version most travelers know.",
        coordinates: [35.18, 33.02],
        hours: 'Best visited mid-morning during production, roughly 8:00-11:00',
        entryFee: 'Free to observe; tastings and purchases modestly priced',
        parking: 'Free on-site parking',
        accessibility: 'Flat working dairy floor, easy access',
        timeRequired: '30-45 minutes',
        photographyTip: 'The curd-stretching process, shot up close, captures the texture and steam beautifully.',
        nearbyRestaurant: 'Değirmenlik village restaurants, 30-minute drive',
        nearbyAttraction: 'Lefke Old Town, 20-minute drive',
      },
      {
        name: 'Lefke Old Town Bakeries',
        description:
          "Lefke's old town bakeries still fire wood-burning ovens for flatbread and simit (sesame-crusted bread rings), and mid-morning is when the smell hits the street hardest. Pair a warm simit with a glass of strong Cypriot coffee at a nearby kahve for a perfect mid-route breakfast stop.",
        coordinates: [35.1119, 32.8506],
        hours: 'Bakeries typically 6:00-14:00 for fresh bread',
        entryFee: 'Free to browse; bread and pastries modestly priced',
        parking: 'Street parking near the market square',
        accessibility: 'Flat, mostly paved streets',
        timeRequired: '30 minutes',
        photographyTip: 'Shoot the baker pulling bread from the wood oven — ask permission first, most are happy to show off the process.',
        nearbyRestaurant: 'This is the bakery stop itself',
        nearbyAttraction: 'Değirmenlik Restaurant, 30-minute drive east',
      },
      {
        name: 'Değirmenlik Restaurant (Mezze Lunch)',
        description:
          "This village institution serves a proper Cypriot mezze — a rolling procession of small dishes that can stretch to fifteen or twenty plates: grilled halloumi, stuffed vine leaves, olives cured in-house, slow-cooked lamb kleftiko, and fresh village bread to mop up the rest. Plan for a long, unhurried lunch; rushing a real mezze defeats the point.",
        coordinates: [35.2394, 33.5561],
        hours: '12:00 - 22:00',
        entryFee: 'Full mezze from ~350 TRY per person',
        parking: 'Free street parking nearby',
        accessibility: 'Flat, easy access',
        timeRequired: '1.5-2 hours',
        photographyTip: 'Shoot the mezze table from above once most dishes have arrived — the variety is the visual story.',
        nearbyRestaurant: '(This is the restaurant stop)',
        nearbyAttraction: 'Alevkaya honey producers, 20-minute drive',
      },
      {
        name: 'Alevkaya Honey & Herb Producers',
        description:
          "Small-scale beekeepers in the pine forests around Alevkaya produce thyme and pine honey with a distinctly resinous flavor you won't find in supermarket jars. Several sell directly from home, alongside dried wild herbs — sage, oregano, and rock rose — gathered from the surrounding hillsides.",
        coordinates: [35.2864, 33.6825],
        hours: 'Variable; roadside stalls typically 9:00-17:00 in season',
        entryFee: 'Free to browse; honey and herbs modestly priced',
        parking: 'Roadside pull-offs near stalls',
        accessibility: 'Flat roadside access',
        timeRequired: '20-30 minutes',
        photographyTip: 'Honeycomb held up to sunlight makes a striking macro shot with the golden color glowing through.',
        nearbyRestaurant: 'Boğaz harbour restaurants, 30-minute drive',
        nearbyAttraction: 'Boğaz Harbour, 30-minute drive',
      },
      {
        name: 'Boğaz Harbour Seafood',
        description:
          "End the day where the fishing boats come in: Boğaz's small harbour restaurants serve the day's catch grilled simply with lemon and olive oil, alongside a last round of meze if you somehow still have room. It's a relaxed, unpretentious close to a day built around real, working food culture rather than tourist menus.",
        coordinates: [35.3903, 33.8514],
        hours: '12:00 - 23:00',
        entryFee: 'Dinner from ~300 TRY per person',
        parking: 'Free harbour parking',
        accessibility: 'Flat, paved harbourfront',
        timeRequired: '1.5 hours',
        photographyTip: 'The boats and dinner table together in one frame, shot at sunset, sums up the whole day.',
        nearbyRestaurant: '(This is the final stop)',
        nearbyAttraction: 'Kantara Castle, 15-minute drive if you have energy for one more view',
      },
    ],
    travelTips: [
      'Pace yourself — this route works best if you eat lightly at breakfast to leave room for the mezze lunch.',
      'Cash is preferred at most small producers and roadside stands.',
      'Citrus season runs November through March; outside that window, the groves are still worth seeing but there is less fruit to buy.',
      'Ask before photographing inside working dairies and bakeries — most say yes, but it is a courtesy worth extending.',
    ],
    insiderTips: [
      'Village dairies sell their best halloumi in the first hour or two after it is made — arrive before 10am for the freshest batch.',
      'Değirmenlik Restaurant\'s kleftiko often sells out on weekends — call ahead if you have a specific day in mind.',
      "Alevkaya's pine honey is genuinely rare outside the region — it makes one of the best edible souvenirs on the island.",
    ],
    faq: [
      {
        question: 'Is this route vegetarian-friendly?',
        answer:
          'Very much so — halloumi, olives, stuffed vegetables, and fresh bread make up a large share of a traditional mezze, and most stops can build a full vegetarian spread.',
      },
      {
        question: 'How many meals should I plan for in one day?',
        answer:
          'Plan for a light breakfast, a bakery snack mid-morning, a substantial mezze lunch, and a lighter seafood dinner. Pace accordingly — this is not a light-eating day.',
      },
      {
        question: 'Can I buy food to take home?',
        answer:
          'Yes — honey, dried herbs, olive oil, and vacuum-packed halloumi all travel well. Fresh halloumi and citrus are best enjoyed locally rather than packed for a flight.',
      },
    ],
  },
  {
    id: 'karpaz-wild-nature',
    slug: 'karpaz-wild-nature',
    title: 'Karpaz Wild Nature',
    icon: 'trees',
    theme: "The island's last true wilderness, at the far edge of the peninsula",
    tagline: "Where the road runs out and the wild donkeys take over.",
    category: ['Nature', 'Coastline', 'Photography'],
    difficulty: 'Moderate',
    duration: '1 Day (8 hours, or overnight)',
    distanceKm: 240,
    drivingTimeHours: 4,
    walkingTimeHours: 2,
    bestSeason: 'April to June and September to October',
    budget: '350-500 TRY per person',
    heroDescription:
      "The Karpaz Peninsula stretches nearly 70 kilometres into the Mediterranean, narrowing to a wild, mostly unpopulated finger of protected nature reserve. This route runs the length of it, from farmland to lighthouse, through landscapes that feel closer to an uninhabited island than a European coastline.",
    stops: [
      {
        name: 'Yenierenköy',
        description:
          "The last proper town before the peninsula narrows into wilderness, Yenierenköy makes a sensible final stop for fuel, supplies, and a coffee before the more remote stretch ahead. Its relaxed town square and weekly market give a good sense of daily life at the edge of the island.",
        coordinates: [35.5628, 34.3389],
        hours: 'Shops and cafés typically 8:00-19:00',
        entryFee: 'Free',
        parking: 'Free street parking',
        accessibility: 'Flat, paved town centre',
        timeRequired: '20-30 minutes',
        photographyTip: 'The town square market, if timed right, offers good candid street photography opportunities.',
        nearbyRestaurant: 'Town centre lokantas',
        nearbyAttraction: 'Karpaz National Park boundary, 20-minute drive',
      },
      {
        name: 'Karpaz National Park',
        description:
          "Protected since 1998, this national park covers much of the peninsula's tip and preserves rare dune systems, wild orchids in spring, and one of the last undeveloped Mediterranean coastal ecosystems. Free-roaming wild donkeys — descendants of animals released or escaped decades ago — are the park's most famous residents, wandering fields and roadsides with total indifference to traffic.",
        coordinates: [35.6, 34.45],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Informal pull-offs throughout the park',
        accessibility: 'Mostly flat, some sandy/uneven trail sections',
        timeRequired: '1-2 hours',
        photographyTip: 'Wild orchids bloom roadside in April — look low in the scrubland rather than in open fields.',
        nearbyRestaurant: 'Dipkarpaz village restaurants, 15-minute drive',
        nearbyAttraction: 'Golden Beach, 20-minute drive',
      },
      {
        name: 'Golden Beach',
        description:
          "Stretching for kilometres of untouched golden sand, this is one of the last great undeveloped beaches in the Mediterranean and a critical nesting site for endangered green and loggerhead turtles each summer. The dunes behind the beach shift constantly with the wind, occasionally revealing shipwreck debris from decades past.",
        coordinates: [35.62, 34.55],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Informal parking areas along the access road',
        accessibility: 'Soft deep sand; a long walk from parking to quieter stretches',
        timeRequired: '1.5-2 hours',
        photographyTip: 'Shoot the dune ridgelines at sunrise for dramatic shadow texture with almost nobody else around.',
        nearbyRestaurant: 'Basic beach shacks near the main access point',
        nearbyAttraction: 'Dipkarpaz Village, 20-minute drive',
      },
      {
        name: 'Dipkarpaz Village',
        description:
          "The last real village before the peninsula's uninhabited tip, Dipkarpaz has a genuinely mixed Turkish and Greek Cypriot community — a rarity on the island — with two churches and a mosque within a few minutes' walk of each other. It is the natural base for lunch or an overnight before the final push to the cape.",
        coordinates: [35.5989, 34.3775],
        hours: 'Restaurants typically 12:00-22:00',
        entryFee: 'Free to explore',
        parking: 'Free street parking',
        accessibility: 'Flat village streets',
        timeRequired: '1 hour',
        photographyTip: "The village's mixed religious architecture within a short walk makes for a distinctive, tellable photo essay.",
        nearbyRestaurant: 'Karpaz House Restaurant',
        nearbyAttraction: 'Zafer Burnu (Cape Apostolos Andreas), 45-minute drive to the very tip',
      },
      {
        name: 'Zafer Burnu (Cape Apostolos Andreas)',
        description:
          "The absolute end of the road — literally and figuratively. Zafer Burnu is the easternmost point of the island, marked by a small lighthouse and an uninterrupted view of open Mediterranean water in three directions. Past this point, only a rough track continues to a scatter of tiny offshore islets. Standing here, with no development visible in any direction, is as close as Northern Cyprus gets to true wilderness.",
        coordinates: [35.6828, 34.5847],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Gravel lot near the lighthouse',
        accessibility: 'Uneven, unfenced terrain near the cliffs — supervise children and watch your footing',
        timeRequired: '45 minutes - 1 hour',
        photographyTip: 'The lighthouse against open sea in three directions is the singular, unmissable shot of the entire route.',
        nearbyRestaurant: 'Bring supplies — no facilities at the cape itself',
        nearbyAttraction: 'Apostolos Andreas Monastery, 5-minute drive back',
      },
      {
        name: 'Apostolos Andreas Monastery',
        description:
          'A short drive back from the cape, this pilgrimage monastery marks the transition from true wilderness back toward inhabited land, its lone silhouette against the sea acting almost as a bookend to the whole peninsula drive. A quiet stop here to reflect on the day works better than rushing straight back.',
        coordinates: [35.6672, 34.5758],
        hours: '8:00 - 18:00 daily',
        entryFee: 'Free (donations welcomed)',
        parking: 'Free lot adjacent to the monastery',
        accessibility: 'Mostly flat courtyard, some steps',
        timeRequired: '30-45 minutes',
        photographyTip: 'Shoot from the coastal approach road for the classic monastery-against-the-sea composition.',
        nearbyRestaurant: 'Dipkarpaz village, 20-minute drive',
        nearbyAttraction: 'Golden Beach, worth a return visit for sunset if time allows',
      },
      {
        name: 'Ronnas Bay',
        description:
          "A secluded, sheltered bay near the base of the peninsula, popular with informal campers and known for consistently calm water even when the open coastline elsewhere gets choppy. It makes a peaceful final stop for a swim before the long drive back toward Nicosia or Kyrenia.",
        coordinates: [35.61, 34.52],
        hours: 'Always accessible',
        entryFee: 'Free',
        parking: 'Informal dirt parking near the bay',
        accessibility: 'Uneven approach path, sandy bay floor',
        timeRequired: '45 minutes',
        photographyTip: 'The bay\'s calm, glassy water makes for excellent reflection shots at dawn or dusk.',
        nearbyRestaurant: 'Dipkarpaz village, 15-minute drive',
        nearbyAttraction: 'Yenierenköy, 30-minute drive back toward the main road',
      },
    ],
    travelTips: [
      'Fuel up in Yenierenköy — there are no stations past this point for the rest of the peninsula.',
      'This is a genuinely long day; consider an overnight in Dipkarpaz to explore at a slower pace.',
      'Bring more water and snacks than you think you need — services are minimal past Dipkarpaz.',
      'The final stretch to Zafer Burnu has sections of rough, potholed road — drive slowly.',
    ],
    insiderTips: [
      'Wild donkeys are most active and easiest to spot in the cool hours of early morning and late afternoon.',
      'Golden Beach at sunrise, before any other visitors arrive, is a genuinely different experience from the midday version.',
      'Ronnas Bay is known mostly to campers and locals — a good alternative swim spot when Golden Beach feels busy.',
    ],
    faq: [
      {
        question: 'Do I need a 4x4 for this route?',
        answer:
          'A standard car manages the paved roads fine, but the final approach to Zafer Burnu has some rough, potholed sections — drive slowly and a car with reasonable ground clearance is more comfortable.',
      },
      {
        question: 'Is it possible to see the whole peninsula in one day?',
        answer:
          'Yes, with an early start, though it makes for a long day of driving. An overnight in Dipkarpaz turns it into a much more relaxed two-day trip.',
      },
      {
        question: 'Are the wild donkeys dangerous?',
        answer:
          'They are generally calm and accustomed to vehicles, but they are wild animals — never feed them from a moving car, and always give them the right of way on the road.',
      },
    ],
  },
];

export function getRouteBySlug(slug: string): RouteData | undefined {
  return routes.find((route) => route.slug === slug);
}

export function getRelatedRoutes(routeId: string, count = 3): RouteData[] {
  const current = routes.find((r) => r.id === routeId);
  if (!current) return routes.slice(0, count);
  const scored = routes
    .filter((r) => r.id !== routeId)
    .map((r) => ({
      route: r,
      score: r.category.filter((c) => current.category.includes(c)).length,
    }))
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.route);
}
