require 'rails_helper'

RSpec.describe Review, type: :model do
  let(:review) do
    User.create(
      id: 1,
      username: "jarlax3",
      avatar: "https://avatars2.githubusercontent.com/u/174825?v=3&s=400",
      email: "jarlax3@launchacademy.com",
      password: 'password',
      country: 'United States'
    )
    Site.create(
      name: "Google",
      user_id: 1,
      id: 1,
      url: "google.com",
      description: 'This is a description. This is a description.
      This is a description. This is a description. This is a description.
      This is a description.',
      image: "www.facebook.com"
    )
    Review.create(
      overall_rating: 3.3,
      user_id: 1,
      site_id: 1,
      design_body: 'Design body',
      usability_body: 'Usability body',
      concept_body: 'Concept body'
    )
  end

  it 'is valid with valid attributes' do
    expect(review).to be_valid
  end

  it 'is not valid without an overall rating' do
    review.overall_rating = nil
    expect(review).to_not be_valid
  end

  it 'is not valid without a site id' do
    review.site_id = nil
    expect(review).to_not be_valid
  end

  it 'is not valid without a user id' do
    review.user_id = nil
    expect(review).to_not be_valid
  end
end
