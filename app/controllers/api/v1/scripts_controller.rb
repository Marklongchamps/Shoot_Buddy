class Api::V1::ScriptsController < ApplicationController
  # before_action :authenticate_user!
  protect_from_forgery unless: -> { request.format.json? }
  def index
    
    scripts = Script.all
    
   
    render json: scripts
    # binding.pry
  end
  
  def show
    
    script = Script.find(params[:id])
    render json: script, serializer: ScriptSerializer 
  end

  def create
   
    new_script = Script.new(script_params)
  
  
    if new_script.save
      render json: new_script
    else
      render json: { errors: new_script.errors }
  end
end

private
    def script_params
      params.require(:script).permit(:name_of_promo, :description, :story_board_photo)
    end


end

  

