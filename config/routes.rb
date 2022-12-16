Rails.application.routes.draw do


  namespace :api do
    namespace :v1 do
      resources :messages, only: %i[index]
    end
  end

  root "roots#index"
  get '/roots/messages', to: 'roots#index'
  # resources :greetings
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
