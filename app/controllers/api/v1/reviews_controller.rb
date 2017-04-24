class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @site = Site.find(params[:site_id])
    @reviews = @site.reviews
      render json: @reviews
  end

  def create
    if user_signed_in?
      @site = Site.find(params[:site_id])
      @review = Review.create(review_params)
      @review.site = @site
      if @review.save!
        render json: @site
      end
    else
      flash[:error] = "Error"
    end
  end

  private

  def review_params
    params.permit(:overall_rating, :user_id, :site_id, :votes, :design_body, :usability_body, :concept_body)
  end
end
