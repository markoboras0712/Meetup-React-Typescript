import { Card } from 'components';
import { Meetup } from 'models/meetup';
import { useContext } from 'react';
import {
  addFavorite,
  removeFavorite,
} from 'store/features/meetup/allMeetupSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { editMeetup, fetchMeetups } from 'store/features/meetup/allMeetupSlice';
import classes from './MeetupItem.module.css';

export const MeetupItem: React.FC<Meetup> = ({
  id,
  title,
  image,
  address,
  description,
  isFavorite,
}) => {
  const dispatch = useDispatch();
  const meetupData: Meetup = {
    id,
    title,
    image,
    address,
    description,
    isFavorite,
  };
  const meetups = useSelector((state: RootState) => state.meetups);
  const currentMeetup = meetups.allMeetups.find((meetup) => meetup.id === id);
  const toggleFavoriteHandler = () => {
    if (currentMeetup?.isFavorite) {
      dispatch(removeFavorite({ id }));
      dispatch(editMeetup({ ...meetupData, isFavorite: !isFavorite }));
    } else {
      dispatch(addFavorite({ id }));
      dispatch(editMeetup({ ...meetupData, isFavorite: !isFavorite }));
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
            {currentMeetup?.isFavorite
              ? 'Remove from Favorites'
              : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};
