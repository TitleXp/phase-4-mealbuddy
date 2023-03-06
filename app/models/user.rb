class User < ApplicationRecord
    has_many :meals
    has_many :each_food_per_meal, through: :meals
    


end
