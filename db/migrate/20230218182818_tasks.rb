class Tasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.integer :user_id
      t.date :start_date
      t.date :due_date
      t.integer :status
      t.integer :subject_id

      t.timestamps
    end
  end
end
