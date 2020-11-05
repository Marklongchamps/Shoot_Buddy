class TakeSerializer < ActiveModel::Serializer
  attributes :id, :take

  belongs_to :shot
end

