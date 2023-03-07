class EachFoodPerMealSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :food_id
  has_one :meal
  has_one :food
end
