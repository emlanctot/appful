Rails.application.routes.draw do
  devise_for :users

  get 'sites/:id/edit', to: 'sites#edit', as: :edit_site
  put 'sites/:id', to: 'sites#update', :as => 'update_site'

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
