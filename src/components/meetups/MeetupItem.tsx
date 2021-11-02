import classes from './MeetupItem.module.css';
import Card from '../UI/Card';

interface FuncProps {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

const MeetupItem: React.FC<FuncProps> = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.description}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
