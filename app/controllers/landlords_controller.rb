class LandlordsController < ApplicationController

	before_action :authenticate_landlord!, only: [:show, :edit, :update]

	def index
		redirect_to '/'
	end

	def show
		@landlord = Landlord.find(params[:id])
	end

	def new
		@landlord = Landlord.new
	end

	def edit
		@landlord = Landlord.find(params[:id])
	end

	def update
		@landlord = Landlord.find(params[:id])
		if @landlord.update_attributes(landlord_params)
			redirect_to @landlord
		else
			render 'edit'
		end
	end

	private

	def landlord_params
		params.require(:landlord).permit(:firstname, :lastname, :email, :password, :password_confirmation)
	end

end
