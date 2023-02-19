class Subjects < ActiveRecord::Migration[6.1]
  def change
    create_table :subjects do |t|
      t.string :title
      t.string :color_code
      t.text :description
      t.integer :user_id

      t.timestamps
    end
  end
end
