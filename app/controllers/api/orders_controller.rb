# require 'byebug'

class Api::OrdersController < ApplicationController


    def create
        # debugger
        if order_params[:quantity].to_f == 0
            render json: ["You can't have an order of $0, silly"], status: 422
        end
        unless logged_in? && (current_user.id == order_params[:user_id].to_i)
            render json: ['Invalid params'], status: 422
        end

        user_wallet = Wallet.find_wallet(order_params[:user_id], order_params[:coin_id])
        user_usd_wallet = Wallet.find_wallet(order_params[:user_id], "usd")

        if order_params[:type] == "BUY"
            if order_params[:total_value].to_f > user_usd_wallet.quantity
                render json: ['Not enough USD to make purchase'], status: 422   
            else
                user_usd_wallet.update_quantity(order_params[:total_value].to_f * -1)
                user_wallet.update_quantity(order_params[:quantity].to_f)

                @order = Order.new(
                    wallet_id: user_wallet.id,
                    # user_id: order_params[:user_id],
                    coin_id: order_params[:coin_id],
                    quantity: order_params[:quantity].to_f,                             
                    price: order_params[:price].to_f,
                    total_value: order_params[:total_value].to_f,
                    transaction_type: 'BUY'
                )
            
                @order.save!
                # render :json {}
                # render :json ["Congrats, your buy order was successful"]
                
            end

        elsif order_params[:type] == "SELL"
            if order_params[:quantity].to_f > user_wallet.quantity
                render json: ['Not enough to sell'], status: 422   
            else
                user_usd_wallet.update_quantity(order_params[:total_value].to_f)
                user_wallet.update_quantity(order_params[:quantity].to_f * -1)

                @order = Order.new(
                    wallet_id: user_wallet.id,
                    # user_id: order_params[:user_id],
                    coin_id: order_params[:coin_id],
                    quantity: order_params[:quantity].to_f,                             
                    price: order_params[:price].to_f,
                    total_value: order_params[:total_value].to_f,
                    transaction_type: 'SELL'
                )
            
                @order.save!
                
                # render :json { 
                #     current_user.id {wallets : order_params[:coin_id] { quantity: user_wallet.quantity }}, 
                #  }
            end
                
        else

            render json: ['Insufficient funds and/or invalid params'], status: 422
        end
    end



    private

    def order_params
        params.require(:orderParams).permit(:quantity, :price, :total_value, :coin_id, :user_id, :type)
    end
end
