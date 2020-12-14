export const buyCoin = (orderParams) => {      
  return $.ajax({
    method: 'POST',
    url: 'api/orders',
    data: { orderParams }
  });
}



export const sellCoin = (orderParams) => {
  return $.ajax({
    method: 'POST',
    url: 'api/orders',
    data: { orderParams }
  });
}