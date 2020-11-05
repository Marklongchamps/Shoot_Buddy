class CreateTakes < ActiveRecord::Migration[5.2]
  def change
    create_table :takes do |t|
      t.belongs_to :shot, null: false
      t.text :take

      t.timestamps
    end
  end
end
