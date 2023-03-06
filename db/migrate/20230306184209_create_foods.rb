class CreateFoods < ActiveRecord::Migration[7.0]
  def change
    create_table :foods do |t|
      t.string :food_name
      t.integer :carbs
      t.integer :fats
      t.integer :proteins
      t.integer :calories

      t.timestamps
    end
  end
end
