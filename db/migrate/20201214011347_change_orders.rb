class ChangeOrders < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :total_value, :decimal, null: false
  end
end
