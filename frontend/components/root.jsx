import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";
import ReactGa from 'react-ga'
import GA from './ga.jsx'

const Root = ({ store }) => {

  return(
  <Provider store={store}>
    <HashRouter>
      { GA.init() && <GA.RouteTracker /> }
      <App />
    </HashRouter>
  </Provider>
  )
};
export default Root;
