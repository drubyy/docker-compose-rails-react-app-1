class Subject < ApplicationRecord
  ALLOW_PARAMS = %w[title description]

  belongs_to :user
  has_many :tasks

  validates :title, presence: true

  def ordered_tasks
    tasks.order(due_date: :asc)
  end
end
