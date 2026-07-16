import { Layout } from "@/components/layout";
import { RouteCard } from "@/components/route-card";
import { routes } from "@/data/routes";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const collections = [
  {
    name: "History & Legends",
    description: "Three thousand years of empires, ruined citadels, and the myths locals still tell about them.",
    routeSlugs: [
      "forgotten-kingdoms",
      "venetian-byzantine-heritage",
      "legends-mysteries"
    ]
  },
  {
    name: "Coastal Escapes",
    description: "Sea caves, quiet beaches, and shoreline roads with nowhere to be in a hurry.",
    routeSlugs: [
      "hidden-coastline",
      "family-beach-day",
      "karpaz-wild-nature"
    ]
  },
  {
    name: "Villages, Food & Wine",
    description: "Stone courtyards, vineyard lunches, and the markets where locals actually shop.",
    routeSlugs: [
      "secret-villages",
      "food-and-flavors",
      "vineyards-harvest"
    ]
  },
  {
    name: "Nature & Wild Cyprus",
    description: "Wild donkeys, star-filled skies, and landscapes the guidebooks skip.",
    routeSlugs: [
      "karpaz-wild-nature",
      "sunset-stargazing"
    ]
  },
  {
    name: "Family Friendly",
    description: "Easy stops, shallow water, and enough to keep kids curious without wearing anyone out.",
    routeSlugs: [
      "family-beach-day",
      "secret-villages"
    ]
  }
];

export default function ExplorePage() {
  return (
    <Layout>
      <Helmet>
        <title>Explore Themes | Drive KKTC</title>
        <meta name="description" content="Browse Northern Cyprus self-drive routes by theme: History, Coastal Escapes, Villages, Nature, and Family Friendly." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-muted overflow-hidden print-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
          style={{ backgroundImage: 'url(/attached_assets/generated_images/explore-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background z-0" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-tight">Thematic Collections</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Choose your mood. From forgotten empires to quiet beaches, find the exact journey you're looking for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections */}
      <div className="bg-background pb-24">
        {collections.map((collection, idx) => {
          const collectionRoutes = collection.routeSlugs
            .map(slug => routes.find(r => r.slug === slug))
            .filter(Boolean) as typeof routes;

          return (
            <section key={collection.name} className="pt-20 border-t border-border/50 first:border-0 first:pt-12">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{collection.name}</h2>
                  <p className="text-lg text-foreground/70">{collection.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {collectionRoutes.map((route, rIdx) => (
                    <RouteCard key={route.id} route={route} index={rIdx} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </Layout>
  );
}
