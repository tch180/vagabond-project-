Rails.application.routes.draw do
  namespace :api do
    resources :cities, only: [:index, :show] do
      resources :posts, only: [:create, :update, :destroy]
    end
  end
end
