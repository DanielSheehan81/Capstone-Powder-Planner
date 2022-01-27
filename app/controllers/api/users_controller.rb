class Api::UsersController < ApplicationController
    # skip_before_action :authenticate_user, only: %i[create me]

    def index
        render json: User.all
      end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def me
        if current_user
          render json: current_user, status: :ok
        else
          render json: 'Not authenticated', status: :unauthorized
        end
      end

    def show
        render json: User.find(params[:id])
    end
    

    private

    def user_params
        params.permit(:full_name, :email, :username, :password)
    end


end
