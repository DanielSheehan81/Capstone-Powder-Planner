class ActivitiesController < ApplicationController
    def create
        new_activity = Activity.create!(activity_params)
        render json: new_activity, status: :created

    end

    def index
        render json: Activity.all
    end

    def destroy
        activity = Activity.find(params[:id])
        activity.destroy
        head :no_content
    end

    private

    def activity_params
        params.permit(:description, :checked, :date)
    end


end
