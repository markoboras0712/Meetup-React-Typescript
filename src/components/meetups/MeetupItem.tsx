import { Card } from 'components';
import { Meetup } from 'models/meetup';
import { useContext } from 'react';
import { FavoritesContext } from 'store/FavoritesContext';
import classes from './MeetupItem.module.css';

export const MeetupItem: React.FC<Meetup> = ({
  id,
  title,
  image,
  address,
  description,
  isFavorite,
}) => {
  const favoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(id);
  const toggleFavoriteHandler = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(id);
    } else {
      favoriteCtx.addFavorite({
        id,
        title,
        image,
        address,
        description,
        isFavorite,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={description} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={toggleFavoriteHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};
