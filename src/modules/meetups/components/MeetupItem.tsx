import { Card } from 'components';
import { Meetup } from 'models/meetup';
import { Link } from '@reach/router';
import { toggleFavorite, editMeetup, useMeetups } from 'modules/meetups';
import { useDispatch } from 'react-redux';
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
  const meetupData = new Meetup({
    id,
    title,
    image,
    address,
    description,
    isFavorite,
  });
  const meetups = useMeetups();
  const currentMeetup = meetups.find((meetup) => meetup.id === id);
  const toggleFavoriteHandler = () => {
    dispatch(toggleFavorite(meetupData));
    dispatch(editMeetup({ ...meetupData, isFavorite: !isFavorite }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <Link to={`/meetups/${id}`}>
          <div className={classes.item__imgblock}>
            <img
              src={image}
              alt={description}
              className={classes.item__img}
            />
          </div>
        </Link>
        <div className={classes.item__content}>
          <h3 className={classes.item__h3content}>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.item__actions}>
          <button type="button" onClick={toggleFavoriteHandler} className={classes.item__button}>
            {currentMeetup?.isFavorite
              ? 'Remove from Favorites'
              : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};
