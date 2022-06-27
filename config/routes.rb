Rails.application.routes.draw do
  root "pages#index"

  namespace :api do
    namespace :v1 do
      resources :categories
      resources :expenses, only: [:create, :update, :destroy]
    end
  end

  get "*path", to: "pages#index", via: :all
end
