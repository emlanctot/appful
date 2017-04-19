class SitesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @sites = Site.all
  end

end
