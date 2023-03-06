class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :date
  has_one :user
end
