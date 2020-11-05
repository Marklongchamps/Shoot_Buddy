class Api::V1::TakesController < ApplicationController

  def create
    binding.pry
    script = Script.find(params[:script_id])

    new_take = Take.new(shot_params)
    
    #make id for take here

  end




end
