import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ShowDog from './components/ShowDog';

function RandomPictDog() {
  return (
    <Provider store={store}>
      <ShowDog/>
    </Provider>
  );
}

export default RandomPictDog;