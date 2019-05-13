import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'; // Must be camel-case or cannot be found in redux

// Seeting this up for the store instead of
// holding it within Counter.js (moving state up);
// Will be used with reducer which *can* use an initial/existing 
// state to begin
const initialState = {
    count: 0
};

// Creating reducer to be used with createStore;
// used to return existing/new state
function reducer(state = initialState, action) {
    console.log('reducer', state, action);

    return state;
}

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

// Create store from redux
const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();
