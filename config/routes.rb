Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :sites
    end
  end

  resources :sites do
    resources :users
  end

  root "sites#index"

  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end
end
