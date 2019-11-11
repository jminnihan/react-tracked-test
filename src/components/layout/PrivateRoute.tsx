
import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route } from 'react-router-dom';
import { useTrackedState } from '../../store/store';

const renderMergedProps = (component: FunctionComponent<any>, ...props: any) => {
  const finalProps = Object.assign({}, ...props);
  return (
    React.createElement(component, finalProps)
  );
};

export const PrivateRoute = ({ component, ...rest }: any) => {
  const globalState = useTrackedState();
  console.log('PrivateRoute - globalState.userAuthorized = '+ globalState.userAuthorized);
  if (globalState.userAuthorized) {
    console.log('PrivateRoute - User was authorized, rendering Route.');
    return (
      <Route {...rest} render={(routeProps: RouteComponentProps) => {
        return renderMergedProps(component, routeProps, rest)
      }} />
    )
  } else {
    console.log('PrivateRoute - User was NOT authorized, redirecting to LoginPage.');
    return (<Redirect to='/login'/>);
  }
};
