import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import OtpInput from 'react-otp-input';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup";
import { Formik, Form } from 'formik';
import { MdPassword } from 'react-icons/md';
import { AiFillMail } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import './forgotPassword.scss'
import { Heading } from '../../../Components/AdminPanel'
import { img_mainLogo, img_loginBg } from "../../../Assets/AdminPanel"
import { adminDoResetPassword, adminDoForgotPassword, adminDoForgotPasswordOTP } from '../../../Redux/Actions/AdminPanel/adminAuth';
import Spinner from '../../../Components/Spinner';

function ForgotPassword() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [emailTest, setEmailTest] = useState('')
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('')
  console.log('otpError :>> ', otpError);

  const [modalChange, setModalChange] = useState(1)

  const [isEmailSend, setSendEmail] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const validationForgotPassword = yup.object({
    email: yup.string().email('Please enter valid email').required('Email is required.'),
  })
  const validationNewPassword = yup.object({
    password: yup.string().min(6, 'Password must contain at least 6 characters').required('New password is required.'),
    confirmPassword: yup.string().min(6, 'Confirm password must contain at least 6 characters').required('Confirm password is required.').oneOf([yup.ref('password'), null], 'new password and new confirm password do not match'),
  })

  const adminToken = JSON.parse(localStorage.getItem("ProServAdminToken"))

  useEffect(() => {
    if (adminToken) {
      navigate('/admin/dashboard')
    }
  }, [])

  const onSubmitForgotPassword = (values) => {

    if (emailTest) {
      const otpData = {
        email: values?.email,
        otpCode: otp
      }
      dispatch(adminDoForgotPasswordOTP(otpData))
        .then(res => {
          toast.success(res.message || 'Success')
          setSendEmail(true)
          setModalChange(2)
        })
        .catch(err => {
          console.log('err :>> ', err);
          setOtpError('Please Enter OTP')
          toast.error("OTP must be number")
        })
    } else {
      const data = {
        email: values?.email,
      }
      dispatch(adminDoForgotPassword(data))
        .then(res => {
          toast.success(res.message || 'Success')
          setSpinner(true)
          setSendEmail(true)
          setEmailTest(res.email)
        })
        .catch(err => {
          toast.error(err.message || "Something went wrong")
          setSendEmail(false)
          setSpinner(false)
        })
    }
    setSendEmail(true)
  }

  const onChangeOtp = (e) => {
    setOtp(e)
  }

  const onSubmitChangePassword = (values) => {

    const data = {
      newPassword: values?.password,
      confirmPassword: values?.confirmPassword,
      email: values?.email,
    }

    dispatch(adminDoResetPassword(data))
      .then(res => {
        toast.success(res.message || 'Success')
        setSendEmail(true)
        navigate('/admin/login')
      })
      .catch(err => {
        toast.error(err.message || "Something went wrong")
      })
  }

  return (
    <div style={{ paddingTop: '95px' }} className="loginContainer">
      <ToastContainer />
      <div className='topBg' style={{ background: `url(${img_loginBg})` }} />
      <div className="container px-5 bg-white" style={{ zIndex: 2, borderRadius: '30%' }}>
        <div className="mx-lg-5 py-5 mb-3  px-lg-5 login ">
          <div className='mx-lg-5 py-3 mb-3  px-lg-5 d-flex justify-content-center'>
            <img src={img_mainLogo} alt="Logo" className='d-flex center' />
          </div>
          <Heading mainHeading='Forgot Password' secondHeading='Create New Password' mode='center' className='py-5' width="60%" bg="white" subColor="#E74216" />
          {modalChange == 1 ? (
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={validationForgotPassword}
              validateOnBlur={false}
              onSubmit={onSubmitForgotPassword}
            >
              {(props) => (
                <>
                  <Form >
                    <div className="my-4">
                      <div className="form-floating ">
                        <input
                          type="text"
                          className="form-control"
                          name='email'
                          onChange={props.handleChange}
                          value={props.values.email}
                          placeholder={props.values.email || "email"}
                        />
                        <label >Enter Exiting Email</label>
                        <p href="" className='input_icon'><AiFillMail /></p>
                      </div>
                      {props.errors.email && props.touched.email ? (<div className='error'>{props.errors.email}</div>) : ""}
                    </div>
                    {spinner ? (
                      <div className="my-3">
                        <div className="form-floating ">
                          {isEmailSend &&
                            <OtpInput
                              value={otp}
                              onChange={onChangeOtp}
                              containerStyle={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between'
                              }}
                              inputStyle={{
                                width: '50%',
                                height: '50px'
                              }}
                              numInputs={6}
                            />
                          }
                        </div>
                      </div>
                    ) : (
                      <div style={{ textAlign: 'center' }}>
                        {
                          isEmailSend && <Spinner isSuspense />
                        }
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
              initialValues={{
                email: '',
                password: '',
                confirmPassword: ''

              }}
              validationSchema={validationNewPassword}
              validateOnBlur={false}
              onSubmit={onSubmitChangePassword}
            >
              {(props) => (
                <>
                  <Form >
                    <div className="my-3">
                      <div className="form-floating ">
                        <input
                          type="password"
                          className="form-control"
                          name='password'
                          onChange={props.handleChange}
                          value={props.values.password}
                          placeholder={props.values.password || "Password"}
                        />
                        <label >Password</label>
                        <p href="" className='input_icon'><MdPassword /></p>
                      </div>
                      {props.errors.password && props.errors.password ? (<div className='error'>{props.errors.password}</div>) : null}
                    </div>
                    <div className="my-3">
                      <div className="form-floating ">
                        <input
                          type="password"
                          className="form-control"
                          name='confirmPassword'
                          onChange={props.handleChange}
                          value={props.values.confirmPassword}
                          placeholder={props.values.confirmPassword || "Confirm password"}
                        />
                        <label >Confirm Password</label>
                        <p href="" className='input_icon'><MdPassword /></p>
                      </div>
                      {props.errors.confirmPassword && props.errors.confirmPassword ? (<div className='error'>{props.errors.confirmPassword}</div>) : null}
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
      <div className='bottomBg' style={{ background: `url(${img_loginBg})` }} />
    </div>
  )
}

export default ForgotPassword