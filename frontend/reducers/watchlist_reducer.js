import {

    RECEIVE_WATCHLIST_PRICES
} from '../actions/coin_actions';


const WatchlistReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type){
    case RECEIVE_WATCHLIST_PRICES: 
        return Object.assign({}, oldState, {[action.id]:action.data})
    default:
      return oldState;
  
  }
}
export default WatchlistReducer;

