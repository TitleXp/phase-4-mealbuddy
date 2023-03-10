class CreateMeals < ActiveRecord::Migration[7.0]
  def change
    create_table :meals do |t|
      t.string :name
      t.belongs_to :user, null: false, foreign_key: true
      t.date :date

      t.timestamps
    end
  end
end
