export interface Meetup {
  id?: string;
  title: string;
  image: string;
  address: string;
  description: string;
  isFavorite: boolean;
}

export class Meetup {
  constructor({ id, title, image, address, description, isFavorite }: Meetup) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.address = address;
    this.description = description;
    this.isFavorite = isFavorite;
  }
}

export interface AllMeetups {
  allMeetups: Meetup[];
  meetup: Meetup;
  loading: boolean;
  error: string | unknown;
}
