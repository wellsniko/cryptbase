Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] 
    resources :wallets, only: [:index]

    # resources :coins, only: [:show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :orders, only: [ :create ]
    
  end

  root "static_pages#root"
end
