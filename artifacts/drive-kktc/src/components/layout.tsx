import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Instagram, Twitter, Compass, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/explore", label: "Explore" },
    { href: "/routes", label: "All Routes" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 print-hidden",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4 shadow-sm"
          : "bg-background/40 backdrop-blur-sm py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Compass className="w-6 h-6 text-primary transition-transform group-hover:rotate-45" />
          <span className="font-serif font-semibold text-xl tracking-tight text-foreground">
            Drive KKTC
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors",
                location.startsWith(link.href)
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="h-4 w-px bg-border"></div>
          <Link
            href="/routes?saved=true"
            className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1.5 text-sm font-medium"
            title="My Saved Routes"
          >
            <Heart className="w-4 h-4" /> Saved
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-background flex flex-col pt-6 px-4"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-2">
                <Compass className="w-6 h-6 text-primary" />
                <span className="font-serif font-semibold text-xl">Drive KKTC</span>
              </div>
              <button
                className="p-2 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 items-center">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-serif transition-colors",
                    location.startsWith(link.href)
                      ? "text-primary"
                      : "text-foreground/70"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px w-12 bg-border my-2"></div>
              <Link
                href="/routes?saved=true"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-foreground/70 transition-colors flex items-center gap-2"
              >
                <Heart className="w-5 h-5" /> Saved Routes
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 mt-auto print-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <Compass className="w-6 h-6 text-accent" />
              <span className="font-serif font-semibold text-xl tracking-tight">
                Drive KKTC
              </span>
            </Link>
            <p className="text-background/70 max-w-sm text-sm">
              Curated self-drive itineraries for exploring Northern Cyprus. 
              Discover forgotten kingdoms, hidden coves, and quiet villages.
            </p>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4 text-accent">Explore</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/explore" className="hover:text-background transition-colors">Thematic Collections</Link></li>
              <li><Link href="/routes" className="hover:text-background transition-colors">All Routes</Link></li>
              <li><Link href="/routes/forgotten-kingdoms" className="hover:text-background transition-colors">Forgotten Kingdoms</Link></li>
              <li><Link href="/routes/hidden-coastline" className="hover:text-background transition-colors">Hidden Coastline</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4 text-accent">Connect</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/about" className="hover:text-background transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-background transition-colors">Contact</Link></li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Drive KKTC. All rights reserved.</p>
          <p>Designed for the unhurried traveler.</p>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
