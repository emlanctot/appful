class User < ApplicationRecord
  has_many :reviews
  has_many :sites
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :username, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true
  validates :country, presence: true

  # has_many :sites, foreign_key: "creator_id", class_name: "Site"

end
