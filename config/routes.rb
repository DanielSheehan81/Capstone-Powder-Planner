Rails.application.routes.draw do
  
  resources :activities, only: [:index, :show, :create, :destroy]
  resources :resorts, only: [:index, :show, :destroy]
  resources :users, only: %i[create index]
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  post '/newresort', to: 'resorts#create'
  get '/me', to: 'users#me'
  get '/users/:id', to: 'users#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
