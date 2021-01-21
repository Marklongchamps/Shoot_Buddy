class CreateScripts < ActiveRecord::Migration[5.2]
  def change
    create_table :scripts do |t|
      t.string :name_of_promo, null: false
      t.string :description, null: false
      t.belongs_to :user, null: false
      
      t.timestamps
    end
  end
end
