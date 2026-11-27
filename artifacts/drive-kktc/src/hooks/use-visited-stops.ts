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

  const getCompletionPercentage = (totalStops: number): number => {
    if (!Number.isFinite(totalStops) || totalStops <= 0) return 0;
    return Math.min(100, Math.max(0, Math.round((visited.length / totalStops) * 100)));
  };

  const getRemainingStopsCount = (totalStops: number): number => {
    if (!Number.isFinite(totalStops) || totalStops <= 0) return 0;
    return Math.max(0, Math.floor(totalStops) - visited.length);
  };

  const isRouteCompleted = (totalStops: number): boolean => {
    if (!Number.isFinite(totalStops) || totalStops <= 0) return false;
    return visited.length >= Math.floor(totalStops);
  };

  const getNextUnvisitedStopIndex = (totalStops: number): number | null => {
    if (!Number.isFinite(totalStops) || totalStops <= 0) return null;
    const count = Math.floor(totalStops);
    for (let i = 0; i < count; i++) {
      if (!visited.includes(i)) {
        return i;
      }
    }
    return null;
  };

  const getUnvisitedStopIndices = (totalStops: number): number[] => {
    if (!Number.isFinite(totalStops) || totalStops <= 0) return [];
    const count = Math.floor(totalStops);
    const remaining: number[] = [];
    for (let i = 0; i < count; i++) {
      if (!visited.includes(i)) {
        remaining.push(i);
      }
    }
    return remaining;
  };

  return {
    visited,
    visitedCount: visited.length,
    hasStartedRoute: visited.length > 0,
    isStopVisited,
    getCompletionPercentage,
    getRemainingStopsCount,
    getNextUnvisitedStopIndex,
    getUnvisitedStopIndices,
    isRouteCompleted,
    toggleVisited,
    clearVisited,
  };
}
