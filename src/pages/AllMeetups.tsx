import { MeetupList } from 'components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Meetup } from '../models/meetup';

export const AllMeetups: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadedMeetups, setLoadedMeetups] = useState<Meetup[]>([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        'https://meetups-react-typescript-default-rtdb.firebaseio.com/meetups.json',
      )
      .then((response) => {
        const meetups: Meetup[] = [];
        Object.keys(response.data).map((key) =>
          meetups.push({ ...response.data[key], id: key }),
        );
        setIsLoading(false);
        setLoadedMeetups(meetups);
      })
      .catch((error) => {
        console.log(error);
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
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};
