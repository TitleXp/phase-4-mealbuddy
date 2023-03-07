class MealSerializer < ActiveModel::Serializer

  attributes :id, :name, :date

  has_one :user
  has_many :foods
  has_many :each_food_per_meal
end
