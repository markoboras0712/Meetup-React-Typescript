import { Card } from 'components';
import { useDispatch } from 'react-redux';
import { Meetup, Routes } from 'models';
import { useRef } from 'react';
import { navigate } from '@reach/router';
import { fetchMeetups, postMeetup } from 'modules/meetups/redux';
import { checkData } from 'modules/meetups';
import classes from './NewMeetupForm.module.css';

export const NewMeetupForm: React.FC = () => {
  const dispatch = useDispatch();
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current?.value;
    const enteredImage = imageInputRef.current?.value;
    const enteredAddress = addressInputRef.current?.value;
    const enteredDescription = descriptionInputRef.current?.value;

    const sendData = checkData(
      enteredImage as string,
      enteredDescription as string,
      enteredAddress as string,
      enteredTitle as string,
    );
    dispatch(postMeetup(sendData as Meetup));
    navigate(Routes.Home);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
