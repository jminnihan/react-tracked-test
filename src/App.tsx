import Main from './components/layout/Main';
import { Provider } from './store/store';
import React from 'react';


const App: React.FC = () => {

  return (
    <Provider>
      <Main />
    </Provider>
  );
};

export default App;
