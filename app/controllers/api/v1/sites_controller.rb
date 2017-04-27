class Api::V1::SitesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @sites = Site.all
    render json: @sites
  end

  def create
    binding.pry
    if user_signed_in?
      @site = Site.create(site_params)
      if @site.save!
        render json: @site
      end
    else
      flash[:error] = "Error"
    end
  end

  def show
    @site = Site.find(params[:id])
    @reviews = @site.reviews
    render json: @site
  end

  def destroy
    @site = Site.find(params[:id])
    @site.destroy
  end

  private

  def site_params
    params.permit(:name, :creator_id, :url, :description, :collaborators, :github_url, :experience, :created_at, :updated_at, :image)
  end
end
