class EachFoodPerMealSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :meal
  has_one :food
end
