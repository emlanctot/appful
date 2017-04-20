require 'spec_helper'

feature "User can add a new site" do
  let(:site) do
    Site.create(name: "New Site", creator_id: 3, description: "Appful is an application that allows users to submit their app for review by the Appful community. Appful is an application that allows users to submit their app for review by the Appful community.", url: "www.appful.com")
  end

  scenario "adds a site successfully" do
    visit '/'

    click_button 'Submit A New Site'
    expect(page).to have_content "Name:"

    fill_in "Name", with: site.name
    fill_in "URL", with: site.url
    fill_in "Description", with: site.description

    click_button "submit"

    expect(page).to have_content `#{site.name}`
    expect(page).to have_content `#{site.description}`
    expect(page).to have_content `#{site.url}`
end

  scenario "adds a site unsuccessfully" do
    visit '/'

    click_on("Submit A New Site")
    expect(page).to have_content "Name:"

    fill_in "Name", with: "Appful"
    fill_in "Description", with: "Appful is an application that allows users to submit their app for review by the Appful community. Appful is an application that allows users to submit their app for review by the Appful community."

    click_button "submit"

    expect(page).to have_content "URL can't be blank"
  end

end
