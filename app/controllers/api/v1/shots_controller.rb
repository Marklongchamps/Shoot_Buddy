class Api::V1::ShotsController < ApplicationController

  def create
    
    script = Script.find(params[:script_id])
    
    new_shot = Shot.new(shot_params)
    new_shot.script_id = (params[:script_id])
    
    
    if new_shot.save
      render json: new_shot
      
    else
      render json: { errors: new_shot.errors}
    end
  end


private
def shot_params
  params.require(:shot).permit(:shot_number, :description, :dialogue, :notes)
end

end
