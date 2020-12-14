// export const fetchCoins = () => (
//     $.ajax({
//         url: '/api/coins',
//         method: 'GET',
//     })
// )


// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false

export const fetchCoinPriceData = (id) => (
    $.ajax({
        method: 'GET',
        url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    })
)


// export const fetchCoinPriceData = (coinId) => (
//     $.ajax({
//         method: 'GET',
//         url: `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false`
//     })
// )

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

// curl -X GET "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false" -H "accept: application/json"



export const fetchCoins = () => (
    $.ajax({
        url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&${supportedCoins.join('%2')}&order=market_cap_desc&per_page=30&page=1&sparkline=false`,
        method: 'GET',
    })
)

// .then(coins => coins.map(coin => (
//         {[coin.id]:coin}
//     )))



