class AddRentToTenants < ActiveRecord::Migration[5.2]
  def change
  	add_column :tenants, :rent, :integer
  end
end
