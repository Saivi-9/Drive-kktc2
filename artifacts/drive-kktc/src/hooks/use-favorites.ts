import { useState, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("drivekktc-favorites");
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.every((item): item is string => typeof item === "string")) {
          setFavorites(parsed);
        }
      }
    } catch (e) {
      console.error("Failed to read favorites from localStorage", e);
    }
  }, []);

  const toggleFavorite = (routeId: string) => {
    setFavorites((prev) => {
      const newFavs = prev.includes(routeId)
        ? prev.filter((id) => id !== routeId)
        : [...prev, routeId];
      
      try {
        localStorage.setItem("drivekktc-favorites", JSON.stringify(newFavs));
      } catch (e) {
        console.error("Failed to save favorites to localStorage", e);
      }
      
      return newFavs;
    });
  };

  const isFavorite = (routeId: string) => favorites.includes(routeId);

  return { favorites, toggleFavorite, isFavorite };
}
