class PostsController < ApplicationController
  
  before_filter :authenticate_user!, except: [ :index, :show ]
  before_filter :process_params, only: [:create, :update]
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
    # if params(:image)
    #   respond_with Post.find(params[:id]).update(post_params_img)
    # else
      respond_with Post.find(params[:id]).update(post_params)
    # end
  end

  # def update
  #   result = { status: "failed" }

  #   begin
  #     params[:image] = parse_image_data(params[:image]) if params[:image]
  #     post = respond_with Post.find(params[:id]).update(post_params)

  #     if post
  #       result[:status] = "success"
  #     end
  #   rescue Exception => e
  #     Rails.logger.error "#{e.message}"
  #   end


  #   ensure
  #     clean_tempfile
  #   end


  def destroy
    respond_with Post.find(params[:id]).destroy
  end


  def file_attachment_url
    @post =  Post.find(params[:id])
    @post[:image_url] = @post.image.url(:medium)
    respond_with(@post.as_json)
  end

  private

  def post_params
    params.fetch(:post, {}).permit(:title, :contents, :image)
  end

  # def parse_image_data(image_data)
  #   @tempfile = Tempfile.new(params[:image])
  #   @tempfile.binmode
  #   @tempfile.write Base64.decode64(image_data[:content])
  #   @tempfile.rewind

  #   uploaded_file = ActionDispatch::Http::UploadedFile.new(
  #     tempfile: @tempfile,
  #     filename: image_data[:filename]
  #   )

  #  uploaded_file.content_type = image_data[:content_type]
  #   uploaded_file
  # end

  # def clean_tempfile
  #   if @tempfile
  #     @tempfile.close
  #     @tempfile.unlink
  #   end
  # end

  def post_params_img
    params.require(:post).permit(:post, :title, :contents, :image)
  end

  def process_params
    if params[:file]
      params[:post][:image] = params[:file]
    end
  end
end
