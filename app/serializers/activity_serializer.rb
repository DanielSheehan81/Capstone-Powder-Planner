class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :description, :checked, :date
  has_one :user
  has_one :resort
end
