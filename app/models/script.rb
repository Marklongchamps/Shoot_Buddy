class Script < ApplicationRecord
  has_many :shots

  validates :name_of_promo, presence: true
  validates :description, presence: true

end





