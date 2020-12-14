class Order < ApplicationRecord
    validates :wallet_id, presence: true

    belongs_to :wallet,
        foreign_key: :wallet_id,
        class_name: :Wallet

    belongs_to :user,
        through: :wallet,
        source: :user

end
