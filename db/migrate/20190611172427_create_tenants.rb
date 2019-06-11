class CreateTenants < ActiveRecord::Migration[5.2]
  def change
    create_table :tenants do |t|
      t.string :firstname
      t.string :lastname
      t.integer :property_id
      t.string :email

      t.timestamps
    end
  end
end
