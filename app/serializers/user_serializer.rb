class UserSerializer < ActiveModel::Serializer
  attributes :id, :calorie_goal, :name, :dob, :weight, :username, :password_digest
end
