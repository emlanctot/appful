class Api::V1::SitesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @sites = Site.all
    render json: @sites
  end

  def create
    @site = Site.create(site_params)
    if @site.save!
      render json: @site
    end
  end

  def show
    @site = Site.find(params[:id])
    render json: @site
  end

  private

  def site_params
    params.permit(:name, :creator_id, :url, :description, :collaborators, :github_url, :experience, :created_at, :updated_at)
  end

end
