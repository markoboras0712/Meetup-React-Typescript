import { replaceMeetups } from 'store/features/meetup/meetupSlice';

export const fetchMeetupData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://meetups-react-typescript-default-rtdb.firebaseio.com/meetups.json',
      );
      if (!response.ok) {
        throw new Error('Could not fetch data');
      }

      const data = await response.json();
      console.log(data);
      return data;
    };

    try {
      const meetupData = await fetchData();
      console.log(meetupData);
      dispatch(
        replaceMeetups({
          meetups: meetupData.meetups || [],
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };
};
