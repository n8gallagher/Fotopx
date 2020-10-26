class Photo < ApplicationRecord
    validates :title, :description, presence: true

    has_one_attached :image

    has_many :likes
end
