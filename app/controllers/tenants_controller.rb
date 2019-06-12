class TenantsController < ApplicationController

	def new
		@tenant = Tenant.new
		@landlord = Landlord.find(params[:landlord_id])
		@property = Property.find(params[:property_id])
	end

	def create
		@tenant = Tenant.new(tenant_params)
		if @tenant.save
			redirect_to '/'
		else
			render 'new'
		end
	end

	private

	def tenant_params
		params.require(:tenant).permit(:firstname, :lastname, :email, :landlord_id, :property_id)
	end

end
