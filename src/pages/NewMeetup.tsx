import {NewMeetupForm} from 'components';
import axios from 'axios';
import {Meetup} from '../models/meetup'
import { useHistory } from 'react-router-dom';

export const NewMeetup: React.FC = () => {
  const history = useHistory();
  const addMeetupHandler = (meetupData: Meetup) => {
    axios
      .post(
        'https://meetups-react-typescript-default-rtdb.firebaseio.com/meetups.json',
        meetupData,
      )
      .then(() => {
        history.replace('/');
      });
  };
  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
  );
};

