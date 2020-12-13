class EditUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :cash_balance, :decimal, null: false
  end
end
