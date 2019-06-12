class Landlord < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

	# has_many :properties
	# has_many :tenants, through: :properties

	has_many :tenants
	has_many :properties, through: :tenants

	validates_presence_of :firstname, :lastname

	def fullname
		"#{self.firstname} #{self.lastname}"
	end

end
