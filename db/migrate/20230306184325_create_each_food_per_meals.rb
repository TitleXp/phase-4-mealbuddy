class CreateEachFoodPerMeals < ActiveRecord::Migration[7.0]
  def change
    create_table :each_food_per_meals do |t|
      t.belongs_to :meal, null: false, foreign_key: true
      t.belongs_to :food, null: false, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
