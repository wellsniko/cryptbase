class Api::WatchlistsController < ApplicationController


    def update
        @watchlist = Watchlist.find(params[:id]) 
        @watchlist.update(watchlist_params)
            # redirect_to user_url(@user)
        # else
        #     # render json: @user.errors.full_messages, status: 422
        #     render :edit
        # end
    end


    private

    def watchlist_params
        params.require(:watchlistParams).permit(:id, :user_id, :coins)
    end
end
