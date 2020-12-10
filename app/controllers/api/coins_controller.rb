class Api::CoinsController < ApplicationController
    def show
        @coin = Currency.find_by(coin_params)
        render :show
    end

    def index
        @coins = Currency.all
        render :index
    end

    private
    def coin_params
        params.permit(:symbol)
    end  #! Does this work

end
