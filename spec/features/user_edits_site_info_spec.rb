require 'spec_helper'

feature "User" do
  site = Site.create(id: 1, name: "Appful", creator_id: 1, description: "Appful is an application that allows users to submit their app for review by the Appful community. Appful is an application that allows users to submit their app for review by the Appful community.", url: "www.appful.com")

  it "changes site's name" do
    site.name = "reApp"
    expect(site.name).to eq("reApp")
  end

end
