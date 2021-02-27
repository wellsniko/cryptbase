json.extract! user, :id, :email


json.set! "watchlist", user.watchlist.coins


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

