import classes from './NewMeetupForm.module.css';
import { Card } from 'components';
import { useRef } from 'react';
import { Meetup } from 'models/meetup';

interface Props {
  onAddMeetup: (meetup: Meetup) => void;
}

export const NewMeetupForm: React.FC<Props> = ({ onAddMeetup }) => {
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
    if (
      enteredTitle?.trim().length === 0 ||
      enteredImage?.trim().length === 0 ||
      enteredAddress?.trim().length === 0 ||
      enteredDescription?.trim().length === 0
    ) {
      return;
    }

    const meetupData: Meetup = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
      id: new Date().toISOString(),
    };
    onAddMeetup(meetupData);
    console.log(meetupData);
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
