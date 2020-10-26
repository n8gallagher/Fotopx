class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :photo_id, null: false
      t.integer :user_id, null: false
      t.integer :value, default: 0
      t.timestamps
    end
  end
end
