class Api::WatchlistsController < ApplicationController


    def update
        #replace whole thing
        # p watchlist.coins
        @watchlist = Watchlist.find(params[:id]) 
        if @watchlist.update(watchlist_params)
            render json: @watchlist
        end

        
        #push one in

        # @watchlist.coins.push(watchlist_params[:coins][0])

            # redirect_to user_url(@user)
        # else
        #     # render json: @user.errors.full_messages, status: 422
        #     render :edit
        # end
    end


    private

    def watchlist_params
        params.require(:watchlistParams).permit(:id, :user_id, coins: [])
    end
end
