import React from 'react';
import '../../../css/components/others/task/task.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Progress, Typography } from 'antd'

function Task({data, ...props}) {
  const { Text } = Typography;

  return (
    <div className='task' key={`task-${data.id}`}>
      <Button className="task-btn" {...props}>
        <Row className="row-wrapper-task">
          <Text ellipsis={true} className="title-task">{data.title}</Text>
          <Progress className="progress-bar-task" percent={data.percent} />
        </Row>
      </Button>
    </div>
  );
}

export default Task;