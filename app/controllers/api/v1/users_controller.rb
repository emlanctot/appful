class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  helper_method :current_user

  def index
    binding.pry
    @user = User.find(1)
    render json: @user
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user])
  end

end
