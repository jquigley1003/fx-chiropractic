class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  # before_filter :authenticate_user!, except: [ :index, :show ]
  # before_filter :block_postings!, except: [ :index, :show ]
  after_action :set_csrf_cookie_for_ng

  respond_to :json

  def index    
  end

protected

  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end

private

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  # def block_postings!
  #   unless current_user.admin?
  #     flash[:notice] = 'You are banned for being naughty!'

  #     redirect_to root_path

  #     return false
  #   end
  # end
end