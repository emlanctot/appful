require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) do
    User.create(
    username: "jarlax3",
    avatar: "https://avatars2.githubusercontent.com/u/174825?v=3&s=400",
    email: "jarlax3@launchacademy.com",
    password: 'password',
    country: 'United States'
    )
  end

  it 'is valid with valid attributes' do
    expect(user).to be_valid
  end

  it 'is not valid without a username' do
    user.username = nil
    expect(user).to_not be_valid
  end

  it 'is not valid without an email' do
    user.email = nil
    expect(user).to_not be_valid
  end

  it 'is not valid without a password' do
    user.password = nil
    expect(user).to_not be_valid
  end

  it 'is not valid without a country' do
    user.country = nil
    expect(user).to_not be_valid
  end
end
