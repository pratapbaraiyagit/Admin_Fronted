import { useState } from 'react';
import axios from 'axios';
import OtpInput from 'react-otp-input';
import { ToastContainer, toast } from 'react-toastify';
import * as yup from "yup";
import { Formik, Form } from 'formik';
import { MdPassword } from 'react-icons/md';
import { AiFillMail } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import './forgotPassword.scss'
import { useNavigate } from "react-router-dom";
import Heding from '../../Components/Heading/Heading';
// import {img_mainLogo, img_loginBg} from "../../Assets/images"
import logo from '../../Assets/logo-2.svg'
import img_loginBg from '../../Assets/main-back.svg'

function ForgotPassword() {
  const [otp, setotp] = useState('');
  const [isEmailSend, setSendEmail] = useState(false);
  const navigate = useNavigate()

  const yupsolver3 = yup.object({
    Email: yup.string().email('Email is invalid').required('Email is required'),
  })
  const yupChangePass = yup.object({
    Password: yup.string().min(6, 'Password must contain atleast 6 characters').required('password is required'),
    CPassword: yup.string().min(6, 'Confirm Password must contain atleast 6 characters').required('Confirm Password is required').oneOf([yup.ref('Password'), null], 'Passwords must match'),
  })
  return (
    <div style={{ paddingTop: '95px' }} className="loginContainer">
      <ToastContainer />
      <div className='topBg'
        style={{ background: `url(${img_loginBg})` }}
      />
      <div className="container px-5 bg-white" style={{ zIndex: 2, borderRadius: '30%' }}>
        <div className="mx-lg-5 py-5 mb-3  px-lg-5 login ">
          <div className='mx-lg-5 py-3 mb-3  px-lg-5 d-flex justify-content-center'>
            <img src={logo} alt="Logo" className='d-flex center' />
          </div>
          <Heding mainheding='Forgot Password' secondheading='Create New Password' mode='center' className='pb-4 pt-2' />
          {otp.length < 6 ? (
            <Formik
              initialValues={{}}
              validationSchema={yupsolver3}
              onSubmit={(values) => {
                console.log("📢[Login.jsx:122]: values: ", values);
                setSendEmail(true)
                //   axios.post(`http://localhost:4000/api/user/login`, values)
                //     .then(res => {
                //       localStorage.setItem('user', JSON.stringify(res.data))
                //       toast.success(res.data.message)
                //       navigate('/');
                //     }).catch(err => {
                //       console.log("📢[Login.jsx:192]: err: ", err);
                //       toast.error(err.response.data.message)
                //     })
              }}
            >
              {({
                values,
                errors,
                handleChange,
              }) => (
                <>
                  <Form >
                    <div className="my-4">
                      <div className="form-floating ">
                        <input type="text" className="form-control" name='Email' placeholder="Email" defaultValue={values.Email}
                          onChange={handleChange} />
                        <label >Enter Exiting Email</label>
                        <p href="" className='input_icon'><AiFillMail /></p>
                      </div>
                      {errors.Email ? <div className='error'>{errors.Email}</div> : null}
                    </div>
                    {isEmailSend && (
                      <div className="my-3">
                        <div className="form-floating ">
                          <OtpInput
                            value={otp}
                            onChange={(e) => {
                              setotp(e)
                            }}
                            containerStyle={{
                              width: '100%',
                              display: 'flex',
                              justifyContent: 'evenly'
                            }}
                            inputStyle={{
                              width: '50%',
                              margin: 'auto',
                              display: 'block',
                              height: '50px'
                            }}
                            numInputs={6}
                          />
                        </div>
                      </div>
                    )}
                    <button className='active_Servicesbtn px-4 py-3 my-3 w-100' type='submit'>
                      Submit
                    </button>
                  </Form>
                </>
              )}
            </Formik>
          ) : (
            <Formik
              initialValues={{ Email: '', Password: '' }}
              validationSchema={yupChangePass}
              onSubmit={(values) => {
                navigate('/')
              }}
            >
              {({
                values,
                errors,
                handleChange,
              }) => (
                <>
                  <Form >
                    <div className="my-3">
                      <div className="form-floating ">
                        {console.log("values.Password::", values.Password)}
                        <input type="Password" className="form-control" name='Password' placeholder="Password" defaultValue={values.Password} onChange={handleChange} />

                        <label >Password</label>
                        <p href="" className='input_icon'><MdPassword /></p>
                      </div>
                      {errors.Password ? <div className='error'>{errors.Password}</div> : null}
                    </div>
                    <div className="my-3">
                      <div className="form-floating ">
                        <input type="Password" className="form-control" name='CPassword' placeholder="Confirm Password" defaultValue={values.CPassword}
                          onChange={handleChange} />
                        <label >Confirm Password</label>
                        <p href="" className='input_icon'><MdPassword /></p>
                      </div>
                      {errors.CPassword ? <div className='error'>{errors.CPassword}</div> : null}
                    </div>
                    <button className='active_Servicesbtn px-4 py-3 my-3 w-100' type='submit' >
                      Submit
                    </button>
                  </Form>
                </>
              )}
            </Formik>
          )}
        </div>
      </div>
      <div className='bottomBg'
        style={{ background: `url(${img_loginBg})` }}
      />
    </div>
  )
}

export default ForgotPassword