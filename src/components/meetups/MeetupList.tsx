import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

interface Meetups {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

interface FuncProps {
  meetups: Meetups[];
}

const MeetupList: React.FC<FuncProps> = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          ></MeetupItem>
        );
      })}
    </ul>
  );
};

export default MeetupList;
