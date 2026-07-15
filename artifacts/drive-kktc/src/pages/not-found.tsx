import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center py-32 bg-background">
        <div className="container mx-auto px-4 text-center max-w-lg">
          <Compass className="w-20 h-20 mx-auto text-muted-foreground opacity-20 mb-8" />
          <h1 className="font-serif text-5xl font-bold mb-4">Off the Map</h1>
          <p className="text-xl text-muted-foreground mb-10">
            It looks like you've driven a bit too far. This page doesn't exist, but there are plenty of beautiful routes that do.
          </p>
          <Button size="lg" asChild className="rounded-full">
            <Link href="/routes">Return to Routes</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
