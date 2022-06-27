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
class CategorySerializer
  include JSONAPI::Serializer
  attributes :category, :description, :total_expenses
  has_many :expenses

  meta do |category|
    {
      grouped_expenses: category.expenses.group_by(&:month)
    }
  end

end
