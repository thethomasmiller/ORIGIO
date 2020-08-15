class CommentsController < ApplicationController
  before_action :set_comment, only: [ :update] 
  before_action :authorize_request, only: [:create, :update, :destroy, :add_comment]

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  # GET /comments/1
  def show
    @idea = Idea.find(params[:idea_id])
    @comment = Comment.find(params[:id])
    render json: @comment
  end

  # POST /comments
  def create
    @idea = Idea.find(params[:idea_id])
    @comment = Comment.where(idea_id: @idea.id).new(comment_params)
    @comment.user = @current_user

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @idea = Idea.find(params[:idea_id])
    @comment = Comment.find(params[:id])
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:body)
    end
end
