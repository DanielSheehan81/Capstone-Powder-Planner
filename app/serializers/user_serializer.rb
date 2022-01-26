class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :username, :password_digest
  has_many :activities
  has_many :resorts
end
