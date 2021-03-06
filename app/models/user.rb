# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :session_token, presence: true, uniqueness: true
    validates :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    before_create :set_default_profile_image

    attr_reader :password

    after_initialize :ensure_session_token

    has_many :likes, dependent: :destroy

    has_many :photos, dependent: :destroy

    has_one_attached :profile_image

    has_one_attached :cover_image

    def set_default_profile_image
        
    end

    def self.find_by_credentials(username, password)
        user = self.find_by(username: username)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
