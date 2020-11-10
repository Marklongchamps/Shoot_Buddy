class ShotSerializer < ActiveModel::Serializer
  attributes :id, :shot_number, :description, :dialogue, :notes, :script_id, :story_board_photo

  has_many :takes
  belongs_to :script
end

