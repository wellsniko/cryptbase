json.extract! user, :id, :email

json.wallets do  
    json.array! user.wallets do |wallet|
        json.id wallet.id
        json.coin_id wallet.coin_id
        json.quantity wallet.quantity
        json.orders do
            json.array! wallet.orders do |order|
                json.id order.id
                json.coin_id order.coin_id
            end
        end
    end
end
#   json.wallets do
#   user.wallets do |wallet|  #current_user?
#     json.set! wallet.id do
#         json.extract! wallet, :coin_id, :user_id, :quantity, :wallet_address
#     end
#   end
# end