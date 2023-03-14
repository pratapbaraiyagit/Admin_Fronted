
// export default ChangePassword
import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import 'react-toastify/dist/ReactToastify.css';
import './ChangePassword.scss'
import { MdPassword } from 'react-icons/md';
import { adminDoChangePassword } from '../../../Redux/Actions/AdminPanel/adminAuth';

function ChangePassword() {

  const dispatch = useDispatch()

  const changePasswordValidation = yup.object({
    oldPassword: yup.string().required('Old password is required.'),
    password: yup.string().min(6, 'Password must contain at least 6 characters').required('New password is required.'),
    confirmPassword: yup.string().min(6, 'Confirm password must contain at least 6 characters').required('new confirm password is required.').oneOf([yup.ref('password'), null], 'New password and new confirm password do not match'),
  })
  const onSubmitChangePassword = (values) => {
    const data = {
      oldPassword: values?.oldPassword,
      newPassword: values?.password,
      confirmPassword: values?.confirmPassword,
    }

    dispatch(adminDoChangePassword(data))
      .then(res => {
        toast.success(res.message || 'Success')
      })
      .catch(err => {
        toast.error(err.message || "Something went wrong")
      })
  }

  return (
    <div className="container px-5">
      <div className="px-lg-5 login">
        <h1 className='text-center py-3'>Change password</h1>
        <Formik
          initialValues={{
            oldPassword: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={changePasswordValidation}
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
                      name='oldPassword'
                      onChange={props.handleChange}
                      value={props.values.oldPassword}
                      placeholder={props.values.oldPassword || "Old Password"}
                    />
                    <label >Old Password</label>
                    <p href="" className='input_icon'><MdPassword /></p>
                  </div>
                  {props.errors.oldPassword && props.errors.oldPassword ? (<div className='error'>{props.errors.oldPassword}</div>) : null}
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
                    <label >New Password</label>
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

                <button className='bg-warning px-4 py-3 my-3 w-100' type='submit'>
                  Submit
                </button>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default ChangePassword