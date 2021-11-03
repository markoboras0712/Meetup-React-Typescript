import { createContext, useState } from 'react';
import { Meetup } from 'models/meetup';

type FavoritesContextObj = {
  favorites: Meetup[];
  totalFavorites: number;
  addFavorite: (favoriteMeetup: Meetup) => void;
  removeFavorite: (meetupId: string) => void;
  itemIsFavorite: (meetupId: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextObj>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup: Meetup) => {},
  removeFavorite: (meetupId: string) => {},
  itemIsFavorite: (meetupId: string) => {},
});

export const FavoritesContextProvider: React.FC = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState<Meetup[]>([]);

  const addFavoriteHandler = (favoriteMeetup: Meetup) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoriteHandler = (meetupId: string) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = (meetupId: string) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };
  const contextValue: FavoritesContextObj = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};
