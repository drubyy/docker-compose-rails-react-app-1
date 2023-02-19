class Api::SubjectsController < Api::BaseController
  def index
    subjects = current_user.subjects.includes(:tasks)
    render_json({subjects: subjects.as_json(methods: :ordered_tasks)}, :ok)
  end

  def create
    subject = current_user.subjects.new(subject_params)
    return render_json({id: subject.id}, :ok) if subject.save

    render_json({errors: subject.errors}, :unprocessable_entity)
  end

  private

  def subject_params
    params.require(:subject).permit(Subject::ALLOW_PARAMS)
  end
end
