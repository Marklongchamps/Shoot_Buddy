class ScriptSerializer < ActiveModel::Serializer
  attributes :id, :name_of_promo, :description, :created_at

  has_many :shots
end


