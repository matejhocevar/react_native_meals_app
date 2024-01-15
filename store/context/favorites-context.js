import {createContext, useState} from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {
  },
  removeFavorite: (id) => {
  },
});

const FavoritesContextProvider = ({children}) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFavoriteMealIds) => [...currentFavoriteMealIds, id])
  }

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavoriteMealIds) => currentFavoriteMealIds.filter((m) => m !== id));
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;