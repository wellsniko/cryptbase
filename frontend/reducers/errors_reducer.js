import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
// import orderErrorsReducer from "./order_errors_reducer"

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  // order: orderErrorsReducer
});

export default errorsReducer;