require 'spec_helper'

feature "User signs in" do
  let(:user) do
    User.create(
      username: "jarlax1",
      avatar_url: "https://avatars2.githubusercontent.com/u/174825?v=3&s=400",
      email: "jarlax1@launchacademy.com",
      password: 'password',
      country: 'United States'
    )
  end

  scenario "successful login" do
    visit '/users/sign_in'

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'

    expect(page).to have_content "Logged in as #{user.email}."
  end

  # scenario "successful logout" do
  #   visit '/users/sign_in'
  #
  #   fill_in 'Email', with: user.email
  #   fill_in 'Password', with: user.password
  #
  #   click_button 'Log in'
  #   click_link "Logout"
  #
  #   expect(page).to have_content "You need to sign in or sign up before continuing."
  # end
end
