class Shot < ApplicationRecord
  belongs_to :script
  has_many :takes

  validates :shot_number, presence: true
  validates :description, presence: true

end



