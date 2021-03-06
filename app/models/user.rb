class User < ApplicationRecord
  has_many :reviews
  has_many :sites

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :username, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true
  validates :country, presence: true

  mount_uploader :avatar, AvatarUploader

  def admin?
    admin == true
  end
end
