require 'spec_helper'
require 'rails_helper'

feature "add a new site" do
  scenario "user needs to log in to add a new site to the database" do

    visit '/'
    click_link('Submit A New Site', :match => :first)
    fill_in "Name:", with: "John Fake Doe"
    fill_in "URL", with: "www.fakeapp.com"
    fill_in "Description", with: "The best web app for testing your site"
    fill_in "Collaborators", with: "Jane Doe"
    fill_in "www.github.com/j-doe"
    fill_in "Expert"
    click_on "Submit"
    expect(page).to have_content('Please sign in first')
  end

  scenario "user successfully logs in and adds a new site to the database" do
    user = FactoryGirl.create(:user)

    visit root_path

    visit root_path
    click_on "Login"
    fill_in "Email", with: user.email
    fill_in "Password", with: user.password
    click_on "Log in"

    expect(page).to have_content('Logged in as')

    fill_in "Name", with: "John Real Doe"
    fill_in "URL", with: "www.realapp.com"
    fill_in "Description", with: "The real web app for testing your site"
    fill_in "Collaborators", with: "Jane Doe"
    fill_in "www.github.com/j-doe"
    fill_in "Expert"
    click_on "Submit"

    expect(page).to have_content('Review site added')
    expect(page).to have_content('John Real Doe')
  end
end
DatabaseCleaner.clean
