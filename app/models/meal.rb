class Meal < ApplicationRecord
  belongs_to :user
  has_many :each_food_per_meal, dependent: :destroy
  has_many :foods, through: :each_food_per_meal

  validates :name, :user_id, :date, presence: true
  # validates :name, uniqueness: { scope: [:user.id, :date],
  # message: "Meal name should be unique for today!" }

end
