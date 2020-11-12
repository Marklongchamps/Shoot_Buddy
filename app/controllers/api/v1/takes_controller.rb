class Api::V1::TakesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token, :only => :create
  
  def index
    
    takes = Take.all
    
   
    render json: takes
    # binding.pry
  end





  def show
  
    take = Script.find(params[:id])
    render json: take, serializer: TakeSerializer 

  end

  def create
    # binding.pry
    shot = Shot.find(params[:shot_id])
    # binding.pry
    new_take = Take.new()
    new_take.take = params["take"]
    # new_take.shot_id = params["shot_id"]
    new_take.shot_id = shot.id
    # binding.pry
    if new_take.save!
      render json: new_take, serializer: TakeSerializer
    
    else
      render json: { errors: new_take.errors }
    end
  end

  private
  def take_params
    params.permit(:take, :shot_id, :script_id, :format)
  end


end

