import { Link } from "wouter";
import { RouteData } from "@/data/routes";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Map, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Map lucide icons from strings
import * as LucideIcons from "lucide-react";

function getIconComponent(iconName: string) {
  // Convert kebab-case or lowercase to PascalCase (e.g., 'landmark' -> 'Landmark')
  const pascalName = iconName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  // @ts-ignore
  return LucideIcons[pascalName] || LucideIcons.Map;
}

interface RouteCardProps {
  route: RouteData;
  index?: number;
  className?: string;
}

export function RouteCard({ route, index = 0, className }: RouteCardProps) {
  const Icon = getIconComponent(route.icon);

  // Select image based on first category to give it a nice aesthetic
  let bgImage = "/attached_assets/generated_images/hero-bg.jpg"; // fallback
  if (route.category.includes("History")) bgImage = "/attached_assets/generated_images/category-history.jpg";
  else if (route.category.includes("Nature") || route.category.includes("Coastline")) bgImage = "/attached_assets/generated_images/category-nature.jpg";
  else if (route.category.includes("Villages")) bgImage = "/attached_assets/generated_images/about-bg.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className={cn("h-full", className)}
    >
      <Link href={`/routes/${route.slug}`}>
        <Card className="h-full overflow-hidden border-border/50 group cursor-pointer hover:border-primary/30 transition-all duration-500 bg-card hover:shadow-xl hover:shadow-primary/5 rounded-xl">
          <div className="relative h-48 overflow-hidden bg-muted">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
              {route.category.slice(0, 2).map((cat) => (
                <Badge key={cat} variant="secondary" className="bg-background/90 text-foreground backdrop-blur-sm hover:bg-background border-none">
                  {cat}
                </Badge>
              ))}
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <div className="bg-primary p-2 rounded-full shadow-lg shadow-black/20">
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors">
              {route.title}
            </CardTitle>
            <CardDescription className="line-clamp-2 text-foreground/70 font-medium">
              {route.tagline}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 text-sm text-foreground/70 border-t border-border/50 pt-4">
              <div className="flex flex-col items-center gap-1 text-center">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-xs truncate w-full" title={route.duration}>{route.duration.split(' ')[0]}</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center border-x border-border/50">
                <Map className="w-4 h-4 text-accent" />
                <span className="text-xs">{route.distanceKm} km</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-xs">{route.difficulty}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
