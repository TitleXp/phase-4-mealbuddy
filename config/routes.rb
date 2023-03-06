Rails.application.routes.draw do
  resources :each_food_per_meals
  resources :foods
  resources :meals
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
