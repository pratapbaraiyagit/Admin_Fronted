import React, { useState, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';
import { GoChevronDown } from 'react-icons/go';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.scss'
import { img_profile } from '../../../Assets/AdminPanel';
import { useDispatch, useSelector } from 'react-redux';
import { adminDoLogout } from '../../../Redux/Actions/AdminPanel/adminAuth';
// import Plumbing from '../../../Assets/Group (4).svg'
import { adminProfileEdit } from '../../../Redux/Actions/AdminPanel/adminProfile'
import { API_BASE, API_BASE_IMAGE } from '../../../Redux/Constants/api';

const profileImage = API_BASE_IMAGE

function Headers({ opan, setopan }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const profileEditReducers = useSelector((state) => state?.adminProfile?.profileEdit?.admin)

    const [open, setOpen] = useState("Active")

    const ListingApiCall = () => {
        dispatch(adminProfileEdit())
    }
    useEffect(() => {
        ListingApiCall()
    }, [])

    const onClickLogout = () => {
        dispatch(adminDoLogout())
        navigate('/admin/login')
        window.location.reload()
    }
    return (
        <div className="top-header d-flex justify-content-between align-items-center mx-4  py-4">
            <div className="d-flex align-items-center">
                <Link className="btn btn-sm" onClick={() => { setopan(!opan) }} >
                    <AiOutlineMenu className='text-dark' style={{ fontSize: "24px" }} />
                </Link>
                <h6 className='m-0 WelcomeText'>Welcome to ProServ</h6>
            </div>
            <div className="d-flex align-items-center">
                {/* <div className="notification">
                    <IoIosNotificationsOutline />
                </div> */}
                <div className="ms-3 ps-3 pe-1" >
                    <div className="dropdown" style={{ float: 'right' }}>
                        <button className="dropbtn m-0">
                            <div className="notification">
                                <IoIosNotificationsOutline />
                            </div>
                        </button>
                        <div className="dropdown-content" id='dropdown-content' style={{
                            width: '400px', minWidth: "100%",
                        }}>
                            <div className="">
                                <div className="d-flex justify-content-between alight-items-center px-3 py-1" style={{ background: "#eee", borderRadius: '8px' }}>
                                    <div className="py-1" style={{ cursor: 'pointer' }}><b>Notifications</b></div>
                                    <div className="">
                                        <button className="py-1" style={{ color: `${open === 'Active' ? '#fff' : '#000'}`, background: `${open === 'Active' ? '#E74216' : 'transparent'}`, borderRadius: '6px 0px 0px 6px', outline: 'none', border: '1px solid #E74216' }} onClick={() => { setOpen('Active') }}>Active</button>
                                        <button className="py-1" style={{ color: `${open === 'Archive' ? '#fff' : '#000'}`, background: `${open === 'Archive' ? '#E74216' : 'transparent'}`, borderRadius: '0px 6px 6px 0px', outline: 'none', border: '1px solid #E74216' }} onClick={() => { setOpen('Archive') }}>Archive</button>
                                    </div>
                                    <div className="py-1" style={{ cursor: 'pointer' }}><b>Read All</b></div>
                                </div>
                                <div className="">
                                    <div className="d-flex py-2">
                                        <div className="w-25 d-flex justify-content-center alight-items-center">
                                            <img src={img_profile} alt="" className='img-fluid notification_img' />
                                        </div>
                                        <div className="w-75">
                                            <h6 className='m-0'><b>Cleaning</b></h6>
                                            <p className='m-0' style={{ fontSize: "12px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis assumenda...</p>
                                        </div>
                                    </div>
                                    <div className="d-flex py-2">
                                        <div className="w-25 d-flex justify-content-center alight-items-center">
                                            <img src={img_profile} alt="" className='img-fluid  notification_img' />
                                        </div>
                                        <div className="w-75">
                                            <h6 className='m-0'><b>Cleaning</b></h6>
                                            <p className='m-0' style={{ fontSize: "12px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis assumenda...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ms-3 ps-3 pe-1" style={{
                    borderLeft: '1px solid #fab700'
                }}>
                    <div className="dropdown" style={{ float: 'right' }}>
                        <button className="dropbtn m-0">
                            <img src={profileImage + profileEditReducers?.profileImage} alt="" className='img-fluid rounded-circle me-1' width={35} height={35} />
                            <span className='WelcomeText'>{profileEditReducers?.fullName}</span>
                            <GoChevronDown style={{ fontSize: '18px' }} className='text-dark m-1' />
                        </button>
                        <div className="dropdown-content">
                            <Link to={'/admin/change-password'} style={{ fontSize: "15px" }}>Change password</Link>
                            <Link onClick={onClickLogout} style={{ fontSize: "15px" }}>Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headers