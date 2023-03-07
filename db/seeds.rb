User.destroy_all
Meal.destroy_all
Food.destroy_all
EachFoodPerMeal.destroy_all
puts "Deleting old data"

puts "Creating User" 
u10 = User.create!(calorie_goal: 1000, name: "John Doe", dob: "1990-05-05", weight: 200, username: "JD", email: "johndoe@gmail.com", password: "12345")

puts "Creating foods/ingredients"
100.times do 
    Food.create!(food_name: Faker::Food.ingredient,
    carbs: rand(8..30) ,
    fats: rand(8..30),
    proteins: rand(20..60),
    calories: rand(200..500)
     )
end

puts "Creating a meal"
breakfast = Meal.create!(name: "Breakfast", user_id: u10.id, date: "2023-03-06")
lunch = Meal.create!(name: "Lunch", user_id: u10.id, date: "2023-03-06")
dinner = Meal.create!(name: "Dinner", user_id: u10.id, date: "2023-03-06")

puts "Creating an Each_Food_Per_Meal record"
4.times do 
    EachFoodPerMeal.create!(meal_id: breakfast.id, food_id: Food.all.sample.id, quantity: 2)
end

4.times do 
    EachFoodPerMeal.create!(meal_id: lunch.id, food_id: Food.all.sample.id, quantity: 2)
end

4.times do 
    EachFoodPerMeal.create!(meal_id: dinner.id, food_id: Food.all.sample.id, quantity: 2)
end

puts "Seeding done"