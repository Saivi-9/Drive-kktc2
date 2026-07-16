import { useState, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("drivekktc-favorites");
      if (stored) {
        setFavorites(JSON.parse(stored));
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
