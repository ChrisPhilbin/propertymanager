class Property < ApplicationRecord

	belongs_to :landlord

	has_many :tenants, dependent: :destroy
	# deleting a property will also remove any tenants associated with the property

	validates_presence_of :propertytype, :city, :state, :zip, :street

	accepts_nested_attributes_for :landlord

	has_one_attached :photo

	def fulladdress
		"#{self.street} #{self.city}, #{self.state} #{self.zip}"
	end

end
