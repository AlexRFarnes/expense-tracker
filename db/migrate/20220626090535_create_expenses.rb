class CreateExpenses < ActiveRecord::Migration[6.1]
  def change
    create_table :expenses do |t|
      t.string :title
      t.string :description
      t.decimal :amount, precision: 10, scale: 2
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
