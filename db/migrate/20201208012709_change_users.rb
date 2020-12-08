class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :total_balance
  end
end
