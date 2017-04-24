class SitesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @sites = Site.all
    @user = User.first.id
  end

  def show
    @site = Site.find(params[:id])
  end

  def destroy
    @site = Site.find(params[:id])
    @site.destroy
    redirect_to sites_path
  end

end
