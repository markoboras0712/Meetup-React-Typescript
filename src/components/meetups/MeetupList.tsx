import classes from './MeetupList.module.css';
import {MeetupItem} from 'components'

interface Meetups {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

interface Props {
  meetups: Meetups[];
}

export const MeetupList: React.FC<Props> = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        ></MeetupItem>
      ))}
    </ul>
  );
};

