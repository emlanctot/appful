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
  authenticate :user do
    resources :users, only: [:index, :destroy]
  end

  put 'admin/:id' => 'users#make_admin', :as => "make_admin"
  # devise_scope :user do
  #   get "users/sign_out" => "devise/sessions#destroy"
  # end

  root "sites#index"
end
