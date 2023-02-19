class ChangeTableTasks < ActiveRecord::Migration[6.1]
  def up
    change_column_default :tasks, :status, 0
    add_column :tasks, :percent, :integer, default: 0
  end
  
  def down
    change_column_default :tasks, :status, 0
    remove_column :tasks, :percent
  end
end
