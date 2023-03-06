class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.integer :calorie_goal
      t.string :name
      t.string :email
      t.date :dob
      t.integer :weight
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
