import React from 'react'
import './Partner.scss'
import { BiSearchAlt } from 'react-icons/bi';
import Heding from '../../Components/Heading/Heading';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import row from '../../Assets/row.svg'
import slider_img_1 from '../../Assets/slider_About_1.svg'
import slider_img_2 from '../../Assets/slider_About_2.svg'
import Slider from "react-slick";
import Accordion from '../../Components/Accordion/Accordion';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik, Form } from 'formik';
import { HiLocationMarker } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdPassword } from 'react-icons/md';
import { AiFillMail } from 'react-icons/ai';
const settings1 = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    speed: 1000,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
};
const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <GrFormNext />,
    // prevArrow: < GrFormPrevious />,
    infiniteLoop: true,
};
const questionsAnswers = [
    {
        question: "How many team members can I invite?",
        answer:
            "Y. o more than 2GB. All files in your account must fit your allotted storage space. o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted storage space.storage space.Y. o more than 2GB. All files in your account must fit your allotted storage space. o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted storage space.o more than 2GB. All files in your account must fit your allotted storage space.storage space.",
    },
    {
        question: "What is the maximum file upload size?",
        answer:
            "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
        question: "How do I reset my password?",
        answer:
            `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    },
    {
        question: "Do you provide additional support?",
        answer:
            `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
    {
        question: "Can I cancel my subscription?",
        answer:
            `Yes! Send us a message and we’ll process your request no questions asked.`,
    },
    {
        question: "Do you provide additional support?",
        answer:
            `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
    {
        question: "How do I reset my password?",
        answer:
            `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    },
];
const yupsolver = yup.object({
    Mobile: yup.string().min(10, 'Number must be atleast 10 characters').required('Number is required'),
    password: yup.string().min(6, 'Password must be atleast 6 characters').required('Password is required'),
    REpassword: yup.string().min(6, 'Confirm Password must be atleast 6 characters').required('Confirm Password is required'),
    Email: yup.string().email('Email is invalid').required('Email is required'),
    Fullname: yup.string().required('Fullname is required'),
    Address: yup.string().min(30, 'Address must be atleast 30 characters').required('Address is required'),
    Services: yup.string().required('Services is required'),
})
function Partner() {
    const navigate = useNavigate()
    return (
        <div className="">
            <div className='container-fluid pt-5 mt-5 pb-4'>
                <div className="container Services m-auto">
                    <div className="row  my-5 my-sm-5 my-lg-4">
                        <div className="col-12 col-lg-5 bg-white p-2 p-md-3">
                            <h6 className='m-0'>What service do you need?</h6>
                            <input type="text" placeholder='E.g. Electrician, Pest Control' className='px-2' />
                        </div>
                        <div className="col-12 col-lg-4 bg-white p-2 p-md-3" >
                            <h6 className='m-0'>Where?</h6>
                            <input type="text" placeholder='Enter city' className='px-2' />
                        </div>
                        <div className="col-12 col-lg-3 bg-warning p-2 p-md-3">
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <BiSearchAlt className='mt-1 mx-2' style={{ fontSize: '24px' }} />
                                <h4 className='m-0'>Search</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container pt-0 pb-0'>
                <div className="row px-0 mx-0  pb-5 mb-5 ">
                    <Heding mainheding='SIGN UP' secondheading='For Become A Partner' mode='center' className='py-5 mb-4' />
                    <div className="col-12 col-lg-6 px-0 px-lg-3">
                        <Formik
                            initialValues={{ Email: '', password: '', }}
                            validationSchema={yupsolver}
                            onSubmit={(values) => {
                                console.log("📢[Partner.jsx:116]: values: ", values);
                                // navigate('/Partner_Login') pratap changes for testing partner login ui
                                navigate('/partner/login')
                            }}
                        >
                            {({
                                values,
                                errors,
                                handleChange,
                            }) => (
                                <Form >
                                    <div className="my-3">
                                        <div className="form-floating ">
                                            <input type="Number" className="form-control" name='Mobile' placeholder="Number" defaultValue={values.Mobile}
                                                onChange={handleChange} />
                                            <label >Mobile Number</label>
                                            <p href="" className='input_icon'><BsTelephoneFill /></p>
                                        </div>
                                        {errors.Mobile ? <div className='error'>{errors.Mobile}</div> : null}
                                    </div>
                                    <div className="my-3">
                                        <div className="form-floating">
                                            <input type="email"
                                                name="Email" className="form-control"
                                                defaultValue={values.Email}
                                                placeholder="Email"
                                                onChange={handleChange} />
                                            <label >Email</label>
                                            <p href="" className='input_icon'><AiFillMail /></p>
                                        </div>
                                        {errors.Email ? <div className='error'>{errors.Email}</div> : null}
                                    </div>
                                    <div className="my-3">
                                        <div className="form-floating">
                                            <input type="text"
                                                name="Fullname"
                                                className="form-control"

                                                defaultValue={values.Fullname}
                                                placeholder="Fullname"
                                                onChange={handleChange} />
                                            <label >Full Name</label>
                                            <p href="" className='input_icon'><AiFillMail /></p>
                                        </div>
                                        {errors.Fullname ? <div className='error'>{errors.Fullname}</div> : null}
                                    </div>
                                    <div className="my-3">
                                        <div className="form-floating">
                                            <input type="password"
                                                name="password" className="form-control"
                                                defaultValue={values.password}
                                                placeholder="password"
                                                onChange={handleChange} />
                                            <label >password</label>
                                            <p href="" className='input_icon'><MdPassword /></p>
                                        </div>
                                        {errors.password ? <div className='error'>{errors.password}</div> : null}
                                    </div>
                                    <div className="my-3">
                                        <div className="form-floating">
                                            <input type="password"
                                                name="REpassword" className="form-control"
                                                defaultValue={values.REpassword}
                                                placeholder="password"
                                                onChange={handleChange} />
                                            <label >Re-enter Password*</label>
                                            <p href="" className='input_icon'><MdPassword /></p>
                                        </div>
                                        {errors.REpassword ? <div className='error '>{errors.REpassword}</div> : null}
                                    </div>
                                    <div className="my-3">
                                        <div className="form-floating">
                                            <select className="form-select" name="Services" id="floatingSelectGrid" defaultValue={values.Services}
                                                aria-label="Floating label select example" onChange={handleChange} >
                                                <option value="" disabled selected ></option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <label >Services you Offer</label>
                                        </div>
                                        {errors.Services ? <div className='error'>{errors.Services}</div> : null}
                                    </div>
                                    <button type="submit" className='active_Servicesbtn px-4 py-3 w-100' >
                                        Submit
                                    </button>
                                    {/* pratap changes for testing partner login ui */}
                                    {/* <button className='active_Servicesbtn px-4 mt-3 py-3 w-100 text-light bg-dark' style={{ background: '#000 !important' }} onClick={() => navigate('/Partner_Login')}> */}
                                    <button className='active_Servicesbtn px-4 mt-3 py-3 w-100 text-light bg-dark' style={{ background: '#000 !important' }} onClick={() => navigate('/partner/login')}>
                                        Sign In
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="col-12 col-lg-6 my-3 last_div1">
                        <h2 className='text-light px-3 pt-3'>Want a bigger audience for your service business?</h2>
                        <p className='text-light px-3 pt-1'>Be a part of a community of service experts that have trusted and seen their business amplify with Housejoy’s service platform.</p>
                        <Slider {...settings2}>
                            <div className="">
                                <div className="card_partner px-2 px-sm-4 py-2 py-sm-3 mx-2 mx-md-5">
                                    <p className='text-center' style={{ fontSize: '18px !important' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum risus enim tortor felis aliquam, pretium. Proin adipiscing adipiscing iaculis malesuada. Aenean maecenas auctor ullamcorper ultrices in morbi eu mattis. Lorem orci, venenatis pretium pulvinar amet, eu ante. Odio laoreet tristique fames sed accumsan, et lorem. Sed in diam vel tempus.</p>
                                    <div className="d-flex py-3">
                                        <div className="" style={{ width: "45%" }}>
                                            <img src={slider_img_1} alt="" className='img-fluid p-3' />
                                        </div>
                                        <div className="d-flex justify-content-center flex-column " style={{ width: "55%" }}>
                                            <h4 className='mb-1'>Judy Lambert</h4>
                                            <p className='m-0 mb-1'>California</p>
                                            <img src={row} alt="" className='img-fluid d-block me-auto' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card_partner px-2 px-sm-4 py-2 py-sm-3 mx-2 mx-md-5">
                                    <p className='text-center' style={{ fontSize: '18px !important' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum risus enim tortor felis aliquam, pretium. Proin adipiscing adipiscing iaculis malesuada. Aenean maecenas auctor ullamcorper ultrices in morbi eu mattis. Lorem orci, venenatis pretium pulvinar amet, eu ante. Odio laoreet tristique fames sed accumsan, et lorem. Sed in diam vel tempus.</p>
                                    <div className="d-flex py-3">
                                        <div className="" style={{ width: "45%" }}>
                                            <img src={slider_img_2} alt="" className='img-fluid p-3' />
                                        </div>
                                        <div className="d-flex justify-content-center flex-column" style={{ width: "55%" }}>
                                            <h4 className='mb-1'>Judy Lambert</h4>
                                            <p className='m-0 mb-1'>California</p>
                                            <img src={row} alt="" className='img-fluid d-block me-auto' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card_partner px-2 px-sm-4 py-2 py-sm-3 mx-2 mx-md-5">
                                    <p className='text-center' style={{ fontSize: '18px !important' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum risus enim tortor felis aliquam, pretium. Proin adipiscing adipiscing iaculis malesuada. Aenean maecenas auctor ullamcorper ultrices in morbi eu mattis. Lorem orci, venenatis pretium pulvinar amet, eu ante. Odio laoreet tristique fames sed accumsan, et lorem. Sed in diam vel tempus.</p>
                                    <div className="d-flex py-3">
                                        <div className="" style={{ width: "45%" }}>
                                            <img src={slider_img_1} alt="" className='img-fluid p-3' />
                                        </div>
                                        <div className="d-flex justify-content-center flex-column" style={{ width: "55%" }}>
                                            <h4 className='mb-1'>Judy Lambert</h4>
                                            <p className='m-0 mb-1'>California</p>
                                            <img src={row} alt="" className='img-fluid d-block me-auto' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card_partner px-2 px-sm-4 py-2 py-sm-3 mx-2 mx-md-5">
                                    <p className='text-center' style={{ fontSize: '18px !important' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum risus enim tortor felis aliquam, pretium. Proin adipiscing adipiscing iaculis malesuada. Aenean maecenas auctor ullamcorper ultrices in morbi eu mattis. Lorem orci, venenatis pretium pulvinar amet, eu ante. Odio laoreet tristique fames sed accumsan, et lorem. Sed in diam vel tempus.</p>
                                    <div className="d-flex  py-3">
                                        <div className="" style={{ width: "45%" }}>
                                            <img src={slider_img_2} alt="" className='img-fluid p-3' />
                                        </div>
                                        <div className="d-flex justify-content-center flex-column" style={{ width: "55%" }}>
                                            <h4 className='mb-1'>Judy Lambert</h4>
                                            <p className='m-0 mb-1'>California</p>
                                            <img src={row} alt="" className='img-fluid d-block me-auto' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card_partner px-2 px-sm-4 py-2 py-sm-3 mx-2 mx-md-5">
                                    <p className='text-center' style={{ fontSize: '18px !important' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum risus enim tortor felis aliquam, pretium. Proin adipiscing adipiscing iaculis malesuada. Aenean maecenas auctor ullamcorper ultrices in morbi eu mattis. Lorem orci, venenatis pretium pulvinar amet, eu ante. Odio laoreet tristique fames sed accumsan, et lorem. Sed in diam vel tempus.</p>
                                    <div className="d-flex  py-3">
                                        <div className="" style={{ width: "45%" }}>
                                            <img src={slider_img_1} alt="" className='img-fluid p-3' />
                                        </div>
                                        <div className="d-flex justify-content-center flex-column" style={{ width: "55%" }}>
                                            <h4 className='mb-1'>Judy Lambert</h4>
                                            <p className='m-0 mb-1'>California</p>
                                            <img src={row} alt="" className='img-fluid d-block me-auto' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card_partner px-2 px-sm-4 py-2 py-sm-3 mx-2 mx-md-5">
                                    <p className='text-center' style={{ fontSize: '18px !important' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum risus enim tortor felis aliquam, pretium. Proin adipiscing adipiscing iaculis malesuada. Aenean maecenas auctor ullamcorper ultrices in morbi eu mattis. Lorem orci, venenatis pretium pulvinar amet, eu ante. Odio laoreet tristique fames sed accumsan, et lorem. Sed in diam vel tempus.</p>
                                    <div className="d-flex  py-3">
                                        <div className="" style={{ width: "45%" }}>
                                            <img src={slider_img_2} alt="" className='img-fluid p-3' />
                                        </div>
                                        <div className="d-flex justify-content-center flex-column" style={{ width: "55%" }}>
                                            <h4 className='mb-1'>Judy Lamberst</h4>
                                            <p className='m-0 mb-1'>California</p>
                                            <img src={row} alt="" className='img-fluid d-block me-auto' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card_partner px-2 px-sm-4 py-2 py-sm-3 mx-2 mx-md-5">
                                    <p className='text-center' style={{ fontSize: '18px !important' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum risus enim tortor felis aliquam, pretium. Proin adipiscing adipiscing iaculis malesuada. Aenean maecenas auctor ullamcorper ultrices in morbi eu mattis. Lorem orci, venenatis pretium pulvinar amet, eu ante. Odio laoreet tristique fames sed accumsan, et lorem. Sed in diam vel tempus.</p>
                                    <div className="d-flex  py-3">
                                        <div className="" style={{ width: "45%" }}>
                                            <img src={slider_img_1} alt="" className='img-fluid p-3' />
                                        </div>
                                        <div className="d-flex justify-content-center flex-column" style={{ width: "55%" }}>
                                            <h4 className='mb-1'>Judy Lambert</h4>
                                            <p className='m-0 mb-1'>California</p>
                                            <img src={row} alt="" className='img-fluid d-block me-auto' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className='container py-5'>
                <div className="row px-0 mx-0">
                    <div className="container">
                        <Heding mainheding='FAQ' secondheading='Solutio&nbsp;of&nbsp;your&nbsp;questions' mode='center' className='py-4 mb-4' />
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada id lectus consectetur in aliquam magna rhoncus. </p>
                        <Accordion questionsAnswers={questionsAnswers} />
                    </div>
                </div>
            </div>
            <div className="container-fluid last_div" style={{ height: '100%' }}>
                <div className='container py-5 px-0 px-sm-4'>
                    <Heding mainheding='OUR TESTIMONIALS' secondheading='What Other Say' mode='center' className='py-5' color='#383737' />
                    <p className='text-light text-center pb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores optio possimus sint cupiditate accusamus architecto blanditiis aspernatur sequi quidem nihil ipsam, nobis ipsum aperiam nam dolorum veniam quam dolores aliquid.</p>
                    <div className="partner">
                        <Slider {...settings1}>
                            <div>
                                <div className="card_slider">
                                    <p className='text-center' style={{ fontSize: "16px", maxHeight: '200px', overflowY: 'scroll' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum risus enim tortor felis aliquam, pretium. Proin adipiscing adipiscing iaculis malesuada. Aenean maecenas auctor ullamcorper ultrices in morbi eu mattis. Lorem orci, venenatis pretium pulvinar amet, eu ante. </p>
                                    <img src={slider_img_1} alt="" className='img-fluid d-block mx-auto py-4' />
                                    <img src={row} alt="" className='img-fluid d-block m-auto py-2' />
                                    <h5 className='text-center  my-1'>Judy Lambert</h5>
                                    <p className='text-center my-2'>California</p>
                                </div>
                            </div>
                            <div>
                                <div className="card_slider">
                                    <p className='text-center' style={{ fontSize: "16px", maxHeight: '200px', overflowY: 'scroll' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum risus enim tortor felis aliquam, pretium. Proin adipiscing adipiscing iaculis malesuada. Aenean maecenas auctor ullamcorper ultrices in morbi eu mattis. Lorem orci, venenatis pretium pulvinar amet, eu ante. </p>
                                    <img src={slider_img_2} alt="" className='img-fluid d-block mx-auto py-4' />
                                    <img src={row} alt="" className='img-fluid d-block m-auto py-2' />
                                    <h5 className='text-center  my-1'>Judy Lambert</h5>
                                    <p className='text-center my-2'>California</p>
                                </div>
                            </div>
                            <div>
                                <div className="card_slider">
                                    <p className='text-center' style={{ fontSize: "16px", maxHeight: '200px', overflowY: 'scroll' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum risus enim tortor felis aliquam, pretium. Proin adipiscing adipiscing iaculis malesuada. Aenean maecenas auctor ullamcorper ultrices in morbi eu mattis. Lorem orci, venenatis pretium pulvinar amet, eu ante. </p>
                                    <img src={slider_img_1} alt="" className='img-fluid d-block mx-auto py-4' />
                                    <img src={row} alt="" className='img-fluid d-block m-auto py-2' />
                                    <h5 className='text-center  my-1'>Judy Lambert</h5>
                                    <p className='text-center my-2'>California</p>
                                </div>
                            </div>
                            <div>
                                <div className="card_slider">
                                    <p className='text-center' style={{ fontSize: "16px", maxHeight: '200px', overflowY: 'scroll' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum risus enim tortor felis aliquam, pretium. Proin adipiscing adipiscing iaculis malesuada. Aenean maecenas auctor ullamcorper ultrices in morbi eu mattis. Lorem orci, venenatis pretium pulvinar amet, eu ante. </p>
                                    <img src={slider_img_2} alt="" className='img-fluid d-block mx-auto py-4' />
                                    <img src={row} alt="" className='img-fluid d-block m-auto py-2' />
                                    <h5 className='text-center  my-1'>Judy Lambert</h5>
                                    <p className='text-center my-2'>California</p>
                                </div>
                            </div>
                            <div>
                                <div className="card_slider">
                                    <p className='text-center' style={{ fontSize: "16px", maxHeight: '200px', overflowY: 'scroll' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum risus enim tortor felis aliquam, pretium. Proin adipiscing adipiscing iaculis malesuada. Aenean maecenas auctor ullamcorper ultrices in morbi eu mattis. Lorem orci, venenatis pretium pulvinar amet, eu ante. </p>
                                    <img src={slider_img_1} alt="" className='img-fluid d-block mx-auto py-4' />
                                    <img src={row} alt="" className='img-fluid d-block m-auto py-2' />
                                    <h5 className='text-center  my-1'>Judy Lambert</h5>
                                    <p className='text-center my-2'>California</p>
                                </div>
                            </div>
                            <div>
                                <div className="card_slider">
                                    <p className='text-center' style={{ fontSize: "16px", maxHeight: '200px', overflowY: 'scroll' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum risus enim tortor felis aliquam, pretium. Proin adipiscing adipiscing iaculis malesuada. Aenean maecenas auctor ullamcorper ultrices in morbi eu mattis. Lorem orci, venenatis pretium pulvinar amet, eu ante. </p>
                                    <img src={slider_img_2} alt="" className='img-fluid d-block mx-auto py-4' />
                                    <img src={row} alt="" className='img-fluid d-block m-auto py-2' />
                                    <h5 className='text-center  my-1'>Judy Lambert</h5>
                                    <p className='text-center my-2'>California</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner