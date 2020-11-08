class AddStoryBoardPhotoToShot < ActiveRecord::Migration[5.2]
  def change
    add_column :shots, :story_board_photo, :string
  end
end
