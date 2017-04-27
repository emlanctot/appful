class Api::V1::SearchesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @sites = Site.all
    if params[:query]
      query = params[:query]
      @sites = Site.where("name ilike ?", "%#{query}%")
      render json: @sites
    else
      @sites = Site.all.order("created_at DESC")
    end
  end

  private

  def search_params
    params.permit(:query)
  end

end
