import { ToastContainer, toast } from 'react-toastify';
import * as yup from "yup";
import { Formik, Form } from 'formik';
import { MdPassword } from 'react-icons/md';
import { AiFillMail } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import './Login.scss'
import { useNavigate } from "react-router-dom";
import { Heading } from '../../../Components/AdminPanel'
import { img_mainLogo, img_loginBg } from "../../../Assets/AdminPanel"
import { useDispatch } from 'react-redux';
import { adminDoLogin } from '../../../Redux/Actions/AdminPanel/adminAuth';
import { useEffect } from 'react';

function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginValidation = yup.object().shape({
    email: yup.string().email('Please enter valid email').required('Email is required.'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required.'),
  })

  const adminToken = JSON.parse(localStorage.getItem("ProServAdminToken"))

  useEffect(() => {
    if (adminToken) {
      navigate('/admin/dashboard')
    }
  }, [])

  const onSubmit = (values) => {
    const data = {
      email: values?.email,
      password: values?.password
    }
    dispatch(adminDoLogin(data))
      .then(res => {
        toast.success(res.data.message || 'Success')
        navigate('/admin/dashboard')
      })
      .catch(err => {
        toast.error(err.message || "Something went wrong")
      })
  }

  return (
    <div className="loginContainer">
      <ToastContainer />
      <div className='topBg' style={{ background: `url(${img_loginBg})` }} />
      <div className="container px-5 bg-white" style={{ zIndex: 2, borderRadius: '30%' }}>
        <div className="mx-lg-5 py-5 mb-3  px-lg-5 login ">
          <div className='mx-lg-5 py-3 mb-3  px-lg-5 d-flex justify-content-center'>
            <img src={img_mainLogo} alt="Logo" className='d-flex center' />
          </div>
          <Heading mainHeading='LOGIN' secondHeading='To See Your Dashboard' mode='center' className='py-5' width="60%" bg="white" subColor="#E74216" />
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={loginValidation}
            validateOnBlur={false}
            onSubmit={onSubmit}
          >
            {(props) => (
              <>
                <Form >
                  <div className="my-3">
                    <div className="form-floating ">
                      <input
                        type="text"
                        className="form-control"
                        name='email'
                        onChange={props.handleChange}
                        value={props.values.email}
                        placeholder={props.values.email || "email"}
                      />
                      <label >Enter exiting email</label>
                      <p href="" className='input_icon'><AiFillMail /></p>
                    </div>
                    {props.errors.email && props.touched.email ? (<div className='error'>{props.errors.email}</div>) : ""}
                  </div>
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
                  <div className="">
                    <div className="d-flex justify-content-end align">
                      <div className="text-danger">
                        <a className='m-0 text-muted text-danger' onClick={() => navigate('/admin/forgot-password')}>Forgot Password?</a>
                      </div>
                    </div>
                  </div>
                  <button className='active_Servicesbtn px-4 py-3 my-3 w-100' type='submit'>
                    Login
                  </button>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </div>
      <div className='bottomBg' style={{ background: `url(${img_loginBg})` }} />
      {/* <img src={img_loginBg} className='bottomBg'/> */}
    </div>
  )
}

export default Login