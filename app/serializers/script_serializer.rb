class ScriptSerializer < ActiveModel::Serializer
  attributes :id, :name_of_promo, :description

  has_many :shots
end


