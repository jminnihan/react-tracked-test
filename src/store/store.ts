
import { LoginResponse } from './auth/types';
import { ApplicationAction, ApplicationAsyncAction, ApplicationState, initialApplicationState } from './index';
import {
  login,
  loginError,
  loginSuccess,
  setCurrentUser,
  setUserAuthorized,
} from './auth/actions';
import {
  setError,
} from './layout/actions';
import { createContainer } from 'react-tracked';
import { Dispatch, Reducer } from 'react';
import { useReducerAsync, AsyncActionHandlers } from 'use-reducer-async';

const reducer: Reducer<ApplicationState, ApplicationAction> = (state: ApplicationState, action: ApplicationAction): any => {
  switch (action.type) {
    case 'SET_ERROR':
      console.log('store/auth/reducer for SET_ERROR - returning the error');
      return setError(state, action.error);
    case 'LOGIN_SUCCESS':
      console.log('store/auth/reducer for LOGIN_SUCCESS - returning the login success');
      return loginSuccess(state, action.loginResponse);
    case 'LOGIN_ERROR':
      console.log('store/auth/reducer for LOGIN_ERROR - returning the login error');
      return loginError(state, action.idToken, action.user, action.userAuthorized);
    case 'SET_CURRENT_USER':
      console.log('store/auth/reducer for SET_CURRENT_USER - returning the set current user');
      return setCurrentUser(state, action.user);
    case 'SET_USER_AUTHORIZED':
      console.log('store/auth/reducer for SET_USER_AUTHORIZED - returning the set user authorized ');
      return setUserAuthorized(state, action.userAuthorized);
    default:
      throw new Error('unknown action type');
  }
};

const asyncActionHandlers: AsyncActionHandlers<
  Reducer<ApplicationState, ApplicationAction>,
  ApplicationAsyncAction
> = {
  LOGIN: (dispatch: Dispatch<ApplicationAction>, getState) => async action => {
    const prevState = getState();
    await login(prevState, dispatch, action.username, action.password)
      .then((response: any) => {
        console.log('store/auth/asyncActionHandler for LOGIN - dispatching LOGIN_SUCCESS');
        dispatch({ type: 'LOGIN_SUCCESS', loginResponse: response as LoginResponse });
      })
      .catch((error) => {
        console.log('store/auth/asyncActionHandler for LOGIN - dispatching LOGIN_ERROR');
        dispatch({ type: 'LOGIN_ERROR', idToken: null, user: undefined, userAuthorized: false });
        dispatch({ type: 'SET_ERROR', error: error.message });
      });
  }
};

const useValue = () => useReducerAsync<
  Reducer<ApplicationState, ApplicationAction>,
  ApplicationAsyncAction,
  ApplicationAsyncAction | ApplicationAction
>(reducer, initialApplicationState, asyncActionHandlers);

export const {
  Provider,
  useTrackedState,
  useUpdate: useDispatch
} = createContainer(useValue);
