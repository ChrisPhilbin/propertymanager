class Tenant < ApplicationRecord

	# belongs_to :property

	belongs_to :landlord
	belongs_to :property

	validates_presence_of :firstname, :lastname, :email

	accepts_nested_attributes_for :landlord, :property

	def fullname
		"#{self.firstname} + #{self.lastname}"
	end
	
end
