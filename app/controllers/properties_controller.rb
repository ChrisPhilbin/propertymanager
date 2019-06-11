class PropertiesController < ApplicationController

	def new
		@property = Property.new
	end

	def create
		@property = Property.new(property_params)
		if @property.save
			redirect_to @property
		else
			render 'new'
		end
	end

	def edit
		@property = Property.find(params[:id])
		if @property.update_attributes(property_params)
			redirect_to @property
		else
			render 'edit'
		end
	end

	def show
		@property = Property.find(params[:id])
	end

	private

	def property_params
		params.require(:property).permit(:type, :city, :state, :zip, :street)
	end
end
