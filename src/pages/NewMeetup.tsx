import NewMeetupForm from '../components/meetups/NewMeetupForm';
interface Meetup {
  title: string;
  image: string;
  address: string;
  description: string;
}
const NewMeetup: React.FC = () => {
  const addMeetupHandler = (meetupData: Meetup) => {
    console.log(meetupData);
  };
  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
  );
};

export default NewMeetup;
