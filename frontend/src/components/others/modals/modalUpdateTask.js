import { Modal } from 'antd';
import { useEffect, useState } from 'react';
import { Input, Form, DatePicker } from 'antd'
import request from '../../../services/request'
import ClearFormErrors from '../../../helpers/clearFormErrors';
import moment from 'moment';
import _cloneDeep from 'lodash/cloneDeep'

const ModalUpdateTask = ({isOpen, setOpen, task, callback, width=1000, ...props}) => {
  const [form] = Form.useForm()
  const [confirmLoading, setConfirmLoading] = useState(false);

  useEffect(() => {
    const clone = _cloneDeep(task);
    for (let [key, value] of Object.entries(clone)) {
      if(value !== null) {
        if(['due_date', 'start_date'].includes(key)){
          const date = value
          value = moment(date)
        }
        form.setFields([{
          name: ['task', key],
          value: value
        }])
      }
    }
  }, [task])
  
  const handleOk = async() => {
    const formValues = form.getFieldsValue()
    setConfirmLoading(true)
    const response = await request('PATCH', `/tasks/${task.id}`, {user_id: localStorage.getItem("userId"), ...formValues})
    if(response.status === 200){
      await callback()
      setConfirmLoading(false)
      setOpen(false)
      ClearFormErrors(form)
    }else{
      ClearFormErrors(form)
      for (const [key, value] of Object.entries(response.data.errors)) {
        form.setFields([{
          name: ['task', key],
          errors: value
        }])
      }
      setConfirmLoading(false)
    }
  };
  const handleCancel = () => {
    ClearFormErrors(form)
    setConfirmLoading(false)
    setOpen(false);
  };
  return (
    <>
      <Modal
        title={`Update for task: ${task.title}`}
        open={isOpen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={width}
        mask={false}
        {...props}
      >
        <Form form={form}>
          <Form.Item name={["task", "title"]}>
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item name={["task", "description"]}>
            <Input placeholder="description" />
          </Form.Item>
          <Form.Item name={["task", "start_date"]}>
            <DatePicker style={{ width: '100%' }} placeholder="Start date" />
          </Form.Item>
          <Form.Item name={["task", "due_date"]}>
            <DatePicker style={{ width: '100%' }} placeholder="Due date" />
          </Form.Item>
          <Form.Item name={["task", "percent"]}>
            <Input style={{ width: '100%' }} placeholder="Percent completed" />
          </Form.Item>
          <Form.Item rules={[{ min:0, max: 100 }]} name={["task", "subject_id"]}>
            <Input hidden={true} style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ModalUpdateTask;