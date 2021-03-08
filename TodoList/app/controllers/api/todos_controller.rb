class Api::TodosController < ApplicationController

    skip_before_action :verify_authenticity_token, only: :set_status

    def show
        render json: Todo.find(params[:id])
    end

    def index
        render json: Todo.all
    end

    def create
        @todo = Todo.new(todo_params)
        if @todo.save
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def update
        @todo = Todo.all.find_by(id: params[:id])
        if @todo && @todo.update(todo_params)
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def destroy
        todo = Todo.find(params[:id])
        todo.destroy
        render json: Todo.all
    end

    private

    def todo_params
        params.require(:todo).permit(:title, :body, :done)
    end


end