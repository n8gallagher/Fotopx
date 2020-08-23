class Photo < ApplicationRecord
    validates :title, :description, presence: true

    has_one_attached :image
end
