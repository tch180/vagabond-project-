class Post < ApplicationRecord
  belongs_to :city
  validates :title, length: { maximum: 200, minimum: 1 }, presence: true 
  validates :body, length: { minimum: 1 }, presence: true 
end
