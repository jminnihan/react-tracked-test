
import { LoginResponse, User } from './auth/types';

// The top-level state object
export type ApplicationState = {
  readonly error?: string,
  readonly idToken: string,
  readonly userAuthorized: boolean,
  readonly user?: User
}

// The top-level initial state
export const initialApplicationState: ApplicationState = {
  error: undefined,
  idToken: '',
  userAuthorized: false,
  user: {} as User
};

type SetErrorAction = { type: 'SET_ERROR', error?: string };
type LoginAction = { type: 'LOGIN', username: string, password: string };
type LoginSuccessAction = { type: 'LOGIN_SUCCESS', loginResponse: LoginResponse };
type LoginErrorAction = { type: 'LOGIN_ERROR', idToken: string | null, user: User | undefined, userAuthorized: false };
type SetCurrentUserAction = { type: 'SET_CURRENT_USER', user: User };
type SetUserAuthorizedAction = { type: 'SET_USER_AUTHORIZED', userAuthorized: boolean };

export type ApplicationAction =
  | SetErrorAction
  | LoginSuccessAction
  | LoginErrorAction
  | SetCurrentUserAction
  | SetUserAuthorizedAction

export type ApplicationAsyncAction =
  | LoginAction
