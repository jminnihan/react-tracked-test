
import React from 'react';
import { useTrackedState } from '../store/store';

import '../styles/HomePage.sass'

const HomePage: React.FC = () => {
  const globalState = useTrackedState();

  const renderError = (error: string) => {
    return (
      <p>{ 'An error occurred: ' + error}</p>
    );
  };

  return (
    <div className="main-view">
      <section className="home-view">
        { (globalState.error) ? renderError(globalState.error) : '' }
        <h1>Welcome to the Test!</h1>
        <p>
          This is the Home Page!.
          Has user been authorized? { globalState.userAuthorized }
        </p>
        <p>Enjoy your stay!</p>
      </section>
    </div>
  );
};

export default HomePage;
