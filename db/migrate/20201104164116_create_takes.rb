class CreateTakes < ActiveRecord::Migration[5.2]
  def change
    create_table :takes do |t|
      t.belongs_to :shot, null: false
      t.text :take
      t.text :time

      t.timestamps
    end
  end
end
