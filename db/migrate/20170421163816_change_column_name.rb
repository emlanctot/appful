class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :sites, :creator_id, :user_id
  end
end
