module Api
    module V1
        class ExpensesController < ApplicationController
            protect_from_forgery with: :null_session
            before_action :set_expense, only: %i[ show edit update destroy ]
            
            def show
                render json: ExpenseSerializer.new(@expense).serializable_hash.to_json
            end

            def create
                expense = Expense.new(expense_params)

                if expense.save
                    render json: ExpenseSerializer.new(expense).serializable_hash.to_json
                else 
                    render json: { error: expense.errors.messages }, status: 422
                end
            end

            def update
                if @expense.update(expense_params)
                    render json: ExpenseSerializer.new(@expense).serializable_hash.to_json
                else 
                    render json: { error: @expense.errors.messages }, status: 422
                end
            end

            def destroy
                if @expense.destroy
                    head :no_content
                else 
                    render json: { error: @expense.errors.messages }, status: 422
                end
            end

            private
            # Use callbacks to share common setup or constraints between actions.
            def set_expense
              @expense = Expense.find(params[:id])
            end

            # Only allow a list of trusted parameters through.
            def expense_params
                params.require(:expense).permit(:amount, :description, :title, :category_id)
            end
        end
    end
end
