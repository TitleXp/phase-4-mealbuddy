class FoodsController < ApplicationController
    before_action :find_food, only: [:show, :update, :destroy]

    def index
        foods = Food.all
        render json: foods, status: :ok
    end

    def show
        render json: @food, status: :ok
    end

    def create
        new_food = Food.create!(new_food_params)
        render json: new_food, status: :created
    end

    def update
        @food.update!(edit_food_params)
        render json: @food, status: :accepted
    end

    def destroy
        @food.destroy
        head :no_content
    end

    private

    def find_food
        @food = Food.find(params[:id])
    end

    def edit_food_params
        params.permit(:food_name, :carbs, :fats, :proteins, :calories)
    end

    def new_food_params
        params.permit(:food_name, :carbs, :fats, :proteins, :calories)
    end

end
