class TakeSerializer < ActiveModel::Serializer
  attributes :id, :take, :time

  belongs_to :shot
end

