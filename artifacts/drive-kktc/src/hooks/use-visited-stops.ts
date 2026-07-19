import { useEffect, useState } from "react";

export function useVisitedStops(routeId: string) {
  const key = `drivekktc-visited-${routeId}`;
  const [visited, setVisited] = useState<number[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) setVisited(JSON.parse(saved));
    } catch {
      // A private browsing session can block local storage; progress is optional.
    }
  }, [key]);

  const toggleVisited = (index: number) => {
    setVisited((current) => {
      const next = current.includes(index) ? current.filter((item) => item !== index) : [...current, index];
      try { localStorage.setItem(key, JSON.stringify(next)); } catch { /* optional persistence */ }
      return next;
    });
  };

  return { visited, toggleVisited };
}
