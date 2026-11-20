import { useEffect, useState } from "react";

export function useVisitedStops(routeId: string) {
  const key = `drivekktc-visited-${routeId}`;
  const [visited, setVisited] = useState<number[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.every((item): item is number => typeof item === "number")) {
          setVisited(parsed);
        }
      }
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

  const clearVisited = () => {
    setVisited([]);
    try { localStorage.removeItem(key); } catch { /* optional persistence */ }
  };

  return { visited, toggleVisited, clearVisited };
}
