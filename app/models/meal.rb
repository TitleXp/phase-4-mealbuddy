class Meal < ApplicationRecord
  belongs_to :user
  has_many :each_food_per_meal
  has_many :foods, through: :each_food_per_meal

  validates :name, :user_id, presence: true
  
end
