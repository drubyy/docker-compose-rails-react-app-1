import React, { useEffect } from 'react'
import '../css/pages/login.css'
import '../css/pages/util.css'
import request from '../services/request';
import { Form } from 'antd'

function Registration() {
  const [form] = Form.useForm()

  const submitRegistration = async () => {
    const formValues = form.getFieldsValue()
    const response = await request('POST', '/users', formValues)
    if(response.status === 422){
      for (const [key, value] of Object.entries(response.data.errors)) {
        form.setFields([{
          name: ['user', key],
          errors: value
        }])
      }
    }else{
      window.location.href = "/login"
    }
  }

  return (
    <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <Form form={form} onFinish={submitRegistration} className="login100-form validate-form">
                <span className="login100-form-title p-b-26">
                  Register
                </span>
                <span className="login100-form-title p-b-48">
                  <i className="zmdi zmdi-font" />
                </span>
                <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                  <Form.Item name={["user", "email"]}>
                    <input className="input100" required={true} type="text" name="user[email]" placeholder='Email' />
                  </Form.Item>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Enter password">
                  <span className="btn-show-pass">
                    <i className="zmdi zmdi-eye" />
                  </span>
                  <Form.Item name={["user", "password"]}>
                    <input className="input100" required={true} type="password" name="user[password]" placeholder='Password' />
                  </Form.Item>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Enter password">
                  <span className="btn-show-pass">
                    <i className="zmdi zmdi-eye" />
                  </span>
                  <Form.Item name={["user", "password_confirmation"]}>
                    <input className="input100" type="password" required={true} name="user[password_confirmation]" placeholder='Password confirmation' />
                  </Form.Item>
                </div>
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button type='submit' className="login100-form-btn">
                      Register
                    </button>
                  </div>
                </div>
                <div className="text-center p-t-115">
                  <span className="txt1">
                    You have an account?
                  </span>
                  <a className="txt2" href="/login">
                    Sign In
                  </a>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
      </div>
  );
}

export default Registration;