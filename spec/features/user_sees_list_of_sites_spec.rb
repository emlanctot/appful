require 'spec_helper'

feature "User sees all sites" do
  let(:site) do
    Site.create(name: "Appful", creator_id: 1, description: "Appful is an application that allows users to submit their app for review by the Appful community. Appful is an application that allows users to submit their app for review by the Appful community.", url: "www.appful.com")
  end

  scenario "when user visits page, sees all sites" do
    visit '/'

    expect(page).to have_content "#{site.name}"
    expect(page).to have_content "#{site.description}"
  end

end
