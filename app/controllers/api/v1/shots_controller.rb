class Api::V1::ShotsController < ApplicationController
  
  def index
    shots = Shot.all
   
    render json: shots
  end

  def show
    binding.pry
    shot = Shot.find(params[:script_id],[:shot_id])
    render json: shot, serializer: ShotSerializer 
  end


  def create
    
    script = Script.find(params[:script_id])
    
    new_shot = Shot.new(shot_params)
    new_shot.script = script
    
    if new_shot.save
      render json: new_shot, serializer: ShotSerializer 
      
    else
      render json: { errors: new_shot.errors}
    end
  end

  

private
def shot_params
  params.require(:shot).permit(:shot_number, :description, :dialogue, :notes)
end

end
