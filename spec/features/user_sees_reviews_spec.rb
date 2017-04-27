require 'spec_helper'

feature "User sees the reviews belonging to a site" do
  let(:site) do
    Site.create(
      id: 1,
      name: "Appful",
      user_id: 1,
      description: "Appful is an application that allows users to submit their
      app for review by the Appful community. Appful is an application that
      allows users to submit their app for review by the Appful community.",
      url: "www.appful.com"
    )
  end
  let(:user) do
    User.create(
      id: 1,
      username: "jarlax3",
      avatar: "https://avatars2.githubusercontent.com/u/174825?v=3&s=400",
      email: "jarlax3@launchacademy.com",
      password: 'password',
      country: 'United States'
    )
  end
  let(:review) do
    Review.create(site_id: 1, user_id: 1, overall_rating: 5.0, concept_body: 'such a good concept!', usability_body: 'it is broken!', design_body: 'it looks gross!')
  end

  scenario "when user visits page, sees all reviews" do
    visit `/sites/#{site.id}`

    expect(page).to have_content `#{review.overall_rating}`
    expect(page).to have_content `#{review.concept_body}`
    expect(page).to have_content `#{review.usability_body}`
    expect(page).to have_content `#{review.design_body}`
  end
end
