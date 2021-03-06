import * as TradingAPIUtil from '../util/trading_api_util';

export const RECEIVE_ORDER_DATA = 'RECEIVE_ORDER_DATA';
export const RECEIVE_ORDER_ERRORS = 'RECEIVE_ORDER_ERRORS'

 
export const receiveOrderData = (orderData) => ({
    type: RECEIVE_ORDER_DATA,
    orderData
});

export const receiveOrderErrors = errors => ({
  type: RECEIVE_ORDER_ERRORS,
  errors
});


export const buyCoin = (orderParams) => dispatch => (
    TradingAPIUtil.buyCoin(orderParams)
    .then(response => dispatch(receiveOrderData(response)),
     err => (
    dispatch(receiveOrderErrors(err.responseJSON))
  )));

export const sellCoin = (orderParams) => dispatch => (
    TradingAPIUtil.sellCoin(orderParams)
    .then(response => dispatch(receiveOrderData(response)),
     err => (
    dispatch(receiveOrderErrors(err.responseJSON))
  )));







