Rails.application.routes.draw do
  scope "/api" do
    devise_for :users, skips: :all
    devise_scope :user do
      post "login" => "api/sessions#create"
    end
  end

  namespace :api do
    resources :subjects, except: %i[new edit]
    resources :tasks, only: %i[create show destroy update]
  end
end
