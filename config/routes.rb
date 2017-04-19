Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "sites#index"

  resources :sites

  namespace :api do
    namespace :v1 do
      resources :sites
    end
  end

end
