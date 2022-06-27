# == Schema Information
#
# Table name: categories
#
#  id          :bigint           not null, primary key
#  category    :string
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Category < ApplicationRecord
    has_many :expenses

    validates :description, presence: true;
    validates :category, presence: true, uniqueness: true

    before_create :standarize_name
    before_update :standarize_name

    def standarize_name
        category.capitalize!
    end
end
