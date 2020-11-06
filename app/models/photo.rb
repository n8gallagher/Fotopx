class Photo < ApplicationRecord
    validates :title, :description, presence: true

    belongs_to :user

    has_one_attached :image

    has_many :likes
end
