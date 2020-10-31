Rails.application.routes.draw do
  
  devise_for :users

  root 'homes#index'
  get "/scripts", to: "homes#index"
  get "scripts/:id", to: "homes#index"
  get "scripts/new", to: "homes#index'"

  namespace :api do
    namespace :v1 do
      resources :scripts, only: [:index, :show, :create]
    end
  end



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
