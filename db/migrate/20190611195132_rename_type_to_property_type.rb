class RenameTypeToPropertyType < ActiveRecord::Migration[5.2]
  def change
  	rename_column :properties, :type, :propertytype
  end
end
