class Food < ApplicationRecord
    has_many :each_food_per_meal
    has_many :meals, through: :each_food_per_meal
end
