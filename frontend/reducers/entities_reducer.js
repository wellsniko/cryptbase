import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import CoinsReducer from './coins_reducer'
import CoinReducer from './coin_reducer'
import WatchlistReducer from './watchlist_reducer'

export default combineReducers({
  users: usersReducer,
  coins: CoinsReducer,
  coin: CoinReducer,
  watchlistReducer: WatchlistReducer
});
