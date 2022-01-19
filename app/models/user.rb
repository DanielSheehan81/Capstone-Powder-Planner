class User < ApplicationRecord
  has_secure_password

    has_many :activities
    has_many :resorts, through: :activities
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    # validates :password_digest,
    #         presence: true,
    #         length: {
    #           within: 6..40,
    #         }
    validates :username, presence: true, length: {within: 2..15}
end
