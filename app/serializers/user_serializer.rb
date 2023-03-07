class UserSerializer < ActiveModel::Serializer
  attributes :id, :calorie_goal, :name, :dob, :weight, :username #, :password_digest

  # has_many :meals
  # has_many :each_food_per_meal
  # has_many :foods
end
