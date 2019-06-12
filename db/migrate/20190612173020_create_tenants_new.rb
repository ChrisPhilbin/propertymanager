class CreateTenantsNew < ActiveRecord::Migration[5.2]
  def change
  	create_table :tenants do |t|
  		t.belongs_to :landlord
  		t.belongs_to :property

  		t.string :firstname
  		t.string :lastname
  		t.string :email
  	end
  end
end
