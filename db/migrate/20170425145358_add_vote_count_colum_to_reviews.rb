class AddVoteCountColumToReviews < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :vote_count, :integer, :default => 0
  end
end
