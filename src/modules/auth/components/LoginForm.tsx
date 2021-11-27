/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { navigate } from '@reach/router';
import { Routes } from 'models';
import { useDispatch } from 'react-redux';
import { Card } from 'components';
import {
  signInWithEmailPassword,
  signInWithGoogle,
  SignUpInData,
  signUpWithEmailPassword,
  sendPasswordReset,
  logout,
  autoLogin,
} from 'modules/auth';
import React, { useRef } from 'react';
import classes from './LoginForm.module.css';
import googleSign from '../../../assets/googleSign.png';

export const LoginForm: React.FC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  autoLogin();
  const dispatch = useDispatch();
  const handleSignIn = () => {
    dispatch(signInWithGoogle());
  };

  const signUpHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current?.value as string;
    const enteredPassword = passwordInputRef.current?.value as string;

    const registerData: SignUpInData = {
      email: enteredEmail,
      password: enteredPassword,
    };
    console.log(registerData);
    dispatch(signUpWithEmailPassword(registerData));
  };

  const signInHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current?.value as string;
    const enteredPassword = passwordInputRef.current?.value as string;

    const loginData: SignUpInData = {
      email: enteredEmail,
      password: enteredPassword,
    };
    console.log(loginData);
    dispatch(signInWithEmailPassword(loginData));
  };

  const passwordResetHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current?.value as string;
    const passwordReset: SignUpInData = {
      email: enteredEmail,
      password: '',
    };
    dispatch(sendPasswordReset(passwordReset));
  };

  const signOutHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(logout());
  };
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <div className={classes.slika}>
            <img
              onClick={handleSignIn}
              src={googleSign}
              alt="Nema slike"
              width="200"
            />
          </div>
          <button type="submit" onClick={signInHandler}>
            Login
          </button>
          <button type="submit" onClick={signUpHandler}>
            Register
          </button>
          <button type="submit" onClick={passwordResetHandler}>
            Forgot Password
          </button>
          <button type="submit" onClick={signOutHandler}>
            Logout
          </button>
        </div>
      </form>
    </Card>
  );
};
