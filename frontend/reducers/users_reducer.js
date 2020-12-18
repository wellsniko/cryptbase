import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_ORDER_DATA} from '../actions/trading_actions'


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    // case RECEIVE_ORDER_DATA:
      
		// 	return Object.assign({}, state, { [action.currentUser.id["messages"]]: action.userData });  
		// 	// debugger
		// 	// newState[action.userData.id].wallets = action.userData.wallets;				// "overwrite" old state portfolio
		// 	// debugger
		
    default:
      return state;
  }
};

export default usersReducer;
