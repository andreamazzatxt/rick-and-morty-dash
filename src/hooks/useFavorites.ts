import { Favourite } from "./../types/global";
import { useCallback, useEffect, useState } from "react";
import { getLocal, setLocal } from "../utils/localStorage";

const FAV_KEY = "favs";

type ReturnType = {
  favourites: Favourite[];
  addFavourite: (favourite: Favourite) => void;
  removeFavourite: (id: number) => void;
};

const useFavorites = (): ReturnType => {
  const [favourites, setFavourites] = useState<Favourite[]>([]);

  const addFavourite = useCallback(
    (favourite: Favourite) => {
      if (favourites.some(({ id }) => id === favourite.id)) {
        return;
      }
      setFavourites((prev) => {
        const newFavs = [...prev, favourite];
        setLocal(FAV_KEY, newFavs);
        return newFavs;
      });
    },
    [favourites]
  );

  const removeFavourite = useCallback((id: number) => {
    setFavourites((prev) => {
      const newFavs = prev.filter((fav) => fav.id !== id);
      setLocal(FAV_KEY, newFavs);
      return newFavs;
    });
  }, []);

  useEffect(() => {
    setFavourites(getLocal(FAV_KEY));
  }, []);

  return {
    favourites,
    addFavourite,
    removeFavourite,
  };
};

export default useFavorites;
