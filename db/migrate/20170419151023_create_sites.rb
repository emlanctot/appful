class CreateSites < ActiveRecord::Migration[5.0]
  def change
    create_table :sites do |t|
      t.string :name, null: false
      t.integer :creator_id, null: false
      t.string :url, null: false
      t.text :description, null: false
      t.string :collaborators
      t.string :github_url
      t.string :experience

      t.timestamps
    end
  end
end
