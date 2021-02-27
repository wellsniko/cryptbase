class ChangeUsersAgain < ActiveRecord::Migration[5.2]
  def change
      remove_column :users, :watchlist
  end
end
