class AddVotedColumnToReviews < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :voted, :boolean, :default => false
  end
end
