import { Meetup } from 'models';

export const checkData = (
  image: string,
  description: string,
  address: string,
  title: string,
) => {
  if (
    title?.trim().length === 0 ||
    title === undefined ||
    image?.trim().length === 0 ||
    image === undefined ||
    address?.trim().length === 0 ||
    address === undefined ||
    description?.trim().length === 0 ||
    description === undefined
  ) {
    return;
  }
  const sendData = new Meetup({
    title,
    image,
    address,
    description,
    isFavorite: false,
  });
  return sendData;
};
