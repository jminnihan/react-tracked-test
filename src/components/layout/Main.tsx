
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import { Link } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import NotFoundPage from '../../pages/NotFoundPage';
import { PrivateRoute } from './PrivateRoute';
import React, { ReactNode } from 'react';
//import { useTrackedState } from '../../store/store';
//import { User } from '../../store/auth/types';


type MainProps = {
  children?: ReactNode,
};

// @ts-ignore
const Main: React.FC = (props: MainProps) => {
  //const dispatch = useDispatch();
  //const globalState = useTrackedState();
  const { children } = props;

  // const setNewLocation = (path: string) => {
  //   let currentLocation = window.location.origin;
  //   return currentLocation + path;
  // };

  console.log('Main - Displaying Main component...');

  // check to see if the user does not needs to login
  // non-logged in users are routed automatically to /login via the <PrivateRoute> component.
  // if (!globalState.userAuthorized) {
  //   const idToken: string | null = globalState.idToken ? globalState.idToken : getIdTokenFromLocalStorage();
  //   if (idToken) {
  //     // the user already has a token in state or local storage, is it still valid?
  //     Log.trace('idToken found: ' + idToken, 'Main');
  //     Log.trace('validating...', 'Main');
  //     dispatch({ type: 'VALIDATE_ID_TOKEN', idToken: idToken as string });
  //   }
  //   Log.trace('idToken was notfound/null therefore user was not authorized...auto reroute to LoginPage', 'Main');
  //   // NOTE: app will automatically reroute to login here...
  // } else {
  //   Log.trace('userAuthorized was false/null therefore user was not authorized...auto reroute to LoginPage', 'Main');
  //   // NOTE: app will automatically reroute to login here...
  // }


  const renderTopNav = () => {
    return (
      <Link to={location => ({ ...location, pathname: "/courses" })} />
    );
  };

  return (
    <div className="app-view">
      <BrowserRouter forceRefresh={ false }>
        <Route render={ () => (
        <React.Fragment>
          <Switch>
            <Redirect exact from="/" to="/home"/>
            <Route path="/login" component={ LoginPage }/>
            <PrivateRoute path="/home" component={ HomePage }/>
            <Route component={ NotFoundPage }/>
          </Switch>
          { renderTopNav() }
          { children }
        </React.Fragment>
        ) }/>
      </BrowserRouter>
    </div>
  );
};

export default Main;
