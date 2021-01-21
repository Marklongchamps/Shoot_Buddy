class HomesController < ApplicationController
  before_action :authenticate_user!
  
  def index

  def authenticated
  end

  def authorized
  end

  protected_methods

  def authenticate_user
    if !user_signed_in? || !(current_user.role == "admin")
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end
end
end
