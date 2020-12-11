export const fetchCoins = () => (
    $.ajax({
        url: '/api/coins',
        method: 'GET',
    })
)

export const fetchCoin = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/coins/${id}`
    })
)