import { useState, useMemo, useEffect } from "react";
import { Layout } from "@/components/layout";
import { RouteCard } from "@/components/route-card";
import { MapView } from "@/components/map-view";
import { routes, Category, Difficulty } from "@/data/routes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Map as MapIcon, Grid3X3, SlidersHorizontal, Compass, Heart } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";
import { useFavorites } from "@/hooks/use-favorites";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export default function RoutesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const { isFavorite } = useFavorites();

  const [location] = useLocation();

  useEffect(() => {
    // Basic query string parsing since wouter doesn't have a built-in hook for it
    const search = window.location.search;
    if (search.includes("saved=true")) {
      setShowSavedOnly(true);
    } else {
      setShowSavedOnly(false);
    }
  }, [location]);

  const allCategories = Array.from(new Set(routes.flatMap(r => r.category))).sort();
  const allDifficulties = ["Easy", "Moderate", "Challenging"];

  const filteredRoutes = useMemo(() => {
    return routes.filter(route => {
      if (showSavedOnly && !isFavorite(route.id)) return false;

      const matchesSearch = route.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            route.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = selectedCategory === "all" || route.category.includes(selectedCategory as Category);
      const matchesDiff = selectedDifficulty === "all" || route.difficulty === selectedDifficulty as Difficulty;
      
      return matchesSearch && matchesCat && matchesDiff;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty, showSavedOnly, isFavorite]);

  return (
    <Layout>
      <Helmet>
        <title>All Routes | Drive KKTC</title>
        <meta name="description" content="Browse our collection of premium self-drive itineraries across Northern Cyprus." />
      </Helmet>

      <div className="bg-background pt-28 pb-8 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-8 flex justify-between items-start">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground flex items-center gap-3">
                {showSavedOnly ? (
                  <><Heart className="w-8 h-8 text-destructive fill-destructive" /> Saved Routes</>
                ) : (
                  "The Itineraries"
                )}
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {showSavedOnly 
                  ? "Your personal collection of routes saved for later." 
                  : "Find the perfect road trip. From easy half-day coastal cruises to challenging mountain ascents."}
              </p>
            </div>
            {showSavedOnly && (
              <Button variant="outline" asChild>
                <a href="/routes">View All Routes</a>
              </Button>
            )}
          </div>

          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-2xl border border-border/50 shadow-sm">
            <div className="relative w-full md:w-96 flex-shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search routes or keywords..." 
                className="pl-9 bg-background border-border/50 focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="shrink-0 gap-2">
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                    {(selectedCategory !== "all" || selectedDifficulty !== "all") && (
                      <Badge variant="secondary" className="ml-1 px-1.5 min-w-5 h-5 flex items-center justify-center bg-primary text-primary-foreground">!</Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader className="mb-6">
                    <SheetTitle className="font-serif text-2xl">Filter Routes</SheetTitle>
                    <SheetDescription>Refine your search by interest or difficulty.</SheetDescription>
                  </SheetHeader>
                  
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Category</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          {allCategories.map(cat => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-medium">Driving Difficulty</label>
                      <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any Difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Any Difficulty</SelectItem>
                          {allDifficulties.map(diff => (
                            <SelectItem key={diff} value={diff}>{diff}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      className="w-full mt-4" 
                      variant="outline"
                      onClick={() => {
                        setSelectedCategory("all");
                        setSelectedDifficulty("all");
                        setSearchQuery("");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>

              <div className="h-8 w-px bg-border mx-2 hidden md:block" />

              <div className="flex bg-muted p-1 rounded-lg shrink-0">
                <Button 
                  variant={viewMode === "grid" ? "secondary" : "ghost"} 
                  size="sm" 
                  onClick={() => setViewMode("grid")}
                  className="px-3"
                >
                  <Grid3X3 className="w-4 h-4 mr-2" /> Grid
                </Button>
                <Button 
                  variant={viewMode === "map" ? "secondary" : "ghost"} 
                  size="sm" 
                  onClick={() => setViewMode("map")}
                  className="px-3"
                >
                  <MapIcon className="w-4 h-4 mr-2" /> Map
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-muted/30 pb-24">
        <div className="container mx-auto px-4 md:px-6 pt-12">
          {filteredRoutes.length === 0 ? (
            <div className="text-center py-24 bg-card rounded-2xl border border-border/50">
              <Compass className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="font-serif text-2xl font-medium mb-2">No routes found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedDifficulty("all");
                  setSearchQuery("");
                }}
              >
                Clear all filters
              </Button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRoutes.map((route, index) => (
                <RouteCard key={route.id} route={route} index={index} />
              ))}
            </div>
          ) : (
            <div className="bg-card p-2 rounded-2xl border border-border/50 shadow-sm overflow-hidden h-[70vh]">
              <MapView routes={filteredRoutes} className="w-full h-full rounded-xl" />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
