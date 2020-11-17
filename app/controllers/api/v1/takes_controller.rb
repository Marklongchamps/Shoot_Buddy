class Api::V1::TakesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token, :only => :create
  
  def index

    takes = Take.all
    render json: takes
  end

  def show
    
    take = Take.find(params[:id])
    render json: take, serializer: TakeSerializer 
  end

  def destroy

    take = Take.find(params[:id])
      if take.destroy
        render json: {destroyed: true}
      end
  end

  def edit
    
    render json: Take.find(params[:id]),
    serializer: TakeSerializer
  end

  def update
    
    take = Take.find(params[:id])
    
    if take.update(take_params)
      render json: take
     
    else
      render json: { errors: script.errors.full_messages }
    end
  end

  def create
    
    shot = Shot.find(params[:shot_id])
    
    new_take = Take.new()
    new_take.take = params["take"]
    
    new_take.shot_id = shot.id
    
    if new_take.save!
      render json: new_take, serializer: TakeSerializer
    
    else
      render json: { errors: new_take.errors }
    
  end
end


private
    def take_params
      params.permit(:take, :shot_id,  :format)
    end
 end
#took out script_id may mess up adding new take
