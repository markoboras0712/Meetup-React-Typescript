import { NewMeetupForm } from 'modules/meetups';
import { PrivateAuthGuard } from 'modules/auth';

export const NewMeetup: React.FC = () => {
  return (
    <PrivateAuthGuard>
      <section>
        <h1>Add new Meetup</h1>
        <NewMeetupForm />
      </section>
    </PrivateAuthGuard>
  );
};
