class PropertiesController < ApplicationController

	before_action :authenticate_landlord!

	def index
		@properties = Property.where(landlord_id: params[:landlord_id])
		@landlord = Landlord.find(params[:landlord_id])
	end

	def new
		@property = Property.new
		@landlord = Landlord.find(params[:landlord_id])
	end

	def create
		@property = Property.new(property_params)
		if @property.save
			# render json: @property, status: 201
			redirect_to landlord_properties_path(current_landlord)
		else
			render 'new'
		end
	end

	def edit
		@property = Property.find(params[:id])
	end

	def update
		@property = Property.find(params[:id])
		if @property.update_attributes(property_params)
			redirect_to @property
		else
			render 'edit'
		end
	end

	def show
		@property = Property.find(params[:id])
		@tenants = @property.tenants
		respond_to do |format|
			format.html  { render 'show'}
			format.json  { render json: [@property, @tenants], status: 201}
		end
	end

	def destroy
		@property = Property.find(params[:id])
		@landlord = Landlord.find(params[:landlord_id])
		@property.destroy

		respond_to do |format|
			format.html { redirect_to landlord_path(@landlord) }
			format.xml  { head :ok }
    	end
	end

	private

	def property_params
		params.require(:property).permit(:propertytype, :city, :state, :zip, :street, :landlord_id, :photo)
	end
end
