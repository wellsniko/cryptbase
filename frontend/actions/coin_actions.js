import * as APIUtil from '../util/coin_api_util';

export const RECEIVE_COINS = 'RECEIVE_COINS';
export const RECEIVE_COIN = 'RECEIVE_COIN';

export const receiveCoins = coins => ({
  type: RECEIVE_COINS,
  coins
});

export const receiveCoin = coin => ({
  type: RECEIVE_COIN,
  coin
});


export const fetchCoins = () => dispatch => (
  APIUtil.fetchCoins()
  .then(coins => dispatch(receiveCoins(coins.coins)))
);

export const fetchCoin = id => dispatch => (
  APIUtil.fetchCoin(id).then(coin=> (
    dispatch(receiveCoin(coin))
  ))
);
