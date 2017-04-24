Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :sites do
        resources :reviews
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :users
    end
  end

  resources :sites do
    resources :users
  end

  root "sites#index"
end
