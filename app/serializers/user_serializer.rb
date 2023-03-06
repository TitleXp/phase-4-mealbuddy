class UserSerializer < ActiveModel::Serializer
  attributes :id, :calorie_goal, :name, :age, :weight, :username, :password_digest
end
