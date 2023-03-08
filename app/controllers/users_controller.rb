class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]
    
    def show
        render json: @user #, serializer: UserWithMealAndEachFoodAndFoodSerializer, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def find_user
        find_user = User.find_by(id: session[:user_id]) 
        render json: find_user, status: :ok
    end
    
    private 

    def user_params
        params.permit(:calorie_goal, :name, :email, :dob, :weight, :username, :password, :password_confirmation)
    end
end


