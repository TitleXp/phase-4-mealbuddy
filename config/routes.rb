Rails.application.routes.draw do
  resources :each_food_per_meals
  resources :foods
  resources :meals
  # resources :users

  #getting currentUser in session
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  #create new user
  post '/signup', to: 'users#create'
  
  get '/authorized', to: 'users#show'
  get '/user', to: 'users#find_user'

end
