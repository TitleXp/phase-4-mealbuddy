class MealsController < ApplicationController
    before_action :find_meal, only: [:show, :update, :destroy]

    def index
        meals = Meal.all
        render json: meals, status: :ok
    end

    def show
        render json: @meal, status: :ok
    end

    def create
        new_meal = Meal.create!(new_meal_params)
        render json: new_meal, status: :created
    end

    def update
        @meal.update!(edit_meal_params)
        render json: @meal, status: :accepted
    end

    def destroy
        @meal.destroy
        head :no_content
    end

    private

    def find_meal
        @meal = Meal.find(params[:id])
    end

    def edit_meal_params
        params.permit(:name, :user_id, :date)
    end

    def new_meal_params
        params.permit(:name, :user_id, :date)
    end
end
