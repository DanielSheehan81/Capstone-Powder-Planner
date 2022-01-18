class ResortsController < ApplicationController

    def create
        resort = resort.create!(resort_params)
        render json: resort
    end

    def index
        render json: Resort.all
    end

    def destroy
        resort = Resort.find(params[:id])
        resort.destroy
        head :no_content
    end

    private

    def resort_params
        params.permit(:name ,:address, :rating)
    end

end
