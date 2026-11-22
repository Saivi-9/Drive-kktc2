import { useEffect, useState } from "react";

export function useVisitedStops(routeId: string) {
  const key = `drivekktc-visited-${routeId.trim()}`;
  const [visited, setVisited] = useState<number[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.every((item): item is number => typeof item === "number" && Number.isInteger(item) && item >= 0)) {
          setVisited(Array.from(new Set(parsed)));
        }
      }
    } catch {
      // A private browsing session can block local storage; progress is optional.
    }
  }, [key]);

  const toggleVisited = (index: number) => {
    if (!Number.isInteger(index) || index < 0) return;
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

  const isStopVisited = (index: number) => Number.isInteger(index) && index >= 0 && visited.includes(index);

  return { visited, visitedCount: visited.length, isStopVisited, toggleVisited, clearVisited };
}
