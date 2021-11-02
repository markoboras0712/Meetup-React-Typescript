import { MeetupList } from 'components';
import { Meetup } from '../models/meetup';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
        console.log(response.data);
        const meetups = [];
        for (const key in response.data) {
          const meetup: Meetup = {
            id: key,
            ...response.data[key],
          };
          meetups.push(meetup);
        }
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
      <MeetupList meetups={loadedMeetups}></MeetupList>
    </section>
  );
};
