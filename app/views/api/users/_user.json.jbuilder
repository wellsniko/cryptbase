json.extract! user, :id, :email

json.wallets do  
    user.wallets.each do |wallet|
        json.set! wallet.coin_id do
            json.extract! wallet, :id, :quantity, :coin_id
            json.orders do
                json.array! wallet.orders do |order|
                    json.id order.id
                    json.coin_id order.coin_id
                end
            end
        end
    end
end



json.orders do 
    json.array!(user.orders.sort_by{|o| o[:created_at]}).reverse! do |order|
        json.id order.id
        json.coin_id order.coin_id
        json.quantity order.quantity
        json.transaction_type order.transaction_type
        json.created_at order.created_at
    end
end

# json.quote_items do
#   json.array!(@quote.quote_items.sort_by{|o| o[:item_order]}) do |item|
#   json.id item.id
#   .....
# end

# json.portoflio do 
#     user.orders.each do |order|
#         json.set! order.id
#         json
#     end
# end
            # json.orders do
            #     wallet.orders.each do |order|
            #         json.set! order.coin_id do
            #             json.extract! order, :price, :id
            #          end
            #         end
            #     end
#   json.wallets do
#   user.wallets do |wallet|  #current_user?
#     json.set! wallet.id do
#         json.extract! wallet, :coin_id, :user_id, :quantity, :wallet_address
#     end
#   end
# end

# json.wallets do  
#     json.array! user.wallets do |wallet|
#         json.id wallet.id
#         json.coin_id wallet.coin_id
#         json.quantity wallet.quantity
#         json.orders do
#             json.array! wallet.orders do |order|
#                 json.id order.id
#                 json.coin_id order.coin_id
#             end
#         end
#     end
# end