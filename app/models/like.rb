class Like < ApplicationRecord
  belongs_to :user
  validates_presence_of :value, :user_id
  
end
