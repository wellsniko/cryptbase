import {
  RECEIVE_SESSION_ERRORS,
  REMOVE_ERRORS
} from '../actions/session_actions';
import {RECEIVE_ORDER_ERRORS} from '../actions/trading_actions'

const sessionErrorsReducer= (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_ORDER_ERRORS:
      return action.errors;
    case REMOVE_ERRORS:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
