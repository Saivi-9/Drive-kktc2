import { useState, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("drivekktc-favorites");
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.every((item): item is string => typeof item === "string")) {
          setFavorites(Array.from(new Set(parsed.map((id) => id.trim()).filter(Boolean))));
        }
      }
    } catch (e) {
      console.error("Failed to read favorites from localStorage", e);
    }
  }, []);

  const toggleFavorite = (routeId: string) => {
    const normalizedId = routeId.trim();
    if (!normalizedId) return;
    setFavorites((prev) => {
      const newFavs = prev.includes(normalizedId)
        ? prev.filter((id) => id !== normalizedId)
        : [...prev, normalizedId];
      
      try {
        localStorage.setItem("drivekktc-favorites", JSON.stringify(newFavs));
      } catch (e) {
        console.error("Failed to save favorites to localStorage", e);
      }
      
      return newFavs;
    });
  };

  const clearFavorites = () => {
    setFavorites([]);
    try {
      localStorage.removeItem("drivekktc-favorites");
    } catch (e) {
      console.error("Failed to clear favorites from localStorage", e);
    }
  };

  const isFavorite = (routeId: string) => favorites.includes(routeId.trim());

  return { favorites, favoriteCount: favorites.length, toggleFavorite, clearFavorites, isFavorite };
}
