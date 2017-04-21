class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.float :overall_rating, null: false
      t.belongs_to :user, null: false
      t.belongs_to :site, null: false
      t.string :design_body
      t.string :usability_body
      t.string :concept_body

      t.timestamps
    end
  end
end
