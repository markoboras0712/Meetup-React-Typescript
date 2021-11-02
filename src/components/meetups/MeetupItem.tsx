import classes from './MeetupItem.module.css';
import { Card } from 'components';
import { Meetup } from 'models/meetup';

export const MeetupItem: React.FC<Meetup> = ({
  id,
  title,
  image,
  address,
  description,
}) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={description}></img>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button>To favorites</button>
        </div>
      </Card>
    </li>
  );
};
