import {NewMeetupForm} from 'components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
interface Meetup {
  title: string;
  image: string;
  address: string;
  description: string;
}
export const NewMeetup: React.FC = () => {
  const history = useHistory();
  const addMeetupHandler = (meetupData: Meetup) => {
    axios
      .post(
        'https://meetups-react-typescript-default-rtdb.firebaseio.com/meetups.json',
        meetupData,
      )
      .then(() => {
        history.push('/');
      });
  };
  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
  );
};

