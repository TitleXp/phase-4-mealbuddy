class UserWithMealAndEachFoodAndFoodSerializer < ActiveModel::Serializer
  attributes :id, :calorie_goal, :name, :dob, :weight, :username#, :password_digest
  attributes :find_food

  has_many :meals
  has_many :each_food_per_meal


  def find_food
    user_foods = Food.all.where(id: [:id])
  end
end
