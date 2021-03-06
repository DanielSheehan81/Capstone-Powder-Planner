class Api::ActivitiesController < ApplicationController
   
   
    def index
        @activity = Activity.all
        render json: @activity
    end


    def create
        @new_activity = Activity.create!(activity_params)
        # @data = @new_activity.user.completed_activities
        render json: @new_activity, status: :created

    end


    def destroy
        activity = Activity.find(params[:id])
        activity.destroy
        head :no_content
    end

    def completed
       completed_activity = Activity.find(params[:id])
       completed_activity.update!(activity_params) 
       render json: completed_activity
    end

    private

    def activity_params
        params.permit(:description, :checked, :date, :user_id, :resort_id)
    end


end
