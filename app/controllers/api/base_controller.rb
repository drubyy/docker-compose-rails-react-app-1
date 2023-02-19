class Api::BaseController < ActionController::API
  before_action :load_current_user
  before_action :authenticate_user!

  def load_current_user
    return unless params[:user_id].present?

    sign_in User.find(params[:user_id])
  end

  def render_json data, status
    render json: data, status: status
  end
end