class PostsController < ApplicationController

  respond_to :json

  def index

    @posts = Post.all

    respond_with(@posts) do |format|
      format.json { render :json => @posts.as_json }
    end
  end

  def show

    @post = Post.find(params[:id])
  
    respond_to do |format|
      format.json { render json: @post }
    end
  end  
end
