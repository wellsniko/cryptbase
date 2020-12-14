class Order < ApplicationRecord
    validates :wallet_id, presence: true

    belongs_to :wallet,
        foreign_key: :wallet_id,
        class_name: :Wallet

    has_one :user,
        through: :wallet,
        source: :user

end
