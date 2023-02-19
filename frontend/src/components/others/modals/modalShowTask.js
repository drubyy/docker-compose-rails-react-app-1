import { Modal } from 'antd';
import { useState } from 'react';
import { Progress, Row, Col } from 'antd'

const ModalShowTask = ({isOpen, setOpen, task, callback, width=500, ...props}) => {
  const handleOk = async() => {
    callback()
    setOpen(false)
  };
  const handleCancel = () => {
    setOpen(false)
  };
  return (
    <>
      <Modal
        title={task.title}
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={width}
        okText="Edit"
        {...props}
      >
        <Row>
          <Col span={8}><Progress type="circle" percent={task.percent} /></Col>
          <Col span={16}>
            <div>
              <p>Start date: {task.start_date}</p>
              <p>Due date: {task.start_date}</p>
              <p>Description: {task.description}</p>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default ModalShowTask;