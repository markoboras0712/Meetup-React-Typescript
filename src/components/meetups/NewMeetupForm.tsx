import classes from './NewMeetupForm.module.css';
import {Card} from '../UI/Card';
import { useRef } from 'react';
import React from 'react';

interface Meetup {
  title: string;
  image: string;
  address: string;
  description: string;
}

interface Props{
  onAddMeetup: (meetup: Meetup) => void;
}

export const NewMeetupForm: React.FC<Props> = ({onAddMeetup}) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current!.value; // ! znamo da vrijednost nikada nece biti null
    const enteredImage = imageInputRef.current!.value;
    const enteredAddress = addressInputRef.current!.value;
    const enteredDescription = descriptionInputRef.current!.value;

    const meetupData: {
      title: string;
      image: string;
      address: string;
      description: string;
    } = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    onAddMeetup(meetupData);
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
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

