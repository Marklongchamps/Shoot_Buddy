class Script < ApplicationRecord
  has_many :shots, dependent: :destroy

  validates :name_of_promo, presence: true
  validates :description, presence: true

  belongs_to :user
end





