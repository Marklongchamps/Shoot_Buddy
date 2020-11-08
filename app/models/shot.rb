class Shot < ApplicationRecord
  mount_uploader :story_board_photo, StoryBoardPhotoUploader
  belongs_to :script
  has_many :takes

  validates :shot_number, presence: true
  validates :description, presence: true

end



