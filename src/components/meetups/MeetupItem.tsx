import { Card } from 'components';
import { Meetup } from 'models/meetup';
import { addFavorite, removeFavorite, RootState, editMeetup } from 'store';
import { useDispatch, useSelector } from 'react-redux';
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
  const meetups = useSelector((state: RootState) => state.meetups.allMeetups);
  const currentMeetup = meetups.find((meetup) => meetup.id === id);
  const toggleFavoriteHandler = () => {
    if (currentMeetup?.isFavorite) {
      dispatch(removeFavorite(meetupData));
      dispatch(editMeetup({ ...meetupData, isFavorite: !isFavorite }));
    } else {
      dispatch(addFavorite(meetupData));
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
