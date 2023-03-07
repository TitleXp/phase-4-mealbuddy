class EachFoodPerMealsController < ApplicationController
    before_action :find_each_food, only: [:show, :update, :destroy]

    def index
        each_foods = EachFoodPerMeal.all
        render json: each_foods, status: :ok
    end

    def show
        render json: @each_food, status: :ok
    end

    def create
        new_each_food = EachFoodPerMeal.create!(new_each_food_params)
        render json: new_each_food, status: :created
    end

    def update
        @each_food.update!(edit_each_food_params)
        render json: @each_food, status: :accepted
    end

    def destroy
        @each_food.destroy
        head :no_content
    end

    private

    def find_each_food
        @each_food = EachFoodPerMeal.find(params[:id])
    end

    def edit_each_food_params
        params.permit(:meal_id, :food_id, :quantity)
    end

    def new_each_food_params
        params.permit(:meal_id, :food_id, :quantity)
    end
end
