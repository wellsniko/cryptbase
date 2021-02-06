import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser 
}
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
if (process.env.NODE_ENV !== 'production') {
    const {whyDidYouUpdate} = require('why-did-you-update')
    whyDidYouUpdate(React)
}
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store = {store}/>, root);
});

