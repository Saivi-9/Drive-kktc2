import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout";
import { routes } from "@/data/routes";
import { MapView } from "@/components/map-view";
import NotFound from "@/pages/not-found";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Map, Clock, Route as RouteIcon, ShieldAlert, Calendar, Banknote, 
  ChevronDown, ArrowLeft, ArrowUpRight, CheckCircle2, Navigation,
  Share2, Printer, Copy, Utensils, Camera, Heart
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RouteCard } from "@/components/route-card";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useFavorites } from "@/hooks/use-favorites";

function getTimeBlock(index: number, total: number) {
  const ratio = index / Math.max(total - 1, 1);
  if (ratio < 0.3) return "Morning";
  if (ratio < 0.55) return "Midday";
  if (ratio < 0.8) return "Afternoon";
  return "Evening";
}

export default function RouteDetail() {
  const { slug } = useParams();
  const route = routes.find(r => r.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showBackToTop, setShowBackToTop] = useState(false);
  const { toast } = useToast();
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${route?.title} | Drive KKTC`,
          url: url
        });
      } catch (err) {
        console.error("Error sharing", err);
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Route link copied to clipboard.",
    });
  };

  const handlePrint = () => {
    window.print();
  };

  if (!route) {
    return <NotFound />;
  }

  const isFav = isFavorite(route.id);

  const getIconComponent = (iconName: string) => {
    const pascalName = iconName
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    // @ts-ignore
    return LucideIcons[pascalName] || LucideIcons.Map;
  };
  const Icon = getIconComponent(route.icon);

  // Background image based on category
  let bgImage = "/attached_assets/generated_images/hero-bg.jpg";
  if (route.category.includes("History")) bgImage = "/attached_assets/generated_images/category-history.jpg";
  else if (route.category.includes("Nature") || route.category.includes("Coastline")) bgImage = "/attached_assets/generated_images/category-nature.jpg";
  else if (route.category.includes("Villages")) bgImage = "/attached_assets/generated_images/about-bg.jpg";

  // Compute live facts
  const freeStops = route.stops.filter(s => s.entryFee.toLowerCase().includes("free")).length;
  const paidStops = route.stops.length - freeStops;
  const distinctRestaurants = new Set(route.stops.map(s => s.nearbyRestaurant).filter(r => !r.toLowerCase().includes("no facilities") && !r.toLowerCase().includes("bring"))).size;
  const distinctAttractions = new Set(route.stops.map(s => s.nearbyAttraction)).size;

  // Get related routes (simple algo: share category, exclude current)
  const relatedRoutes = routes
    .filter(r => r.id !== route.id && r.category.some(c => route.category.includes(c)))
    .slice(0, 3);
  if (relatedRoutes.length === 0) {
    relatedRoutes.push(...routes.filter(r => r.id !== route.id).slice(0, 3));
  }

  return (
    <Layout>
      <Helmet>
        <title>{route.title} | Drive KKTC</title>
        <meta name="description" content={route.tagline} />
      </Helmet>

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Hero */}
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-muted overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background z-0" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/routes" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to routes
            </Link>
            
            <div className="flex items-center gap-2 print-hidden">
              <Button variant="outline" size="sm" onClick={() => toggleFavorite(route.id)} className="bg-background/20 hover:bg-background/40 border-background/20 backdrop-blur-sm text-foreground">
                <Heart className={isFav ? "w-4 h-4 mr-2 fill-destructive text-destructive" : "w-4 h-4 mr-2"} />
                {isFav ? "Saved" : "Save"}
              </Button>
              <Button variant="outline" size="sm" onClick={handleShare} className="bg-background/20 hover:bg-background/40 border-background/20 backdrop-blur-sm text-foreground">
                <Share2 className="w-4 h-4 mr-2" /> Share
              </Button>
              <Button variant="outline" size="sm" onClick={handlePrint} className="bg-background/20 hover:bg-background/40 border-background/20 backdrop-blur-sm text-foreground hidden sm:flex">
                <Printer className="w-4 h-4 mr-2" /> Print
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="max-w-3xl">
              <div className="flex gap-2 flex-wrap mb-6">
                {route.category.map(c => (
                  <Badge key={c} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{c}</Badge>
                ))}
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-6">{route.title}</h1>
              <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-8 leading-snug">{route.tagline}</p>
              <p className="text-lg leading-relaxed text-foreground/70">{route.heroDescription}</p>
            </div>
            
            <div className="bg-card border border-border/50 shadow-xl rounded-2xl p-6 w-full md:w-80 shrink-0">
              <h3 className="font-serif font-bold text-xl mb-4 border-b border-border/50 pb-4">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><Clock className="w-5 h-5 text-accent" /> <span className="font-medium text-sm">{route.duration}</span></li>
                <li className="flex items-center gap-3"><RouteIcon className="w-5 h-5 text-accent" /> <span className="font-medium text-sm">{route.distanceKm} km driving</span></li>
                <li className="flex items-center gap-3"><ShieldAlert className="w-5 h-5 text-accent" /> <span className="font-medium text-sm">{route.difficulty} difficulty</span></li>
                <li className="flex items-center gap-3"><Calendar className="w-5 h-5 text-accent" /> <span className="font-medium text-sm">{route.bestSeason}</span></li>
                <li className="flex items-center gap-3"><Banknote className="w-5 h-5 text-accent" /> <span className="font-medium text-sm">{route.budget}</span></li>
              </ul>
              <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap gap-2">
                <Badge variant="secondary" className="font-normal text-xs">{route.stops.length} stops</Badge>
                {freeStops > 0 && <Badge variant="secondary" className="font-normal text-xs">{freeStops} free entry</Badge>}
                {paidStops > 0 && <Badge variant="secondary" className="font-normal text-xs">{paidStops} paid entry</Badge>}
                {distinctRestaurants > 0 && <Badge variant="secondary" className="font-normal text-xs">{distinctRestaurants} local eats</Badge>}
                {distinctAttractions > 0 && <Badge variant="secondary" className="font-normal text-xs">{distinctAttractions} nearby spots</Badge>}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Map Section */}
      <section className="bg-background py-12 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-3xl font-bold">Route Map</h2>
            <Badge variant="outline" className="text-sm font-normal"><Map className="w-3 h-3 mr-1" /> {route.stops.length} Stops</Badge>
          </div>
          <div className="bg-card p-2 rounded-2xl border border-border/50 shadow-sm h-[500px]">
            <MapView route={route} className="w-full h-full rounded-xl" />
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Timeline / Itinerary */}
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl font-bold mb-10">The Itinerary</h2>
            
            <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-16 pb-8">
              {route.stops.map((stop, index) => {
                const timeBlock = getTimeBlock(index, route.stops.length);
                const prevTimeBlock = index > 0 ? getTimeBlock(index - 1, route.stops.length) : null;
                const showTimeBlock = timeBlock !== prevTimeBlock;

                return (
                  <div key={index}>
                    {showTimeBlock && (
                      <div className="relative flex items-center mb-8 -ml-8 md:-ml-10 break-before">
                        <div className="bg-background border-2 border-primary text-primary font-serif font-bold px-4 py-1.5 rounded-full text-sm shadow-sm z-10">
                          {timeBlock}
                        </div>
                        <div className="h-px bg-border flex-1 ml-4" />
                      </div>
                    )}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                      className="relative pl-8 md:pl-12 stop-item"
                    >
                  {/* Timeline Node */}
                  <div className="absolute w-8 h-8 rounded-full bg-primary flex items-center justify-center -left-4 top-0 border-4 border-background shadow-sm text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      <h3 className="font-serif text-2xl font-bold text-primary">{stop.name}</h3>
                      <Button variant="outline" size="sm" asChild className="shrink-0 group">
                        <a 
                          href={`https://www.google.com/maps/dir/?api=1&destination=${stop.coordinates[0]},${stop.coordinates[1]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Navigation className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" /> Navigate
                        </a>
                      </Button>
                    </div>
                    
                    <p className="text-foreground/80 leading-relaxed mb-6 font-medium text-lg">
                      {stop.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-muted/50 rounded-xl p-4 mb-6">
                      <div className="flex gap-3">
                        <Clock className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-0.5">Time Required</p>
                          <p className="text-muted-foreground">{stop.timeRequired}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Banknote className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-0.5">Entry Fee</p>
                          <p className="text-muted-foreground">{stop.entryFee}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <ShieldAlert className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-0.5">Accessibility</p>
                          <p className="text-muted-foreground">{stop.accessibility}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Map className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold mb-0.5">Parking</p>
                          <p className="text-muted-foreground">{stop.parking}</p>
                        </div>
                      </div>
                    </div>

                    <Separator className="mb-6" />

                    <div className="space-y-4">
                      {stop.photographyTip && (
                        <div className="flex gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <p className="text-sm"><strong className="font-semibold text-foreground">Photography:</strong> <span className="text-muted-foreground">{stop.photographyTip}</span></p>
                        </div>
                      )}
                      {stop.nearbyRestaurant && (
                        <div className="flex gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                          <p className="text-sm"><strong className="font-semibold text-foreground">Eat:</strong> <span className="text-muted-foreground">{stop.nearbyRestaurant}</span></p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
              );
            })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            {/* Travel Tips */}
            <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary">Essential Prep</h3>
              <ul className="space-y-4">
                {route.travelTips.map((tip, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insider Tips */}
            <div className="bg-accent/10 rounded-2xl p-6 md:p-8 border border-accent/20">
              <h3 className="font-serif text-2xl font-bold mb-6 text-accent-foreground">Local Knowledge</h3>
              <ul className="space-y-4">
                {route.insiderTips.map((tip, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <ArrowUpRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div className="pt-4">
              <h3 className="font-serif text-2xl font-bold mb-6">Common Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                {route.faq.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-medium hover:text-primary text-[15px]">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

        </div>
      </div>

      {/* Related Routes */}
      <section className="bg-muted py-24 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-3xl font-bold mb-10 text-center">Keep Exploring</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedRoutes.map((r, index) => (
              <RouteCard key={r.id} route={r} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Back to top FAB */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-primary text-primary-foreground p-3 rounded-full shadow-xl hover:bg-primary/90 transition-colors"
          aria-label="Back to top"
        >
          <ChevronDown className="w-6 h-6 rotate-180" />
        </motion.button>
      )}
    </Layout>
  );
}
