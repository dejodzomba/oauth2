import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

//We will use the createStore helper to create a new instance of our Redux store
const store = createStore(reducers, {}, applyMiddleware()); //this is Redux store

//To Provider pass store, Children between provider tag
//Provider is a react component that knows how to read changes from our Redux store
//Any time the Redux store gets some new state produced inside of it, the Provide will inform all of the children components
//So essentially everything that the App renders, that some new state is avvailable and it wiil update all the differents components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
