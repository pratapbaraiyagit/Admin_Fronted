import { useCallback, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import * as yup from "yup";
import { Formik, Form } from 'formik';
import { AiFillMail } from 'react-icons/ai';
import { SiSpringCreators } from 'react-icons/si';
import 'react-toastify/dist/ReactToastify.css';
import './ChangePassword.scss'
import { useNavigate } from "react-router-dom";
import Heding from '../../Components/Heading/Heading';
import logo from '../../Assets/logo-2.svg'
import img_loginBg from '../../Assets/main-back.svg'

function ChangePassword() {
    const [otp, setotp] = useState('');
    const [isEmailSend, setSendEmail] = useState(false);
    const [timer, setTimer] = useState(120);
    const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);
    useEffect(() => {
        if (isEmailSend) {
            timer > 0 && setTimeout(timeOutCallback, 1000);
        }
    }, [timer, timeOutCallback, isEmailSend]);

    const navigate = useNavigate()
    const yupsolver3 = yup.object({
        Email: yup.string().email('Email is invalid').required('Email is required'),
    })
    const secondsToMinSecPadded = time => {
        const minutes = "0" + Math.floor(time / 60);
        const seconds = "0" + (time - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);
    };
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
                    <Heding mainheding='Login with OTP' secondheading='For Become A Partner' mode='center' className='pb-4 pt-2' />
                    {otp.length < 6 &&
                        <Formik
                            initialValues={{}}
                            validationSchema={yupsolver3}
                            onSubmit={(values) => {
                                console.log("📢[Login.jsx:122]: values: ", values);
                                setSendEmail(true)
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
                                                    disabled={isEmailSend}
                                                    onChange={handleChange} />
                                                <label >Enter Exiting Email</label>
                                                <p href="" className='input_icon'><AiFillMail /></p>
                                            </div>
                                            {errors.Email ? <div className='error'>{errors.Email}</div> : null}
                                        </div>
                                        {isEmailSend && (
                                            <>
                                                <div className="my-4">
                                                    <div className="form-floating ">
                                                        <input type="Number" className="form-control" name='OTP' placeholder="Enter OTP*" defaultValue={values.OTP}
                                                            onChange={handleChange} />
                                                        <label >Enter OTP*</label>
                                                    </div>
                                                    {errors.OTP ? <div className='error'>{errors.OTP}</div> : null}
                                                </div>
                                                <p className='text-danger text-end m-0' style={{ cursor: 'pointer' }} onClick={() => {
                                                    if (!timer) {
                                                        setTimer(120)
                                                    }
                                                }}>{timer ? 'Resend OTP In' + ' ' + secondsToMinSecPadded(timer) : 'Resend OTP'} </p>
                                            </>
                                        )}
                                        <button className='active_Servicesbtn px-4 py-3 my-3 w-100' type='submit'>
                                            {isEmailSend ? 'Submit' : 'Send Otp'}
                                        </button>
                                    </Form>
                                </>
                            )}
                        </Formik>
                    }
                </div>
            </div>
            <div className='bottomBg'
                style={{ background: `url(${img_loginBg})` }}
            />
        </div>
    )
}

export default ChangePassword