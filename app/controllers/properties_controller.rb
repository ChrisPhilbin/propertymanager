class PropertiesController < ApplicationController

	def index
		@properties = Property.where(landlord_id: params[:landlord_id])
	end

	def new
		@property = Property.new
		@landlord = Landlord.find(params[:landlord_id])
	end

	def create
		@property = Property.new(property_params)
		if @property.save
			redirect_to landlord_property(@property)
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
		params.require(:property).permit(:propertytype, :city, :state, :zip, :street, :landlord_id)
	end
end
