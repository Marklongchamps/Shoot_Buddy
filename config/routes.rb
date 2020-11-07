Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  #changes line t to 'homes@index'
  get "/scripts", to: "homes#index"
  get "scripts/:id", to: "homes#index"
  get "scripts/new", to: "homes#index'"
  get "scripts/:id/shots/:id", to: "homes#index"
  get "scripts/:id/shots/:id/takes", to: "homes#index"
  

  namespace :api do
    namespace :v1 do
      resources :scripts, only: [:index, :show, :create] do
        resources :shots, only: [:index, :show, :create] do
          resources :takes, only: [:create, :show]
        end
      end
    end
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
