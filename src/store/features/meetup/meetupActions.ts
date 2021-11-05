import { createAsyncThunk } from '@reduxjs/toolkit';
import { Meetup } from './meetupSlice';

type FetchTodosError = {
    message: string;
};

export const fetchMeetups = createAsyncThunk<Meetup[]>(
    'meetups/fetch',
    async () => {
        const response = await fetch(
            'https://meetups-react-typescript-default-rtdb.firebaseio.com/meetups.json',
        );
        const data: Meetup[] = await response.json();
        console.log(data);
        return data;
    },
);
