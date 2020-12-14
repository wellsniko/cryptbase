# require 'byebug'

class Api::OrdersController < ApplicationController


    def create
        # debugger
        unless logged_in? && (current_user.id == order_params[:user_id].to_i)
            render json: ['Invalid params'], status: 422
        end

        user_wallet = Wallet.find_wallet(order_params[:user_id], order_params[:coin_id])
        user_usd_wallet = Wallet.find_wallet(order_params[:user_id], "usd")

        if order_params[:type] == "BUY"
            if order_params[:total_value] > user_usd_wallet
                render json: ['Not enough USD to make purchase'], status: 422   
            else
                user_usd_wallet.update_quantity(order_params[:total_value] * -1)
                user_wallet.update_quantity(order_params[:quantity])

                @order = Order.new(
                    wallet_id: user_wallet.id,
                    user_id: order_params[:user_id],
                    quantity: order_params[:quantity],                             
                    price: order_params[:price],
                    total_value: order_params[:total_value],
                    transaction_type: 'BUY'
                )
            
                @order.save
            end

        elsif order_params[:type] == "SELL"
            if order_params[:quantity] > user_wallet
                render json: ['Not enough to sell'], status: 422   
            else
                user_usd_wallet.update_quantity(order_params[:total_value])
                user_wallet.update_quantity(order_params[:quantity] * -1)

                @order = Order.new(
                    wallet_id: user_wallet.id,
                    user_id: order_params[:user_id]
                    quantity: order_params[:quantity],                             
                    price: order_params[:price],
                    total_value: order_params[:total_value]
                    transaction_type: 'SELL'
                )
            
                @order.save
            end
        end
     else

        render json: ['Insufficient funds and/or invalid params'], status: 422

    end



    private

    def order_params
        params.require(:orderParams).permit(:quantity, :price, :total_value, :coin_id, :user_id, :type)
    end
end
