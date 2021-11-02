import React, { createContext, useState } from 'react';
import Meetup from '../models/meetup';

type FavoritesContextObj = {
  favorites: Meetup[];
  totalFavorites: number;
};

export const FavoritesContext = createContext<FavoritesContextObj>({
  favorites: [],
  totalFavorites: 0,
});

const FavoritesContextProvider: React.FC = (props) => {
  const [userFavorites, setUserFavorites] = useState<Meetup[]>([]);
  const context: FavoritesContextObj = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
