class Coin < ApplicationRecord
    validates :symbol, uniqueness: true
    validates :symbol, :name, presence: true
    
end 