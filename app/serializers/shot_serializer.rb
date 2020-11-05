class ShotSerializer < ActiveModel::Serializer
  attributes :id, :shot_number, :description, :dialogue, :notes

  has_many :takes
  belongs_to :script
end

