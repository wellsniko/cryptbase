class Wallet < ApplicationRecord
	validates :wallet_address, :user_id,  presence: true
	
	belongs_to :user,
		foreign_key: :user_id,
		class_name: :User

	has_many :orders, 
		foreign_key: :wallet_id,
		class_name: :Order
	
	def self.find_wallet(user_id, coin_id)
        wallet = Wallet.find_by(user_id: user_id, coin_id: coin_id)				
	end

	def update_quantity(order_quantity)															
        self.quantity = self.quantity + order_quantity
		save!
	end

end
