import * as APIUtil from '../util/coin_api_util';

export const RECEIVE_COINS = 'RECEIVE_COINS';
export const RECEIVE_COIN = 'RECEIVE_COIN';
export const RECEIVE_HISTORICAL_PRICES = 'RECEIVE_HISTORICAL_PRICES';
export const RECEIVE_WATCHLIST_PRICES = 'RECEIVE_WATCHLIST_PRICES'
export const RECEIVE_COIN_NEWS = "RECEIVE_COIN_NEWS"


export const receiveCoins = coins => ({
  type: RECEIVE_COINS,
  coins
});

export const receiveCoin = coin => ({
  type: RECEIVE_COIN,
  coin
});

export const receiveHistoricalPrices = data => ({
  type: RECEIVE_HISTORICAL_PRICES,
  data
})

export const receiveCoinNews = news => ({
  type: RECEIVE_COIN_NEWS,
  news
})




export const receiveWatchlistPrices = (data, id) => ({
  type: RECEIVE_WATCHLIST_PRICES,
  data,
  id
})



export const fetchCoins = () => dispatch => (
  APIUtil.fetchCoins()
  .then(coins => dispatch(receiveCoins(coins)))  
);

export const fetchCoinPriceData = id => dispatch => (
  APIUtil.fetchCoinPriceData(id)
  .then(coin=> (dispatch(receiveCoin(coin))
  ))
);

export const fetchCoinNews = symbol => dispatch => (
  APIUtil.fetchCoinNews(symbol)
  .then(news=> 
   
    {
    return (
      dispatch(receiveCoinNews(news))
  )}, err => console.log("API limit reached"))
);







export const fetchCoinWatchlistData = id => dispatch => (
  APIUtil.fetchCoin24hrData(id)
  .then(data=> (dispatch(receiveWatchlistPrices(data, id))
  ))
);







export const fetchCoin24hrData = id => dispatch => (
  APIUtil.fetchCoin24hrData(id)
  .then(data=> (dispatch(receiveHistoricalPrices(data))
  ))
);




