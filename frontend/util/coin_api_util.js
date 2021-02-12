export const editWatchlist = (data) => (
  $.ajax({
    method: 'PUT',
    url: `/api/users/${data.userId}`,
    user: data
  })
);





export const fetchCoinPriceData = (id) => (
    $.ajax({
        method: 'GET',
        url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    })
)


export const fetchCoin24hrData = (id) => (
    $.ajax({
        method: 'GET',
        url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`
    })
)

const supportedCoins =[
            'usd',
            'bitcoin',
            'ethereum',
            'ripple',
            'tether',
            'litecoin',
            'bitcoin-cash',
            'chainlink',
            'cardano',
            'polkadot',
            'binancecoin',
            'stellar',
            'usd-coin',
            'bitcoin-cash-sv',
            'eos',
            'monero',
            'nem',
            'wrapped-bitcoin',
            'tron',
            'tezos',
            'okb',
            'cdai',
            'filecoin',
            'crypto-com-chain',
            'leo-token',
            'cosmos',
            'neo',
            'dai',
            'vechain',
            'aave'
]


export const fetchCoins = () => (
    $.ajax({
        url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${supportedCoins.join('%2C')}&order=market_cap_desc&per_page=30&page=1&sparkline=false`,
        method: 'GET',
    })
)

export const fetchCoinNews = (symbol) => (
    $.ajax({
        url: `https://cors-container.herokuapp.com/https://cryptopanic.com/api/v1/posts/?auth_token=62060cbf8b7979c691140501d6d2b70f8e76c1fc&currencies=${symbol}`,
        method: 'GET',
          headers:{
    'X-Requested-With': 'XMLHttpRequest'
  }
    })
)


