class CreateCoins < ActiveRecord::Migration[5.2]
  def change
    create_table :coins do |t|
Wallet.create(
      t.timestamps
    end
    add_index :coins, :symbol, unique: true
  end
end
