class User < ApplicationRecord
  has_secure_password

  has_many :idea, dependent: :destroy
  has_many :comment, dependent: :destroy

  validates :name, presence: true
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }

end
