Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] 
    resources :wallets, only: [:index]
    resources :watchlists, only: [:update]
    resource :session, only: [:create, :destroy, :show]
    resources :orders, only: [ :create, :index ]
  end

  

end
