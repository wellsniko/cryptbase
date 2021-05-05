class Api::WatchlistsController < ApplicationController


    def update
        
        @watchlist = Watchlist.find(params[:id]) 
        if @watchlist.update(watchlist_params)
            render json: @watchlist
        end

    end


    private

    def watchlist_params
        params.require(:watchlistParams).permit(:id, :user_id, coins: [])
    end
end
