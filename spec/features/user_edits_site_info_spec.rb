require 'spec_helper'

feature "User" do
  site = Site.create(id: 1, name: "Appful", creator_id: 1, description: "Appful is an application that allows users to submit their app for review by the Appful community.", url: "www.appful.com")

  it "changes site's name" do
    site.name = "reApp"
    expect(site.name).to eq("reApp")
  end

  it "changes site's description" do
    site.description = "Appful is an application that allows users to submit their app for review by the Appful community.Appful is an application that allows users to submit their app for review by the Appful community."
    expect(site.description).to eq("Appful is an application that allows users to submit their app for review by the Appful community.Appful is an application that allows users to submit their app for review by the Appful community.")
  end

  it "changes site's url" do
    site.url = "www.reApp.com"
    expect(site.url).to eq("www.reApp.com")
  end

end
