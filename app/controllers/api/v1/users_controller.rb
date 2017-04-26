class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @sites = Site.where(user_id: current_user.id)
    @current_user = current_user
    respond_to do |format|
      format.json  { render :json => {:sites => @sites, :user => @current_user }}
    end
  end

end
