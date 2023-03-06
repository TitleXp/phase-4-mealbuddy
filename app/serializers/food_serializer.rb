class FoodSerializer < ActiveModel::Serializer
  attributes :id, :food_name, :carbs, :fats, :proteins, :calories
end
