class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :date
  has_one :user
  has_many :each_food_per_meal
  has_many :foods, through: :each_food_per_meals
end
