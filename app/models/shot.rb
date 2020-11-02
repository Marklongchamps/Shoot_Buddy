class Shot < ApplicationRecord
  belongs_to :script

  validates :shot_number, presence: true
  validates :description, presence: true

end



