class CreateWallets < ActiveRecord::Migration[5.2]
  def change
    create_table :wallets do |t|
      t.string :coin_id, null: false
      t.integer :user_id, null: false
      t.decimal :quantity
      t.decimal :total_value
      t.string :wallet_address
      t.timestamps
    end
    add_index :wallets, :coin_id
    add_index :wallets, :user_id
  end
end
