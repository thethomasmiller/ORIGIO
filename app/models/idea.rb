class Idea < ApplicationRecord
  belongs_to :users
  has_many :comments
end
