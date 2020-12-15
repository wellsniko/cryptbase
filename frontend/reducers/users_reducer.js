import { RECEIVE_CURRENT_USER, RECEIVE_ORDER_DATA } from '../actions/session_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_ORDER_DATA:
      
			// newState = merge({}, oldState, { [action.orderData.id]: action.userData });  {3: {bitcoin: {4: }
			// // debugger
			// // newState[action.userData.id].wallets = action.userData.wallets;				// "overwrite" old state portfolio
			// // debugger
			// return newState;
    default:
      return state;
  }
};

export default usersReducer;
