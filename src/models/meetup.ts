/* eslint-disable @typescript-eslint/no-shadow */
export interface Meetup {
  id?: string;
  title: string;
  image: string;
  address: string;
  description: string;
  isFavorite: boolean;
}

export class Meetup {
  constructor(Meetup: Meetup) {
    this.id = Meetup.id;
    this.title = Meetup.title;
    this.image = Meetup.image;
    this.address = Meetup.address;
    this.description = Meetup.description;
    this.isFavorite = Meetup.isFavorite;
  }
}
