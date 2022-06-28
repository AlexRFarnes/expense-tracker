module Api
    module V1
        class CategoriesController < ApplicationController
            protect_from_forgery with: :null_session
            before_action :set_category, only: %i[ show show_all edit update destroy ]

            def index
                categories = Category.all

                render json: CategorySerializer.new(categories).serializable_hash.to_json
            end

            def show 
                render json: CategorySerializer.new(@category).serializable_hash.to_json
            end

            def create
                category = Category.new(category_params)

                if category.save
                    render json: CategorySerializer.new(category).serializable_hash.to_json
                else 
                    render json: { error: category.errors.messages }, status: 422
                end
            end

            def update
                if @category.update(category_params)
                    render json: CategorySerializer.new(@category).serializable_hash.to_json
                else 
                    render json: { error: @category.errors.messages }, status: 422
                end
            end

            def destroy
                if @category.destroy
                    head :no_content
                else 
                    render json: { error: @category.errors.messages }, status: 422
                end
            end


            private
            # Use callbacks to share common setup or constraints between actions.
            def set_category
              @category = Category.find(params[:id])
            end

            # Only allow a list of trusted parameters through.
            def category_params
                params.permit(:category, :description)
            end

            # Include in the payload the expenses data associated with a category
            def options
                @options ||= { include: %i[expenses]}
            end

        end
    end
end