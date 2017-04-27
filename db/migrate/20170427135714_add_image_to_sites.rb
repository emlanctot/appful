class AddImageToSites < ActiveRecord::Migration[5.0]
  def change
    add_column :sites, :image, :string
  end
end
