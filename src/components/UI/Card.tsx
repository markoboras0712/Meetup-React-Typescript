import classes from './Card.module.css';

export const Card: React.FC = ({children}) => {
  return <div className={classes.card}>{children}</div>;
};

