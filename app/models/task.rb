class Task < ApplicationRecord
  ALLOW_PARAMS = %w[title description start_date due_date subject_id percent].freeze

  enum status: { todo: 0, inprogress: 1, completed: 2 }

  validates :title, :start_date, :due_date, presence: true
  validate :validate_schedule

  private

  def validate_schedule
    return unless start_date.present? && due_date.present?

    return if start_date <= due_date

    self.errors.add(:start_date, "must be before duedate")
  end
end
