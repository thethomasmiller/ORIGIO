Rails.application.routes.draw do
 
  resources :ideas do
    resources :comments
  end
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  post '/ideas/:idea_id/comments/:id', to: 'ideas#add_comment'
  


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
