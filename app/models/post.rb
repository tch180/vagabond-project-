class Post < ApplicationRecord
  belongs_to :city
  validates :title, presence: true 
  validates :body, presence: true 
end
