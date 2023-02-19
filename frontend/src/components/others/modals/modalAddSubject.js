import { Modal } from 'antd';
import { useState } from 'react';
import { Input, Form } from 'antd'
import request from '../../../services/request'
import ClearFormErrors from '../../../helpers/clearFormErrors';

const ModalAddSubject = ({isOpen, setOpen, subjectId, callback, width=1000, ...props}) => {
  const [form] = Form.useForm()
  const [confirmLoading, setConfirmLoading] = useState(false);
  
  const handleOk = async() => {
    const formValues = form.getFieldsValue()
    setConfirmLoading(true)
    const response = await request('POST', '/subjects', {user_id: localStorage.getItem("userId"), ...formValues})
    if(response.status === 200){
      await callback()
      setConfirmLoading(false)
      setOpen(false)
      ClearFormErrors(form)
    }else{
      ClearFormErrors(form)
      for (const [key, value] of Object.entries(response.data.errors)) {
        form.setFields([{
          name: ['subject', key],
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
        title="Add new subject"
        open={isOpen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={width}
        mask={false}
        {...props}
      >
        <Form form={form}>
          <Form.Item name={["subject", "title"]}>
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item name={["subject", "description"]}>
            <Input placeholder="description" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ModalAddSubject;