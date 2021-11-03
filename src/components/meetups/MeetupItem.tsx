import { Card } from 'components';
import { Meetup } from 'models/meetup';
import classes from './MeetupItem.module.css';

export const MeetupItem: React.FC<Meetup> = ({
  title,
  image,
  address,
  description,
}) => (
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
        <button type="button">To favorites</button>
      </div>
    </Card>
  </li>
);
