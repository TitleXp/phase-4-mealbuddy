# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_06_184325) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "each_food_per_meals", force: :cascade do |t|
    t.bigint "meal_id", null: false
    t.bigint "food_id", null: false
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["food_id"], name: "index_each_food_per_meals_on_food_id"
    t.index ["meal_id"], name: "index_each_food_per_meals_on_meal_id"
  end

  create_table "foods", force: :cascade do |t|
    t.string "food_name"
    t.integer "carbs"
    t.integer "fats"
    t.integer "proteins"
    t.integer "calories"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "meals", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.date "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_meals_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.integer "calorie_goal"
    t.string "name"
    t.string "email"
    t.date "dob"
    t.integer "weight"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "each_food_per_meals", "foods"
  add_foreign_key "each_food_per_meals", "meals"
  add_foreign_key "meals", "users"
end

# username: "",
#         name: "",
#         dob: "",
#         email: "",
#         password: "",
#         calorie_goal: "",
#         weight: ""