class Api::WalletsController < ApplicationController
    
    def index
        @wallets = Wallet.find_user_wallets(current_user.id)
        render :json
    end

end