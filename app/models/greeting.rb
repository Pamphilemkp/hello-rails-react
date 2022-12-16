class Greeting < ApplicationRecord
  validates :name, presence: true, allow_blank: false
end
