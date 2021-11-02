import NewMeetupForm from '../components/meetups/NewMeetupForm';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
interface Meetup {
  title: string;
  image: string;
  address: string;
  description: string;
}
const NewMeetup: React.FC = () => {
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

export default NewMeetup;
