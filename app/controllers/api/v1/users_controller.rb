class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  helper_method :current_user

  def index
    @user = User.find(1)
    render json: @user
  end
end
