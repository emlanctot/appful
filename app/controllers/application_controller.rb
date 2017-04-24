class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_filter :configure_permitted_parameters, if: :devise_controller?
  # before_action :authenticate_user!

  protected

  helper_method :current_user

  def current_user
    @current_user ||= User.find_by(id: session[:user])
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :avatar_url, :city, :state, :country, :github_url, :personal_url])
  end
 end
