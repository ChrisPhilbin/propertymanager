class CreateProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.string :type
      t.string :city
      t.string :state
      t.integer :zip
      t.string :street
      t.integer :landlord_id

      t.timestamps
    end
  end
end
