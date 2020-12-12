// export const fetchCoins = () => (
//     $.ajax({
//         url: '/api/coins',
//         method: 'GET',
//     })
// )

export const fetchCoin = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/coins/${id}`
    })
)

export const fetchCoins = () => (
    $.ajax({
        url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        method: 'GET',
    })
)