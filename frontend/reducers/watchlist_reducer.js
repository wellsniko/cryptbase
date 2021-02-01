import {
    // RECEIVE_BITCOIN_PRICES,
    // RECEIVE_ETHEREUM_PRICES,
    // RECEIVE_RIPPLE_PRICES,
    // RECEIVE_BITCOIN_CASH_PRICES,
    // RECEIVE_LITECOIN_PRICES,
    // RECEIVE_STELLAR_PRICES,
    RECEIVE_WATCHLIST_PRICES
} from '../actions/coin_actions';


const WatchlistReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type){
    case RECEIVE_WATCHLIST_PRICES: 
        return Object.assign({}, oldState, {[action.id]:action.data})
    // case RECEIVE_ETHEREUM_PRICES:
    //   return Object.assign({}, oldState, {["ethereum"]:action.data} );
    // case RECEIVE_RIPPLE_PRICES:
    //   return Object.assign({}, oldState, {["ripple"]:action.data});
    // case RECEIVE_BITCOIN_CASH_PRICES:
    //   return Object.assign({}, oldState, {["bitcoin-cash"]:action.data});
    // case RECEIVE_LITECOIN_PRICES:
    //   return Object.assign({}, oldState, {["litecoin"]:action.data});
    // case RECEIVE_STELLAR_PRICES:
    //   return Object.assign({}, oldState, {["stellar"]:action.data});
    default:
      return oldState;
  
  }
}
export default WatchlistReducer;

