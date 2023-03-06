
puts "Deleting old data"
User.destroy_all
Meal.destroy_all
Food.destroy_all
EachFoodPerMeal.destroy_all

puts "Creating User" 
u1 = User.create!(calorie_goal: 1000, name: "John Doe", dob: "1990-05-05", weight: 200, username: "JD", email: "johndoe@gmail.com", password: "12345")

puts "Creating foods/ingredients"
20.times do 
    Food.create!(food_name: Faker::Food.ingredient,
    carbs: rand(8..30) ,
    fats: rand(8..30),
    proteins: rand(20..60),
    calories: rand(200..500)
     )
end

puts "Creating a meal"
meal1 = Meal.create!(name: "Breakfast Mon 3/6/22", user_id: u1.id, date: "2023-03-06")

puts "Creating an Each_Food_Per_Meal record"
food_meal_item_1 = EachFoodPerMeal.create!(meal_id: meal1.id, food_id: Food.all.sample.id, quantity: 2) 

puts "Seeding done"