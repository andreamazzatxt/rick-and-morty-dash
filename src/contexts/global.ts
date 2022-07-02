import { Favourite } from "./../types/global";
import { createContext, ReactNode } from "react";

type GlobalContexType = {
  favourites?: Favourite[];
  addFavourite?: (favourite: Favourite) => void;
  removeFavourite?: (id: number) => void;
};

export const GlobalContext = createContext<GlobalContexType>({});