class Api::CoinsController < ApplicationController
    def show
        @coin = Coin.find_by(coin_params)
        render :show 
    end

    def index
        @coins = Coin.all
        render :index
    end

    private
    def coin_params
        params.permit(:id)
    end 

end
