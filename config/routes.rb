Rails.application.routes.draw do
  devise_for :landlords
  resources :tenants
  resources :properties
  resources :landlords

  get '/' => 'static#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
