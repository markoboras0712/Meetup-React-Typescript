import classes from './MeetupItem.module.css';
import {Card} from 'components'

interface Props {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

 export const MeetupItem: React.FC<Props> = ({id,title,image,address,description}) => {
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
