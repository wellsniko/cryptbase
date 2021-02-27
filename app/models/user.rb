class User < ApplicationRecord

    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :watchlist, length: {maximum: 6}

    attr_reader :password

    after_create :create_wallets, :create_watchlist
    after_initialize :ensure_session_token

    has_one :watchlist,
        foreign_key: :user_id,
        class_name: :Watchlist
    
    has_many :wallets,
        foreign_key: :user_id,
        class_name: :Wallet

    has_many :orders,
        through: :wallets,
        source: :orders

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email.downcase)
        return nil unless user
        user.is_password?(password) ? user : nil
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
    
    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def create_wallets
        
        supported_coins = [
            'usd',
            'bitcoin',
            'ethereum',
            'ripple',
            'tether',
            'litecoin',
            'bitcoin-cash',
            'chainlink',
            'cardano',
            'polkadot',
            'binancecoin',
            'stellar',
            'usd-coin',
            'bitcoin-cash-sv',
            'eos',
            'monero',
            'nem',
            'wrapped-bitcoin',
            'tron',
            'tezos',
            'okb',
            'cdai',
            'filecoin',
            'crypto-com-chain',
            'leo-token',
            'cosmos',
            'neo',
            'dai',
            'vechain',
            'aave'
        ]

        supported_coins.each do |coin_id|
            if coin_id == "usd"
                Wallet.create( 
                    :coin_id => coin_id,
                    :quantity => 100000,
                    :user_id => self.id,
                    :wallet_address => SecureRandom.hex(16))
            else
                Wallet.create(
                    :coin_id => coin_id,
                    :quantity => 0,
                    :user_id => self.id,
                    :wallet_address => SecureRandom.hex(16))
            end
        end
    end


    def create_watchlist
        Watchlist.create(
            :coins => [
                'bitcoin',
                'bitcoin-cash',
                'ethereum',
                'litecoin',
                'ripple',
                'stellar'
            ],
            :user_id => self.id)
    end



    # def create_watchlist
    #     default_coins = [
    #         'bitcoin',
    #         'bitcoin-cash',
    #         'ethereum',
    #         'litecoin',
    #         'ripple',
    #         'stellar'
    #     ]

    #     default_coins.each { |coin| self.watchlist.push(coin)}

    # end

   

end