class CreateShots < ActiveRecord::Migration[5.2]
  def change
    create_table :shots do |t|
      t.belongs_to :script, null: false
      t.integer :shot_number, null: false
      t.string :description, null: false
      t.string :dialogue
      t.string :notes
      
      t.timestamps

    end
  end
end
