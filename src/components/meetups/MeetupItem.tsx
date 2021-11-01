import classes from './MeetupItem.module.css';

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
    </li>
  );
};

export default MeetupItem;
