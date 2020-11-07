class Api::V1::TakesController < ApplicationController


  def show
    
    take = Script.find(params[:id])
    render json: take, serializer: TakeSerializer 
  end





  def create
    
    shot = Shot.find(params[:shot_id])
    
    # binding.pry
    new_take = Take.new(params)
    # binding.pry
    new_take.shot = shot
    # binding.pry
    if new_take.save
      render json: new_take, serializer: TakeSerializer
    
    else
      render json: { errors: new_take.errors }

  end

  private
  def take_params
    params.require(:take).permit(:take, :id, :controller, :action, :script_id, :shoot_id)
  end


end
end
