class Property < ApplicationRecord

	belongs_to :landlord
	has_many :tenants

	validates_presence_of :type, :city, :state, :zip, :street

	accepts_nested_attributes_for :landlord
	
end
