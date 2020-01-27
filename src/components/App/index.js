import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Routes from '../../routes';
import Footer from '../Footer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Routes />
          <Footer />
      </div>
    </Provider>
  );
}

export default App;
