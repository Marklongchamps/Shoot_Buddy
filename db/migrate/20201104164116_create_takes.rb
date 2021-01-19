class CreateTakes < ActiveRecord::Migration[5.2]
  def change
    create_table :takes do |t|
      t.belongs_to :shot, null: false
      t.integer :take
      t.text :time
      t.string :notes

      t.timestamps
    end
  end
end
