class SitesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    @sites = Site.all
    @user = current_user
  end

  def show
    @site = Site.find(params[:id])
    @user = current_user
  end

  def destroy
    @site = Site.find(params[:id])
    @site.destroy
    redirect_to sites_path
  end

end
