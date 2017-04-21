class Review < ActiveRecord::Base
  belongs_to :user
  belongs_to :site

  validates :overall_rating, presence: true
end
