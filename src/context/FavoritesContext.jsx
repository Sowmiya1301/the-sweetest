import { createContext, useState } from "react";
//  creates the shared container useState stores shared data

// emptycontainer
export const FavoritesContext = createContext();

// shared state and provide it to all components inside it.
export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function toggleFavorite(id) {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter((item) => item !== id));
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  }
  return (
    // shares two things with every component
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
