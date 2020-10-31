class Script < ApplicationRecord

  validates :name_of_promo, presence: true
  
  validates :description, presence: true

end





