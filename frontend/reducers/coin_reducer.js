import {RECEIVE_COIN, RECEIVE_HISTORICAL_PRICES} from '../actions/coin_actions';


const CoinReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type){
  case RECEIVE_COIN: 
      return Object.assign({}, oldState, action.coin[0])
  case RECEIVE_HISTORICAL_PRICES:
    return Object.assign({}, oldState, action.data );
  default:
    return oldState;
  
  }
// };
//   switch (action.type) {
//     case RECEIVE_SESSION_ERRORS:
//       return action.errors;
//     case RECEIVE_CURRENT_USER:
//       return [];
//     case REMOVE_ERRORS:
//       return [];
//     default:
//       return state;
//   }
// };
}
export default CoinReducer;

