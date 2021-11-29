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
        <div className={classes.form__control}>
          <label htmlFor="title" className={classes.form__label}>
            Meetup Title
          </label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            className={classes.form__input}
          />
        </div>
        <div className={classes.form__control}>
          <label htmlFor="image" className={classes.form__label}>
            Meetup Image
          </label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            className={classes.form__input}
          />
        </div>
        <div className={classes.form__control}>
          <label htmlFor="address" className={classes.form__label}>
            Meetup Address
          </label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
            className={classes.form__input}
          />
        </div>
        <div className={classes.form__control}>
          <label htmlFor="description" className={classes.form__label}>
            Meetup Description
          </label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
            className={classes.form__textarea}
          />
        </div>
        <div className={classes.form__actions}>
          <button type="submit" className={classes.form__button}>
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
};
