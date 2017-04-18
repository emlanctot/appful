require 'spec_helper'

feature "User signs in" do
  let(:user) do
    User.create(
      username: "jarlax1",
      avatar_url: "https://avatars2.githubusercontent.com/u/174825?v=3&s=400",
      email: "jarlax1@launchacademy.com",
      encrypted_password: 'password',
      country: 'United States'
    )
  end

  scenario "successful login" do
    visit '/login'
    sign_in_as user

    expect(page).to have_content "You're now logged in as #{user.username}!"
  end

  scenario "successful logout" do
    visit '/login'
    sign_in_as user
    click_link "Log Out"

    expect(page).to have_content "You have been logged out."
  end
end
