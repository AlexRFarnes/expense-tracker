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
class ExpenseSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :amount, :category_id, :month
end
