
import { ApplicationAction, ApplicationState } from '../index';
import { Dispatch } from 'react';
import { LoginResponse, User } from './types';
import { setIdTokenInLocalStorage, setLastAuthUserInLocalStorage } from '../../utils/localStorage';
import * as UserService from './service';

export const login = async (
  prevState: ApplicationState,
  dispatch: Dispatch<ApplicationAction>,
  username: string,
  password: string
) => {
  try {
    return await UserService.login(username, password);
  } catch (error) {
    throw error;
  }
};

export const loginSuccess = (
  prevState: ApplicationState,
  loginResponse: LoginResponse,
) => {
    setLastAuthUserInLocalStorage(null, loginResponse.user.username);
    setIdTokenInLocalStorage(null, loginResponse.idToken);
    return {
      ...prevState,
      idToken: loginResponse.idToken,
      user: loginResponse.user,
      userAuthorized: true
    };
};

export const loginError = (
  prevState: ApplicationState,
  idToken: string | null,
  user: User | undefined,
  userAuthorized: boolean
) => {
  return {
    ...prevState,
    idToken: idToken,
    user: user,
    userAuthorized: userAuthorized
  };
};

export const setCurrentUser = (
  prevState: ApplicationState,
  user: User
) => {
  return {
    ...prevState,
    user: user
  };
};

export const setUserAuthorized = (
  prevState: ApplicationState,
  userAuthorized: boolean
) => {
  return {
    ...prevState,
    userAuthorized: userAuthorized
  };
};

export const setError = (
  prevState: ApplicationState,
  error?: string
) => {
  return { ...prevState, error };
};

