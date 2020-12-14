class EditUserAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :cash_balance
  end
end
