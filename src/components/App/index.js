import React from 'react';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../store';
import Routes from '../../routes';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Header />
          <Routes />
      </div>
    </Provider>
  );
}

export default App;
