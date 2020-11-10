class Api::V1::ShotsController < ApplicationController
   protect_from_forgery unless: -> { request.format.json? }
   skip_before_action :verify_authenticity_token, :only => :create
  def index
    shots = Shot.all
   
    render json: shots
  end

  def show
    
    shot = Shot.find(params[:id])
    render json: shot, serializer: ShotSerializer 
  end

  def create
    binding.pry
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
    params.permit(:shot_number, :description, :dialogue, :notes, :story_board_photo, :script_id, :photo)
  end

end
