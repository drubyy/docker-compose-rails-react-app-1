import React from 'react';
import '../../../css/components/others/task/add_task.css';
import { Button } from 'antd';

function AddTask({callback}) {
  return (
    <div className='add-task-wrapper task'>
      <Button className="task-btn" type="primary" onClick={() => callback()}>Add Task</Button>
    </div>
  );
}

export default AddTask;