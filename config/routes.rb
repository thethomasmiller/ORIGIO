Rails.application.routes.draw do
  resources :users

  resources :comments, only: :index
  resources :ideas
  resources :users, only: :create
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/ideas/:idea_id/comments/:id', to: 'ideas#add_comment'



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
