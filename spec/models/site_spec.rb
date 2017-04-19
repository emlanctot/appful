require 'rails_helper'

RSpec.describe Site, type: :model do
  let(:site) do
    Site.create(
      name: "Google",
      creator_id: 1,
      url: "google.com",
      description: 'This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.'
    )
  end

  it 'is valid with valid attributes' do
    expect(site).to be_valid
  end

  it 'is not valid without a name' do
    site.name = nil
    expect(site).to_not be_valid
  end

  it 'is not valid without a creator id' do
    site.creator_id = nil
    expect(site).to_not be_valid
  end

  it 'is not valid without a url' do
    site.url = nil
    expect(site).to_not be_valid
  end

  it 'is not valid without a description' do
    site.description = nil
    expect(site).to_not be_valid
  end
end
