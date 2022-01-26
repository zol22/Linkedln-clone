/* 
  npx create-react-app linkedln-clone --template redux
  yarn start
  sudo npm install -g firebase-tools
  firebase
  yarn add firebase
  to use the material icons: yarn add @material-ui/icons

  to use effect : yarn add react-flip-move
    In Post.js, import {forwardRef}
    Add ref and forwardRef in Post.js
    In Feed.js , add FlipMove
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* Store 
  We pass it to the top level component which is index.js to give every component under it
  access to any variable stored in redux
*/
import { store } from './app/store'; 

import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
