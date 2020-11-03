class ShotSerializer < ActiveModel::Serializer
  attributes :id, :shot_number, :description, :dialogue, :notes

  belongs_to :script
end

