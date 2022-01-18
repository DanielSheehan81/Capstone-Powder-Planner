class User < ApplicationRecord
    has_many :activities
    has_many :resorts, through: :activities
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    validates :password,
            presence: true,
            length: {
              within: 6..40,
            },
            on: :create
    validates :username, presence: true, length: {within: 2..15}
end
