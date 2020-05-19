import React from 'react';
import './styles/main.scss';
import MainPage from './pages/MainPage';

import { Provider } from 'react-redux'
import store from "./redux/store"


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;

