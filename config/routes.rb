Rails.application.routes.draw do
  
  resources :activities
  resources :resorts
  resources :users, only: %i[create index]
  post '/login', to: 'session#create'
  delete '/logout', to: 'session#destroy'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#me'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
