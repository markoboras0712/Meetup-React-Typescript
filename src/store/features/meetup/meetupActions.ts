import { createAsyncThunk } from '@reduxjs/toolkit';
import { Meetup } from './meetupSlice';

type FetchTodosError = {
    message: string;
};

export const fetchMeetups = createAsyncThunk<
    Meetup[],
    { rejectValue: FetchTodosError }
>('meetups/fetch', async () => {
    const response = await fetch(
        'https://meetups-react-typescript-default-rtdb.firebaseio.com/',
    );
    const data: Meetup[] = await response.json();
    console.log(data);
    return data;
});
