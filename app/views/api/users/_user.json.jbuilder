json.extract! user, :id, :email
json.wallets do  
json.array! user.wallets do |wallet|
    json.quantity wallet.quantity
    json.name wallet.coin_id

  end
end
#   json.wallets do
#   user.wallets do |wallet|  #current_user?
#     json.set! wallet.id do
#         json.extract! wallet, :coin_id, :user_id, :quantity, :wallet_address
#     end
#   end
# end