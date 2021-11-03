import { createContext, useState, useEffect } from 'react';
import { Meetup } from 'models/meetup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

type AllMeetupsContextObj = {
  addMeetup: (meetup: Meetup) => void;
  getMeetups: () => void;
  meetups: Meetup[];
};

export const MeetupsContext = createContext<AllMeetupsContextObj>({
  addMeetup: (meetup: Meetup) => {},
  getMeetups: () => {},
  meetups: [],
});

export const MeetupsContextProvider: React.FC = ({ children }) => {
  const [allMeetups, setAllMeetups] = useState<Meetup[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const history = useHistory();
  const addMeetupHandler = (meetup: Meetup) => {
    axios
      .post(
        'https://meetups-react-typescript-default-rtdb.firebaseio.com/meetups.json',
        meetup,
      )
      .then(() => {
        console.log('dasdas');
        setAllMeetups((prevAllMeetups) => prevAllMeetups.concat(meetup));
      });
  };

  const getMeetupsHandler = () => {
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
          setAllMeetups(meetups);
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
  };

  const contextValue: AllMeetupsContextObj = {
    meetups: allMeetups,
    addMeetup: addMeetupHandler,
    getMeetups: getMeetupsHandler,
  };

  return (
    <MeetupsContext.Provider value={contextValue}>
      {children}
    </MeetupsContext.Provider>
  );
};
