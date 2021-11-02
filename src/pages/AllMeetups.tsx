import MeetupList from '../components/meetups/MeetupList';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

const AllMeetups: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadedMeetups, setLoadedMeetups] = useState<Meetup[]>([]);

  useEffect(() => {
    setIsLoading(true);
    axios
    .get(
      'https://meetups-react-typescript-default-rtdb.firebaseio.com/meetups.json',
    )
    .then((response) => {
      const meetups = [];
      for(const key in response.data){
        const meetup: Meetup = {
          id: key,
          ...response.data[key]
        };
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
      console.log(response.data);
    });

  }, []);

  
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups}></MeetupList>
    </section>
  );
};

export default AllMeetups;
