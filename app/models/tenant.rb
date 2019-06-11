class Tenant < ApplicationRecord

	belongs_to :property

	validates_precence_of :firstname, :lastname, :email

	def fullname
		"#{self.firstname} + #{self.lastname}"
	end
	
end
