import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { RouteCard } from "@/components/route-card";
import { routes } from "@/data/routes";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Map, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const featuredRoutes = routes.slice(0, 3);

  return (
    <Layout>
      <Helmet>
        <title>Drive KKTC | Premium Self-Drive Routes in Northern Cyprus</title>
        <meta name="description" content="Discover curated self-drive itineraries for exploring Northern Cyprus. Sun-bleached medieval castles, empty coves, and quiet Mediterranean villages." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-in fade-in duration-1000"
          style={{ 
            backgroundImage: 'url(/attached_assets/generated_images/hero-bg.jpg)',
            filter: 'brightness(0.8) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background z-0" />
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg mb-6 leading-tight">
              The Unhurried <br/> <span className="text-accent italic">Mediterranean</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-white/90 drop-shadow-md mb-10 max-w-2xl mx-auto font-medium"
          >
            Curated road trips through Northern Cyprus. Forgotten kingdoms, hidden coves, and the kind of quiet villages that aren't on the map.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild className="rounded-full text-base h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90 border-none font-semibold">
              <Link href="/routes">Start Exploring</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full text-base h-14 px-8 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-md">
              <Link href="/about">Our Story</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Routes */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl font-bold mb-4">Journeys With Intent</h2>
              <p className="text-foreground/70 text-lg">
                We've mapped out the island's most compelling drives. No tourist traps, no rushed itineraries — just the open road and the sea breeze.
              </p>
            </div>
            <Button variant="ghost" asChild className="group rounded-full">
              <Link href="/routes">
                View all routes <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRoutes.map((route, index) => (
              <RouteCard key={route.id} route={route} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-muted border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Map className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">Curated Precision</h3>
              <p className="text-foreground/70">
                Every stop is personally vetted. We provide exact coordinates, parking tips, and the best times to visit for ideal photography light.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 text-secondary">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">Off the Grid</h3>
              <p className="text-foreground/70">
                We prioritize authenticity over convenience. Discover Maronite enclaves, wild donkeys on empty beaches, and ruined mountain castles.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">Slow Travel</h3>
              <p className="text-foreground/70">
                These aren't checklists. Our itineraries are designed with built-in time for an impromptu swim, a long lunch, or just sitting under an olive tree.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0" />
        <div 
          className="absolute inset-0 opacity-10 z-0 bg-[url('/attached_assets/generated_images/category-history.jpg')] bg-cover bg-center mix-blend-overlay"
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for the road?
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10 font-light">
            Rent a car, roll the windows down, and let the island reveal itself.
          </p>
          <Button size="lg" asChild className="rounded-full h-14 px-10 bg-white text-primary hover:bg-white/90 text-lg font-semibold border-none">
            <Link href="/routes">Browse All Routes</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
