require 'rails_helper'

describe Api::V1::SitesController, type: :controller do
  describe 'GET /api/v1/sites' do
    let(:site) do
      Site.create(name: "Appful", user_id: 1, description: "Appful is an application that allows users to submit their app for review by the Appful community. Appful is an application that allows users to submit their app for review by the Appful community.", url: "www.appful.com")
    end

    it 'retrieves from database' do

      get :index, site_id: site.id
      json = JSON.parse(response.body)

      expect(response.content_type).to eq('application/json')
      expect(response).to have_http_status(:ok)
    end
  end
end
