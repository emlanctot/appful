class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @site = Site.find(params[:site_id])
    @reviews = @site.reviews
    render json: @reviews
    @user = current_user
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = @current_user.id

    @site = Site.find(params[:site_id])
    @review.site = @site
    if @review.save!
      render json: @site
    end

  end

  private

  def review_params
    params.permit(:user_id, :overall_rating, :site_id, :votes, :design_body, :usability_body, :concept_body)
  end

end
