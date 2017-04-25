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
    redirect_to site_path(@site)
  end

  def destroy
    @site = Site.find(params[:id])
    @site.destroy
    redirect_to sites_path
  end

  private

  def site_params
    params.(:site).permit(:name, :creator_id, :url, :description, :collaborators, :github_url, :experience, :created_at, :updated_at)
  end
end
