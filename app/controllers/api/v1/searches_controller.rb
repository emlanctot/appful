class Api::V1::SearchesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    if JSON.parse(request.body.read)[:query]
      @sites = Site.search(params[:query]).order("created_at DESC")
      render json: @sites
    else
      flash[:error] = 'No Results'
    end
  end

  def search
    if params[:query].nil?
      @sites = []
    else
      @sites = Site.search params[:query]
    end
  end

end
