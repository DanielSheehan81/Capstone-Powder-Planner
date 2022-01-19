class ApplicationController < ActionController::API
  include ActionController::Cookies
  # before_action :authenticate_user
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

  private

  def authenticate_user
    unless current_user
      render json: { error: 'Not Logged in' }, status: :unauthorized
    end
  end
  def render_not_found(exception)
    render json: { errors: exception.message }, status: :not_found
  end

  def render_invalid(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end

  def current_user
    @current_user = User.find_by(id: session[:user_id])
  end

end
