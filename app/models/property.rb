class Property < ApplicationRecord

	belongs_to :landlord
	# has_many :tenants

	has_many :tenants
	# has_many :landlords, through: :tenants

	validates_presence_of :propertytype, :city, :state, :zip, :street

	accepts_nested_attributes_for :landlord

	has_one_attached :property_photo

end
