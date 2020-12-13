class EditWallets < ActiveRecord::Migration[5.2]
  def change
    remove_column :wallets, :total_value
  end
end
