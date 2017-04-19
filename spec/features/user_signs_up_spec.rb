require 'spec_helper'

feature "User signs in" do
  let(:user) do
    User.create(
      username: "jarlax1",
      avatar_url: "https://avatars2.githubusercontent.com/u/174825?v=3&s=400",
      email: "jarlax2@launchacademy.com",
      password: 'password',
      country: 'United States'
    )
  end

  scenario "successful signup" do
    visit '/users/sign_in'

    click_link('Sign up', :match => :first)

    fill_in 'Username', with: 'John'
    fill_in 'Email', with: 'user1@example.com'
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'password'
    fill_in 'Country', with: 'USA'

    click_button 'Sign up'

    expect(page).to have_content "Welcome! You have signed up successfully."
  end

  scenario "unsuccessful signup" do
    visit '/users/sign_in'

    click_link('Sign up', :match => :first)

    fill_in 'Username', with: user.username
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Sign up'

    expect(page).to have_content "prohibited this user from being saved"
  end
end
