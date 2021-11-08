import { MeetupItem } from 'components';
import { Meetup } from 'models/meetup';
import classes from './MeetupList.module.css';

interface Props {
  meetups: Meetup[];
}

export const MeetupList: React.FC<Props> = ({ meetups }) => (
  <ul className={classes.list}>
    {meetups.map((meetup) => (
      <MeetupItem
        key={meetup.id}
        id={meetup.id}
        image={meetup.image}
        title={meetup.title}
        address={meetup.address}
        description={meetup.description}
        isFavorite={meetup.isFavorite}
      />
    ))}
  </ul>
);
