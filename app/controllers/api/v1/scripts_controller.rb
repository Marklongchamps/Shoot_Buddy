class Api::V1::ScriptsController < ApplicationController
  # before_action :authenticate_user!

  def index
    scripts = Script.all
   
    render json: scripts
  end

  def show
    script = Script.find(params[:id])
    render json: script, serializer: ScriptSerializer 
  end

  def create
   
    new_script = Script.new(script_params)
    binding.pry
  
    if new_script.save
      render json: new_script
    else
      render json: { errors: new_script.errors }
  end
end

private
    def script_params
      params.require(:script).permit([:name_of_promo, :description])
    end


end

  

