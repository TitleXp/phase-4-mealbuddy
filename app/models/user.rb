class User < ApplicationRecord
    has_many :meals
    has_many :each_food_per_meal, through: :meals
    
    validates :calorie_goal, :name, :dob, :weight, :username, :email :password_digest, presence: true
    validates :calorie_goal, :weight numericality: {greater_than: 0}
    # validates_date :dob, on_or_before: lambda { Date.current } #something about date here
    validates :username, :email, uniqueness: true

    validate :age_of_user


    def age_of_user
        
    end
end
