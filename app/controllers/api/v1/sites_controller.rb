class Api::V1::SitesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    binding.pry
    search_term = params["search-term"]
    if search_term
      @sites = Site.search(params[:search]).order(:created_at)
    else
      binding.pry
      @sites = Site.all
      render json: @sites
    end
  end

  def create
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

  # def search
  #   if params[:query].nil?
  #     @sites = []
  #   else
  #     @sites = Site.search params[:query]
  #   end
  # end

  private

  def site_params
    params.permit(:name, :creator_id, :url, :description, :collaborators, :github_url, :experience, :created_at, :updated_at)
  end
end
