Rails.application.routes.draw do
  devise_for :users

  get 'sites/:id/edit', to: 'sites#edit', as: :edit_site
  put 'sites/:id', to: 'sites#update', as: :update_site

  resources :sites

  namespace :api do
    namespace :v1 do
      resources :profiles
      resources :sites do
        resources :reviews
      end
      resources :users
      resources :searches
    end
  end

  resources :sites do
    resources :users
  end
  authenticate :user do
    resources :users, only: [:index, :destroy]
  end

  put 'admin/:id' => 'users#make_admin', :as => "make_admin"
  # devise_scope :user do
  #   get "users/sign_out" => "devise/sessions#destroy"
  # end

  root "sites#index"

  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end
end
