class Api::V1::ShotsController < ApplicationController
  before_action :authenticate_user!
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

  def destroy
    shot = Shot.find(params[:id])
      if shot.destroy
        render json: {destroyed: true}
      end
  end


  def update
    
    shot = Shot.find(params[:id])
binding.pry
      if shot.update(shot_params)
        render json: shot
      else render json: { errors: script.errors.full_messages }
      end
  end
  
  def create
    script = Script.find(params[:script_id])
    new_shot = Shot.new(shot_params)
    new_shot.script = script
    # binding.pry
    if new_shot.save
      render json: new_shot, serializer: ShotSerializer  
    else
      render json: { errors: new_shot.errors}
  end

  def edit
    
      render json: Shot.find(params[:id]),
      serializer: ShotSerializer
  end
end

  


  private
    def shot_params
    params.permit(:shot_number, :description, :dialogue, :notes, :story_board_photo, :script_id, :photo, :shot)
    end
end
