import { Card } from 'components';
import { useDispatch } from 'react-redux';
import { Meetup } from 'models/meetup';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchMeetups, postMeetup } from 'modules/meetups/redux';
import classes from './NewMeetupForm.module.css';

export const NewMeetupForm: React.FC = () => {
  const dispatch = useDispatch();
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const history = useHistory();
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current?.value;
    const enteredImage = imageInputRef.current?.value;
    const enteredAddress = addressInputRef.current?.value;
    const enteredDescription = descriptionInputRef.current?.value;
    if (
      enteredTitle?.trim().length === 0 ||
      enteredTitle === undefined ||
      enteredImage?.trim().length === 0 ||
      enteredImage === undefined ||
      enteredAddress?.trim().length === 0 ||
      enteredAddress === undefined ||
      enteredDescription?.trim().length === 0 ||
      enteredDescription === undefined
    ) {
      return;
    }

    const sendData = new Meetup({
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
      isFavorite: false,
    });
    dispatch(postMeetup(sendData));
    dispatch(fetchMeetups());
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
