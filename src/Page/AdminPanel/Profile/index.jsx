import React, { useEffect, useState } from 'react'
import { img_profileIcon, img_camera } from '../../../Assets/AdminPanel';
import './Profile.scss'
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import * as yup from "yup";
import { Formik, Form } from 'formik';
import { adminProfileEdit, adminProfileUpdate } from '../../../Redux/Actions/AdminPanel/adminProfile';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../../Components/Spinner';
import Select from 'react-select';
import { adminCityListing } from '../../../Redux/Actions/AdminPanel/addCity';
import { API_BASE_IMAGE } from '../../../Redux/Constants/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const profileImage = API_BASE_IMAGE
function Profile() {

    const dispatch = useDispatch()

    const cityList = useSelector((state) => state?.adminCity?.cityList)
    const cityDataList = cityList?.data

    const profileEditReducers = useSelector((state) => state?.adminProfile?.profileEdit?.admin)
    console.log('profileEditReducers :>> ', profileEditReducers);

    const [isEditable, setIsEditable] = useState(false);
    const [spinnerLoading, setSpinnerLoading] = useState(false)

    const [selectStateCity, setSelectStateCity] = useState()

    const [options, setOptions] = useState([]);

    const validationProfile = yup.object({
        profileName: yup.string().required('Name is required'),
        email: yup.string().email('Email is invalid').required('Email is required'),
        contactNumber: yup.string().required('Contact Number is required'),
    })

    const ListingApiCall = () => {
        dispatch(adminProfileEdit())
            .then((res) => {
                setSpinnerLoading(true)
                setSelectStateCity(res?.admin?.cityId?._id);
            })
        setSpinnerLoading(false)
    }
    useEffect(() => {
        ListingApiCall()
        dispatch(adminCityListing())
            .then(res => {
                setSpinnerLoading(true)
            })
    }, [])

    const onSubmitProfileUpdate = (values, i) => {
        setSpinnerLoading(false)
        const data = {
            // profileImage: values?.profileImage,
            cityId: selectStateCity,
            phoneNumber: values?.contactNumber.toString(),
            fullName: values?.profileName,
            email: values?.email
        }
        dispatch(adminProfileUpdate(data))
            .then((res) => {
                setSpinnerLoading(true)
                toast.success(res.message || 'Success')
                setIsEditable(!isEditable)
                ListingApiCall()
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
                ListingApiCall()
            })
    }

    return (
        <div className="">
            <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                <div className=" d-flex alight-items-center py-2">
                    <h5 className='mx-1 my-0 d-flex align-items-center ' style={{ fontSize: '18px' }}><b>Profile Management</b></h5>
                </div>
            </div>
            <div className="bg-white header">
                <div className="d-flex pt-3" style={{ borderBottom: '1px solid rgba(119, 119, 119,0.5)' }}>
                    <div className='py-4 px-3 ms-3 active' style={{ border: '1px solid rgba(119, 119, 119,0.5)', borderBottom: '1px solid white' }}>
                        <h6 className='m-0 d-flex alight-items-center'><b> <AiOutlineMenuUnfold className='me-2' />Profile</b></h6>
                    </div>
                </div>
                {spinnerLoading ?
                    <>
                        {isEditable ?
                            <>
                                {spinnerLoading ?
                                    <>
                                        <Formik
                                            initialValues={{
                                                profileImage: profileEditReducers?.profileImage,
                                                profileName: profileEditReducers?.fullName,
                                                contactNumber: profileEditReducers?.phoneNumber,
                                                email: profileEditReducers?.email,
                                                city: profileEditReducers?.cityId?.cityName
                                            }}
                                            validationSchema={validationProfile}
                                            validateOnBlur={false}
                                            onSubmit={onSubmitProfileUpdate}
                                        >
                                            {(props) => (
                                                <>
                                                    <Form>
                                                        <div className="container py-5 my-4">
                                                            <div className="row">
                                                                <div className="">
                                                                    <div className="profile_img">
                                                                        <img
                                                                            src={profileImage + props.values.profileImage}
                                                                            alt="profile image"
                                                                            className='img-fluid rounded-circle'
                                                                        />
                                                                        <div className="comera_img">
                                                                            <div className="comera_img_inner">
                                                                                <img
                                                                                    src={img_camera}
                                                                                    className=''
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-6">
                                                                    <div className="form-floating my-3">
                                                                        <input
                                                                            type="text"
                                                                            name='profileName'
                                                                            className="form-control"
                                                                            id="floatingInputValue"
                                                                            placeholder="Name"
                                                                            onChange={props.handleChange}
                                                                            value={props.values.profileName}
                                                                        />
                                                                        <label htmlFor="floatingInputValue">Name</label>
                                                                    </div>
                                                                    {props.errors.profileName && props.touched.profileName ? <div className='error'>{props.errors.profileName}</div> : ""}
                                                                </div>
                                                                <div className="col-12 col-sm-6">
                                                                    <div className="form-floating my-3">
                                                                        <input
                                                                            type="text"
                                                                            name="contactNumber"
                                                                            className="form-control"
                                                                            id="floatingInputValue"
                                                                            placeholder="Contact Number"
                                                                            onChange={props.handleChange}
                                                                            value={props.values.contactNumber}
                                                                        />
                                                                        <label htmlFor="floatingInputValue">Contact Number</label>
                                                                    </div>
                                                                    {props.errors.contactNumber && props.touched.contactNumber ? <div className='error'>{props.errors.contactNumber}</div> : ""}
                                                                </div>
                                                                <div className="col-12 col-sm-6">
                                                                    <div className="form-floating my-3">
                                                                        <input
                                                                            type="email"
                                                                            name='email'
                                                                            className="form-control"
                                                                            id="floatingInputValue"
                                                                            placeholder="Email"
                                                                            onChange={props.handleChange}
                                                                            value={props.values.email}
                                                                        />
                                                                        <label htmlFor="floatingInputValue">Email</label>
                                                                    </div>
                                                                    {props.errors.email && props.touched.email ? <div className='error'>{props.errors.email}</div> : ""}
                                                                </div>
                                                                <div className="col-12 col-sm-6">
                                                                    <div className="form-floating my-3">
                                                                        <select
                                                                            className="form-select pt-0 pb-0 selectBox"
                                                                            id="floatingSelectGrid"
                                                                            name='city'
                                                                            onChange={(e) => {
                                                                                const index = e.target.selectedIndex;
                                                                                const el = e.target.childNodes[index]
                                                                                const option = el.getAttribute('id');
                                                                                setSelectStateCity(option);
                                                                                props.handleChange(e)
                                                                            }}
                                                                            value={props.values.city}
                                                                            aria-label="Floating label select example"
                                                                        >
                                                                            <option disabled selected >Select Category</option>
                                                                            {cityDataList?.map((item) => (
                                                                                <option
                                                                                    id={item._id}
                                                                                    defaultValue={item?._id}
                                                                                    key={item._id}
                                                                                >
                                                                                    {item?.cityName}
                                                                                </option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                    {props.errors.city && props.touched.city ? <div className='error'>{props.errors.city}</div> : ""}
                                                                </div>
                                                                <div className="col-6">
                                                                    <button className='active_Servicesbtn px-4 py-3 my-3 w-100'>Save</button>
                                                                </div>
                                                                <div className="col-6">
                                                                    <button className='active_cancelbtn px-4 py-3 my-3 w-100' onClick={() => setIsEditable(!isEditable)}>Cancel</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                </>
                                            )}
                                        </Formik>
                                    </>
                                    :
                                    <Spinner isSuspense />
                                }
                            </>
                            :
                            <Formik
                                initialValues={{
                                    profileImage: profileEditReducers?.profileImage,
                                    profileName: profileEditReducers?.fullName,
                                    contactNumber: profileEditReducers?.phoneNumber,
                                    email: profileEditReducers?.email,
                                    city: profileEditReducers?.cityId?.cityName
                                }}
                                validationSchema={validationProfile}
                                validateOnBlur={false}
                            // onSubmit={(values) => {
                            //     dispatch(adminProfileEdit())
                            //         .then((res) => {
                            //             setSpinnerLoading(true)
                            //         })
                            // }}
                            >
                                {(props) => (
                                    <>
                                        <Form>
                                            <div className="container py-5 my-4">
                                                <div className="row">
                                                    <div className="">
                                                        <div className="profile_img">
                                                            <img
                                                                src={profileImage + props.values.profileImage}
                                                                alt=""
                                                                className='img-fluid rounded-circle'
                                                            />
                                                            <div className="comera_img">
                                                                <div className="comera_img_inner">
                                                                    <img src={img_camera} alt="" className=''
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <div className="form-floating my-3">
                                                            <input
                                                                type="text"
                                                                name='profileName'
                                                                className="form-control"
                                                                id="floatingInputValue"
                                                                placeholder="Name"
                                                                value={props.values.profileName}
                                                                disabled
                                                            />
                                                            <label htmlFor="floatingInputValue">Name</label>
                                                        </div>
                                                        {props.errors.profileName && props.touched.profileName ? <div className='error'>{props.errors.profileName}</div> : ""}
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <div className="form-floating my-3">
                                                            <input
                                                                type="text"
                                                                name="contactNumber"
                                                                className="form-control"
                                                                id="floatingInputValue"
                                                                placeholder="Contact Number"
                                                                value={props.values.contactNumber}
                                                                disabled
                                                            />
                                                            <label htmlFor="floatingInputValue">Contact Number</label>
                                                        </div>
                                                        {props.errors.contactNumber && props.touched.contactNumber ? <div className='error'>{props.errors.contactNumber}</div> : ""}
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <div className="form-floating my-3">
                                                            <input
                                                                type="email"
                                                                name='email'
                                                                className="form-control"
                                                                id="floatingInputValue"
                                                                placeholder="Email"
                                                                value={props.values.email}
                                                                disabled
                                                            />
                                                            <label htmlFor="floatingInputValue">Email</label>
                                                        </div>
                                                        {props.errors.email && props.touched.email ? <div className='error'>{props.errors.email}</div> : ""}
                                                    </div>
                                                    <div className="col-12 col-sm-6">
                                                        <div className="form-floating my-3">
                                                            <select
                                                                className="form-select pt-0 pb-0 selectBox"
                                                                id="floatingSelectGrid"
                                                                name='city'
                                                                onChange={(e) => {
                                                                    const index = e.target.selectedIndex;
                                                                    const el = e.target.childNodes[index]
                                                                    const option = el.getAttribute('id');
                                                                    setSelectStateCity(option);
                                                                    props.handleChange(e)
                                                                }}
                                                                value={props.values.city}
                                                                aria-label="Floating label select example"
                                                                disabled
                                                            >
                                                                <option disabled selected >Select Category</option>
                                                                {cityDataList?.map((item) => (
                                                                    <option
                                                                        id={item._id}
                                                                        defaultValue={item?._id}
                                                                        key={item._id}
                                                                    >
                                                                        {item?.cityName}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button className='active_Servicesbtn px-4 py-3 my-3 w-100' onClick={() => setIsEditable(!isEditable)}>Edit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    </>
                                )}
                            </Formik>
                        }
                    </>
                    :
                    <Spinner isSuspense />
                }
            </div>
        </div>
    )
}

export default Profile