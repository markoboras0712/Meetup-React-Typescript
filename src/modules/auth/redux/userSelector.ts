import { createSelector } from 'reselect';
import { RootState } from 'modules/meetups';
import { UserData } from 'models';

export const userSelector: (state: RootState) => UserData = (
  state: RootState,
) => state.user;

export const displayNameSelector = createSelector(userSelector, (user) => {
  return user.displayName;
});
export const emailSelector = createSelector(userSelector, (user) => {
  return user.email;
});

export const userPhotoSelector = createSelector(userSelector, (user) => {
  return user.userPhoto;
});

export const isUserAuthenticatedSelector = createSelector(
  userSelector,
  (user) => {
    return user.authenticated;
  },
);

export const errorSelector = createSelector(userSelector, (user) => {
  return user.error;
});

export const refreshTokenSelector = createSelector(userSelector, (user) => {
  return user.refreshToken;
});

export const idSelector = createSelector(userSelector, (user) => {
  return user.id;
});
