class PostsController < ApplicationController

  respond_to :json

  def index

    respond_with Post.all()    
    # @posts = Post.all

    # respond_with(@posts) do |format|
    #   format.json { render :json => @posts.as_json }
    # end
  end

  def show
    respond_with Post.find(params[:id])
    
    # @post = Post.find(params[:id])
  
    # respond_to do |format|
    #   format.json { render json: @post }
    # end
  end

  def create
    respond_with Post.create(post_params)
  end

  def update
    respond_with Post.find(params[:id]).update(post_params)
  end

  def destroy
    respond_with Post.find(params[:id]).destroy
  end

  private

  def post_params
    params.require(:post).permit(:title, :contents)
  end  
end
