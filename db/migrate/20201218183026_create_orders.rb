class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :wallet_id, null: false
      t.string :coin_id
      t.decimal :quantity, null: false
      t.decimal :price, null: false
      t.string :transaction_type, null: false
      t.decimal :total_value, null: false
    end
  end
end

