module AuthenticationHelper
  def sign_in_as(user)
    mock_auth_for(user)
    visit "/"
    click_link "Sign In"
  end
end
