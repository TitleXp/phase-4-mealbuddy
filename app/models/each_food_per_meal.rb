class EachFoodPerMeal < ApplicationRecord
  belongs_to :meal
  belongs_to :food

  validates :meal_id, :food_id, :quantity, presence: true
  validates :quantity, numericality: {greater_than: 0}


end
