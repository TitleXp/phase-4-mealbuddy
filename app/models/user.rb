class User < ApplicationRecord
    has_many :meals
    has_many :each_food_per_meal, through: :meals
    
    validates :calorie_goal, :name, :age, :weight, :username, :password_digest, presence: true
    validates :calorie_goal, :age, :weight numericality: {greater_than: 0}


end
