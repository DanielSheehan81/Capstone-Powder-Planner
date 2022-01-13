class User < ApplicationRecord
    has_many :activities
    has_many :resorts, through: :activities
end
