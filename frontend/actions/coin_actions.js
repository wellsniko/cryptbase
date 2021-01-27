import * as APIUtil from '../util/coin_api_util';

export const RECEIVE_COINS = 'RECEIVE_COINS';
export const RECEIVE_COIN = 'RECEIVE_COIN';
export const RECEIVE_HISTORICAL_PRICES = 'RECEIVE_HISTORICAL_PRICES';
export const RECEIVE_BITCOIN_PRICES = 'RECEIVE_BITCOIN_PRICES';
export const RECEIVE_ETHEREUM_PRICES = 'RECEIVE_ETHEREUM_PRICES';
export const RECEIVE_RIPPLE_PRICES = 'RECEIVE_RIPPLE_PRICES';
export const RECEIVE_BITCOIN_CASH_PRICES = 'RECEIVE_BITCOIN_CASH_PRICES';
export const RECEIVE_LITECOIN_PRICES = 'RECEIVE_LITECOIN_PRICES';
export const RECEIVE_STELLAR_PRICES = 'RECEIVE_STELLAR_PRICES';
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




export const receiveBitcoinPrices = data => ({
  type: RECEIVE_BITCOIN_PRICES,
  data
})

export const receiveEthereumPrices = data => ({
  type: RECEIVE_ETHEREUM_PRICES,
  data
})

export const receiveRipplePrices = data => ({
  type: RECEIVE_RIPPLE_PRICES,
  data
})

export const receiveBitcoinCashPrices = data => ({
  type: RECEIVE_BITCOIN_CASH_PRICES,
  data
})

export const receiveLitecoinPrices = data => ({
  type: RECEIVE_LITECOIN_PRICES,
  data
})


export const receiveStellarPrices = data => ({
  type: RECEIVE_STELLAR_PRICES,
  data
})




export const fetchCoins = () => dispatch => (
  APIUtil.fetchCoins()
  .then(coins => dispatch(receiveCoins(coins)))  //coins.coins
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
  )})
);



export const fetchCoin24hrData = id => dispatch => (
  APIUtil.fetchCoin24hrData(id)
  .then(data=> (dispatch(receiveHistoricalPrices(data))
  ))
);




export const fetchBitcoinHistory = (id) => dispatch => (
  APIUtil.fetchCoin24hrData(id)
  .then(data => (dispatch(receiveBitcoinPrices(data))
  ))
);

export const fetchEthereumHistory = (id) => dispatch => (
  APIUtil.fetchCoin24hrData(id)
  .then(data => (dispatch(receiveEthereumPrices(data))
  ))
);

export const fetchRippleHistory = (id) => dispatch => (
  APIUtil.fetchCoin24hrData(id)
  .then(data => (dispatch(receiveRipplePrices(data))
  ))
);

export const fetchBitcoinCashHistory = (id) => dispatch => (
  APIUtil.fetchCoin24hrData(id)
  .then(data => (dispatch(receiveBitcoinCashPrices(data))
  ))
);

export const fetchLitecoinHistory = (id) => dispatch => (
  APIUtil.fetchCoin24hrData(id)
  .then(data => (dispatch(receiveLitecoinPrices(data))
  ))
);


export const fetchStellarHistory = (id) => dispatch => (
  APIUtil.fetchCoin24hrData(id)
  .then(data => (dispatch(receiveStellarPrices(data))
  ))
);


