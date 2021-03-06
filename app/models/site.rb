class Site < ActiveRecord::Base
  belongs_to :user
  has_many :reviews

  validates :name, presence: true
  validates :user_id, presence: true
  validates :url, presence: true
  validates :description, presence: true, length: { minimum: 50, maximum: 500 }
  validates :image, presence: true
end
