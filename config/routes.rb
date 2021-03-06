Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :profiles, only: [:index, :show, :create, :update, :destroy]
    resources :photos, only: [:destroy]
    resources :matches, only: [:index, :show, :create, :destroy]

    resources :conversations, only: [:index, :show, :create, :update, :destroy] do 
      resources :messages, only: [:create, :index, :destroy]
    end
  end

  mount ActionCable.server => '/cable'
end
