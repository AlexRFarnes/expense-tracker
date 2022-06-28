# == Schema Information
#
# Table name: expenses
#
#  id          :bigint           not null, primary key
#  amount      :decimal(10, 2)
#  description :string
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :bigint           not null
#
# Indexes
#
#  index_expenses_on_category_id  (category_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#
class Expense < ApplicationRecord
    belongs_to :category

    validates :amount, :title, :description, :category_id, presence: true

    validates :amount, numericality: { greater_than: 0 }

    def day
      self.created_at.strftime("%b %e, %Y")
    end

    def month
      self.created_at.strftime("%b, %Y")
    end

end
