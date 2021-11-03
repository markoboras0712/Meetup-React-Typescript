import { Card } from 'components';
import { Meetup } from 'models/meetup';
import { MeetupsContext } from 'store/AllMeetupsContext';
import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './NewMeetupForm.module.css';

export const NewMeetupForm: React.FC = () => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const history = useHistory();
  const meetupsCtx = useContext(MeetupsContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current?.value;
    const enteredImage = imageInputRef.current?.value;
    const enteredAddress = addressInputRef.current?.value;
    const enteredDescription = descriptionInputRef.current?.value;
    if (
      enteredTitle?.trim().length === 0
      || enteredImage?.trim().length === 0
      || enteredAddress?.trim().length === 0
      || enteredDescription?.trim().length === 0
    ) {
      return;
    }

    const meetupData: Meetup = {
      id: new Date().toISOString(),
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    console.log(meetupData);
    meetupsCtx.addMeetup(meetupData);
    history.replace('/');
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
