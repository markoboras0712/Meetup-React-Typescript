class Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;

  constructor(
    meetupTitle: string,
    meetupImage: string,
    meetupAddress: string,
    meetupDescription: string,
  ) {
    this.title = meetupTitle;
    this.image = meetupImage;
    this.address = meetupAddress;
    this.description = meetupDescription;
    this.id = new Date().toISOString();
  }
}

export default Meetup;
