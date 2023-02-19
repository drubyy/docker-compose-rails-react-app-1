class Api::TasksController < Api::BaseController
  before_action :load_task, only: %i[show update destroy]

  def create
    task = current_user.tasks.new(task_params)
    return render_json({id: task.id}, :ok) if task.save
      
    render_json({errors: task.errors}, :unprocessable_entity)
  end

  def update
    return render_json({id: @task.id}, :ok) if @task.update(task_params)
      
    render_json({errors: @task.errors}, :unprocessable_entity)
  end

  private

  def task_params
    params.require(:task).permit(Task::ALLOW_PARAMS)
  end

  def load_task
    @task = current_user.tasks.find_by(id: params[:id])

    return if @task
    render_json({error: :not_found}, :not_found)
  end
end
