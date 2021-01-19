class TakeSerializer < ActiveModel::Serializer
  attributes :id, :take, :time, :notes

  belongs_to :shot
end

