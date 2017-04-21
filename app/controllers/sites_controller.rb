class SitesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @sites = Site.all
  end

  def show
    @site = Site.find(params[:id])
  end

  def edit
    @site = Site.find(params[:id])
  end

  def update
    @site = Site.find(params[:id])
    @site.update(site_params)
    render :edit
    redirect_to edit_site_path(@site)

  end

end
