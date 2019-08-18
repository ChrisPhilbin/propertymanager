class TenantsController < ApplicationController

	before_action :authenticate_landlord!

	def new
		@tenant = Tenant.new
		@landlord = Landlord.find(params[:landlord_id])
		@property = Property.find(params[:property_id])
	end

	def create
		@tenant = Tenant.new(tenant_params)
		if @tenant.save
			render json: @tenant, status: 201
		else
			render 'new'
		end
	end

	def edit
		@tenant = Tenant.find(params[:id])
		@landlord = Landlord.find(params[:landlord_id])
		@property = Property.find(params[:property_id])
	end

	def update
		@tenant = Tenant.find(params[:id])
		if @tenant.update_attributes(tenant_params)
			redirect_to '/'
		else
			render 'edit'
		end		
	end

	def show
		@tenant = Tenant.find(params[:id])
		respond_to do |format|
			format.json { render json: @tenant, status: 201 }
			format.html { render 'show' }
		end
	end

	def all
		@landlord = Landlord.find(params[:id])
		@tenants = Tenant.where(landlord_id: params[:id])
		respond_to do |format|
			format.json { render json: [@landlord, @tenants], status: 200}
			format.html { render 'all' }
		end
	end

	private

	def tenant_params
		params.require(:tenant).permit(:firstname, :lastname, :email, :rent, :landlord_id, :property_id)
	end

end
