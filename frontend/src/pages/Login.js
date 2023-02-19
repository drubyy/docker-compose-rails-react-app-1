import React from 'react'
import '../css/pages/login.css'
import '../css/pages/util.css'
import request from '../services/request'
import { Form } from 'antd'

function Login() {
  const [form] = Form.useForm()

  const submitLogin = async () => {
    const formValues = form.getFieldsValue()
    const response = await request('POST', '/login', formValues)
    if(response.status === 401){
      form.setFields([
        {
          name: ['user', 'email'],
          errors: [response.data.error]
        },
        {
          name: ['user', 'password'],
          errors: [response.data.error]
        }
      ])
    }else{
      // just fake auth, not reality
      localStorage.setItem("loggedIn", true)
      localStorage.setItem("userId", response.data.id)
      localStorage.setItem("userEmail", response.data.email)
      window.location.href = "/"
    }
  }

  return (
    <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <Form onFinish={submitLogin} form={form} className="login100-form validate-form">
                <span className="login100-form-title p-b-26">
                  Welcome
                </span>
                <span className="login100-form-title p-b-48">
                  <i className="zmdi zmdi-font" />
                </span>
                <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                  <Form.Item name={["user", "email"]}>
                    <input className="input100" type="text" name="email" placeholder='Email' />
                  </Form.Item>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Enter password">
                  <span className="btn-show-pass">
                    <i className="zmdi zmdi-eye" />
                  </span>
                  <Form.Item name={["user", "password"]}>
                  <input className="input100" type="password" name="pass" placeholder='Password' />
                  </Form.Item>                  
                </div>
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button className="login100-form-btn">
                      Login
                    </button>
                  </div>
                </div>
                <div className="text-center p-t-115">
                  <span className="txt1">
                    Don’t have an account?
                  </span>
                  <a className="txt2" href="/register">
                    Sign Up
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

export default Login;