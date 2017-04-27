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
    @review.user_id = current_user.id
    @site = Site.find(params[:site_id])
    @review.site = @site
    if @review.save!
      render json: @review
    end
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @review = Review.find(params[:id])
    @voted = @review.See which user_ids did vote.
    # If this user_id is not included in that array, allow them to update the review.
    if !@voted.include?(@user_id)
      @review.update(review_params)
      if @review.save!
        render json: @review
      end
  end

  private

  def review_params
    params.permit(:id, :overall_rating, :user_id, :site_id, :vote_count, :design_body, :usability_body, :concept_body)
  end

end
