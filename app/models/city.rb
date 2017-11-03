class City < ApplicationRecord
  has_many :posts, dependent: :destroy 
  validates :name, presence: true 
  validates :region, presence: true 
  validates :country, presence: true
  validates :image, presence: true
end
