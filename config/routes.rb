Rails.application.routes.draw do
  devise_for :users

  resources :sites do
    resources :users
  end

  root "sites#index"
end
