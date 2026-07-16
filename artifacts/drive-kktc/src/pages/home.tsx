import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { RouteCard } from "@/components/route-card";
import { routes } from "@/data/routes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Compass, Map, Sun, Clock, Quote, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useRef, useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const testimonials = [
  {
    name: "Elif K.",
    origin: "Istanbul",
    quote: "We followed the Hidden Coastline route on our second day and ended up swimming alone in a sea cave for an hour. No tour bus, no queue, just us and the water.",
    routeSlug: "hidden-coastline"
  },
  {
    name: "Marco R.",
    origin: "Milan",
    quote: "Forgotten Kingdoms took us through three different empires before lunch. Having the driving times and entry fees mapped out ahead meant we never wasted a morning circling for parking.",
    routeSlug: "forgotten-kingdoms"
  },
  {
    name: "Priya N.",
    origin: "London",
    quote: "The Karpaz route was the wildest thing we did all trip — donkeys in the road, an empty beach that goes on forever, and a lighthouse at the very tip of the peninsula. Worth the drive.",
    routeSlug: "karpaz-wild-nature"
  },
  {
    name: "Jonas B.",
    origin: "Hamburg",
    quote: "We're not big drinkers but the Vineyards & Harvest Trail sold us on Cypriot wine by the second stop. The village lunch afterwards was the best meal of the whole trip.",
    routeSlug: "vineyards-harvest"
  }
];

// Animated Counter component
function Counter({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = Math.max(duration / end, 16);
    const step = Math.max(Math.floor(end / (duration / 16)), 1);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-5xl md:text-6xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-foreground/70 font-medium tracking-wide uppercase text-sm">
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  const { toast } = useToast();
  const featuredRoutes = routes.slice(0, 3);
  
  // Computed stats
  const totalRoutes = routes.length;
  const totalStops = routes.reduce((acc, r) => acc + r.stops.length, 0);
  const totalCategories = new Set(routes.flatMap(r => r.category)).size;
  const totalDrivingHours = Math.round(routes.reduce((acc, r) => acc + r.drivingTimeHours, 0));

  const onNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed successfully",
      description: "Welcome to the unhurried traveler's club. Check your inbox soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

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

      {/* Stats Section */}
      <section className="py-16 bg-background border-b border-border/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter value={totalRoutes} label="Curated Routes" />
            <Counter value={totalStops} label="Handpicked Stops" suffix="+" />
            <Counter value={totalCategories} label="Themes" />
            <Counter value={totalDrivingHours} label="Driving Hours" suffix="+" />
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Why Drive KKTC?</h2>
            <p className="text-foreground/70 text-lg">We mapped out the island's most compelling drives so you don't have to guess.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">Local Authenticity</h3>
              <p className="text-foreground/70">
                We prioritize authenticity over convenience. Discover Maronite enclaves, wild donkeys on empty beaches, and ruined mountain castles.
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
                <Map className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">Practical Planning</h3>
              <p className="text-foreground/70">
                Every stop is personally vetted. We provide exact coordinates, parking tips, and the best times to visit for ideal photography light.
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

      {/* Categories Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl font-bold mb-4">Choose Your Theme</h2>
              <p className="text-foreground/70 text-lg">
                Not sure where to start? Browse collections curated by the type of experience you want.
              </p>
            </div>
            <Button variant="ghost" asChild className="group rounded-full">
              <Link href="/explore">
                View all collections <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/explore" className="group block relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md">
              <div className="absolute inset-0 bg-[url('/attached_assets/generated_images/category-history.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-serif text-2xl font-bold mb-2 group-hover:text-accent transition-colors">History & Legends</h3>
                <p className="text-white/80 text-sm">Three thousand years of empires and ruined citadels.</p>
              </div>
            </Link>
            <Link href="/explore" className="group block relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md">
              <div className="absolute inset-0 bg-[url('/attached_assets/generated_images/category-nature.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-serif text-2xl font-bold mb-2 group-hover:text-accent transition-colors">Coastal Escapes</h3>
                <p className="text-white/80 text-sm">Sea caves, quiet beaches, and shoreline roads.</p>
              </div>
            </Link>
            <Link href="/explore" className="group block relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md">
              <div className="absolute inset-0 bg-[url('/attached_assets/generated_images/about-bg.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-serif text-2xl font-bold mb-2 group-hover:text-accent transition-colors">Villages, Food & Wine</h3>
                <p className="text-white/80 text-sm">Stone courtyards, vineyard lunches, and local markets.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Plan with Confidence (Dark Section) */}
      <section className="py-32 relative overflow-hidden bg-zinc-950 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
          style={{ backgroundImage: 'url(/attached_assets/generated_images/plan-confidence.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/70 to-transparent z-0" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Plan with Confidence</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10">
              Stop scrolling through outdated forums. We've mapped out exact coordinates, realistic driving times, and up-to-date entry fees so you can just focus on the drive.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm shrink-0">
                  <Map className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Pinpoint Accuracy</h4>
                  <p className="text-white/70">Interactive maps with exact GPS coordinates for obscure stops.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Realistic Pacing</h4>
                  <p className="text-white/70">Time estimates that account for winding mountain roads, not just distance.</p>
                </div>
              </li>
            </ul>
            <Button size="lg" asChild className="mt-10 rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/routes">Browse All Routes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Routes */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Sample Itineraries</h2>
            <p className="text-foreground/70 text-lg">A taste of what's waiting out there.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRoutes.map((route, index) => (
              <RouteCard key={route.id} route={route} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild className="rounded-full">
              <Link href="/routes">View All {totalRoutes} Routes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Stories from the Road</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">Hear from travelers who took the keys and explored the unhurried Mediterranean.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-foreground/80 text-lg leading-relaxed font-serif italic mb-6">"{t.quote}"</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-border/50 mt-auto">
                  <div>
                    <h4 className="font-bold text-foreground">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.origin}</p>
                  </div>
                  <Link href={`/routes/${t.routeSlug}`} className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
                    View Route <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 relative overflow-hidden bg-primary text-primary-foreground">
        <div 
          className="absolute inset-0 opacity-10 z-0 bg-[url('/attached_assets/generated_images/category-history.jpg')] bg-cover bg-center mix-blend-overlay"
        />
        <div className="container relative z-10 mx-auto px-4 text-center max-w-2xl">
          <Mail className="w-12 h-12 mx-auto mb-6 text-accent" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            The Unhurried Inbox
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 font-light">
            No spam. Just occasional dispatches on new routes, secret beaches, and the best time to visit the island.
          </p>
          <form onSubmit={onNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              required 
              className="bg-primary-foreground/10 border-primary-foreground/20 text-white placeholder:text-white/50 h-12 rounded-full focus-visible:ring-accent"
            />
            <Button type="submit" size="lg" className="rounded-full h-12 px-8 bg-accent text-accent-foreground hover:bg-accent/90 shrink-0 font-semibold border-none">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
