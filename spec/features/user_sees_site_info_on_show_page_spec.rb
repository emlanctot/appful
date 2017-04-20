require 'spec_helper'

feature "User sees site information" do
  scenario "when user goes to show page, site information is shown" do
    site = Site.create(id: 1, name: "Appful", creator_id: 1, description: "Appful is an application that allows users to submit their app for review by the Appful community. Appful is an application that allows users to submit their app for review by the Appful community.", url: "www.appful.com")

    visit `/sites/#{site.id}`

    expect(page).to have_content `#{site.name}`
    expect(page).to have_content `#{site.description}`
  end

end
