class Food < ApplicationRecord
    has_many :each_food_per_meal
    has_many :meals, through: :each_food_per_meal

    validates :food_name, :carbs, :fats, :proteins, :calories, presence: true
    validates :carbs, :fats, :proteins, :calories, numericality: {greater_than_or_equal_to: 0}
    

end
