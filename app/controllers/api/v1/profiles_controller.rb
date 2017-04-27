class Api::V1::ProfilesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @sites = Site.where(user_id: current_user.id)
    @current_user = current_user
    @avatar = current_user.avatar.url
    respond_to do |format|
      format.json  { render :json => {:sites => @sites, :user => @current_user, avatar: @avatar }}
    end
  end

end
