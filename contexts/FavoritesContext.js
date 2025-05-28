import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();


export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);


  function toggleFavorite(item) {
    setFavorites(prev => {
    
      if (prev.find(f => f.id === item.id)) {
        return prev.filter(f => f.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
