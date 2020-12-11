class ChangeCoins < ActiveRecord::Migration[5.2]
  def change
    remove_column :coins, :description
    add_column :coins, :description, :text
  end
end
