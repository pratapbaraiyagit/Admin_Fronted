import React, { useEffect, useState } from 'react'
import './Header.scss'
import logo from '../../Assets/logo.svg'
import { useNavigate, useLocation, Link } from "react-router-dom";
import { BsFillCartPlusFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';
import { MdOutlineRateReview } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Header() {
    const [Reviews, setReviews] = useState(false)
    const [open, setopen] = useState(false)
    const [parth, setparth] = useState('/')
    const [account_dropdown, setaccount_dropdown] = useState(false)
    const [show, setShow] = useState(false);
    const [login, setlogin] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()
    const handleClose = () => setShow(false);
    useEffect(() => {
        setparth(location.pathname)
        window.scroll(0, 0)
    }, [location])

    return (
        <>
            <header className="header">
                <div className="container" >
                    <div className="navbar-2">
                        <span className="brand">
                            <img src={logo} alt="" className='img-fluid' style={{ cursor: 'pointer' }} onClick={() => { navigate('/'); setopen(!open) }} />
                        </span>
                        <div className="burger" id="burger" onClick={() => setopen(!open)}>
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                        </div>
                        <span className="overlay"></span>
                        <div className={` ${open ? 'menu is-active' : 'menu'}`} id="menu">
                            <ul className="menu-inner">
                                <li className="menu-item px-1  d-black d-xl-none " style={{ textAlign: 'end' }}>
                                    <span className="menu-link  text-danger" style={{ fontSize: '24px', cursor: 'pointer' }} onClick={() => setopen(!open)}>X</span></li>
                                <li className="menu-item px-1" ><span className="menu-link " style={{ color: `${parth === '/' ? 'hsl(13, 83%, 50%)' : "#000"}` }} onClick={() => { navigate('/'); setopen(!open) }}>Home </span>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.25923 8.64711C6.67509 10.1505 3.68378 10.5037 1.61124 8.59115C-0.487531 6.6547 -0.291659 3.67821 0.90645 2.13423C3.3536 4.30185 5.80036 6.46911 8.25923 8.64711Z" fill={`${parth === '/' ? "#E74216" : '#000'}`} />
                                        <path d="M1.74585 1.17645C3.24376 -0.24217 6.15677 -0.740056 8.31469 1.17136C10.4703 3.0807 10.3328 6.02591 9.10411 7.69417C6.65109 5.52137 4.19886 3.34926 1.74585 1.17645Z" fill={`${parth === '/' ? "#E74216" : '#000'}`} />
                                    </svg>
                                </li>
                                <li className="menu-item px-1" onClick={() => { navigate('/about'); setopen(!open) }}><span className="menu-link" style={{ color: `${parth === '/about' ? 'hsl(13, 83%, 50%)' : "#000"}` }} >About</span>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.25923 8.64711C6.67509 10.1505 3.68378 10.5037 1.61124 8.59115C-0.487531 6.6547 -0.291659 3.67821 0.90645 2.13423C3.3536 4.30185 5.80036 6.46911 8.25923 8.64711Z" fill={`${parth === '/about' ? "#E74216" : '#000'}`} />
                                        <path d="M1.74585 1.17645C3.24376 -0.24217 6.15677 -0.740056 8.31469 1.17136C10.4703 3.0807 10.3328 6.02591 9.10411 7.69417C6.65109 5.52137 4.19886 3.34926 1.74585 1.17645Z" fill={`${parth === '/about' ? "#E74216" : '#000'}`} />
                                    </svg>
                                </li>
                                <li className="menu-item px-1" onClick={() => { navigate('/services'); setopen(!open) }}><span className="menu-link " style={{ color: `${parth === '/services' ? 'hsl(13, 83%, 50%)' : "#000"}` }}>Service</span>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.25923 8.64711C6.67509 10.1505 3.68378 10.5037 1.61124 8.59115C-0.487531 6.6547 -0.291659 3.67821 0.90645 2.13423C3.3536 4.30185 5.80036 6.46911 8.25923 8.64711Z" fill={`${parth === '/services' ? "#E74216" : '#000'}`} />
                                        <path d="M1.74585 1.17645C3.24376 -0.24217 6.15677 -0.740056 8.31469 1.17136C10.4703 3.0807 10.3328 6.02591 9.10411 7.69417C6.65109 5.52137 4.19886 3.34926 1.74585 1.17645Z" fill={`${parth === '/services' ? "#E74216" : '#000'}`} />
                                    </svg>
                                </li>
                                <li className="menu-item px-1" onClick={() => { navigate('/packages'); setopen(!open) }}><span className="menu-link " style={{ color: `${parth === '/packages' ? 'hsl(13, 83%, 50%)' : "#000"}` }} >Packages</span>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.25923 8.64711C6.67509 10.1505 3.68378 10.5037 1.61124 8.59115C-0.487531 6.6547 -0.291659 3.67821 0.90645 2.13423C3.3536 4.30185 5.80036 6.46911 8.25923 8.64711Z" fill={`${parth === '/packages' ? "#E74216" : '#000'}`} />
                                        <path d="M1.74585 1.17645C3.24376 -0.24217 6.15677 -0.740056 8.31469 1.17136C10.4703 3.0807 10.3328 6.02591 9.10411 7.69417C6.65109 5.52137 4.19886 3.34926 1.74585 1.17645Z" fill={`${parth === '/packages' ? "#E74216" : '#000'}`} />
                                    </svg>
                                </li>
                                <li className="menu-item px-1" onClick={() => { navigate('/contact'); setopen(!open) }}><span className="menu-link " style={{ color: `${parth === '/contact' ? 'hsl(13, 83%, 50%)' : "#000"}` }} >Contact</span>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.25923 8.64711C6.67509 10.1505 3.68378 10.5037 1.61124 8.59115C-0.487531 6.6547 -0.291659 3.67821 0.90645 2.13423C3.3536 4.30185 5.80036 6.46911 8.25923 8.64711Z" fill={`${parth === '/contact' ? "#E74216" : '#000'}`} />
                                        <path d="M1.74585 1.17645C3.24376 -0.24217 6.15677 -0.740056 8.31469 1.17136C10.4703 3.0807 10.3328 6.02591 9.10411 7.69417C6.65109 5.52137 4.19886 3.34926 1.74585 1.17645Z" fill={`${parth === '/contact' ? "#E74216" : '#000'}`} />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div className="ms-auto d-flex ">
                            <span className="menu-item  d-flex justify-content-center align-items-center px-1" onClick={() => { navigate('/become-partner'); }}>
                                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_262_29654)">
                                        <path d="M10.5658 0C11.0199 0.070821 11.4798 0.115813 11.9264 0.216629C13.7228 0.620726 14.7634 1.76969 15.1067 3.55272C15.3483 4.80833 15.4283 6.08894 15.285 7.35622C14.9867 9.9991 13.6094 11.8713 11.1207 12.8836C10.1642 13.2727 9.23436 13.1369 8.33702 12.6953C6.23322 11.6613 4.98094 9.9766 4.67182 7.657C4.45769 6.04562 4.51102 4.4209 4.99677 2.8545C5.43752 1.43225 6.45735 0.579899 7.89376 0.238292C8.36951 0.124978 8.8611 0.0774865 9.34601 0C9.75344 0 10.1592 0 10.5658 0ZM5.39753 5.65985C5.3742 5.66152 5.35171 5.66318 5.32838 5.66402C5.3717 6.33973 5.3642 7.02295 5.46752 7.68866C5.75497 9.53001 6.73313 10.9123 8.35785 11.8329C9.30685 12.3704 10.255 12.4837 11.2748 11.9779C13.7877 10.7306 14.7617 8.32855 14.5176 5.65485C14.3918 5.80066 14.2777 5.95563 14.1402 6.08728C13.9161 6.30141 13.7386 6.3089 13.4978 6.12227C13.2637 5.94064 13.0404 5.744 12.8096 5.5582C11.3607 4.39424 9.07439 4.26509 7.51633 5.27742C7.12556 5.53154 6.77479 5.84732 6.40236 6.12977C6.17989 6.29807 5.99743 6.29807 5.79496 6.10977C5.64999 5.97396 5.53001 5.81066 5.39753 5.65985ZM11.7073 2.41125C10.5216 2.02465 9.37267 2.02298 8.20621 2.41375C8.31869 2.6987 8.43117 2.96282 8.52615 3.23361C8.57365 3.36942 8.63947 3.38441 8.77111 3.35692C9.09022 3.28943 9.41433 3.19278 9.73511 3.19944C10.2059 3.20944 10.6741 3.30276 11.1449 3.34942C11.2157 3.35608 11.3365 3.32109 11.359 3.2711C11.4856 2.99615 11.589 2.7112 11.7073 2.41125Z" fill={`${parth === '/become-partner' ? "#E74216" : '#000'}`} />
                                        <path d="M9.9825 15.5856C10.1925 15.0332 10.4083 14.4833 10.6091 13.9276C10.6907 13.701 10.8257 13.561 11.0615 13.5043C11.6922 13.3527 12.2663 13.0736 12.7779 12.6778C13.0145 12.4953 13.2228 12.4903 13.4836 12.6378C14.8425 13.4052 16.2039 14.1684 17.5762 14.9116C18.3044 15.3065 18.7426 15.9264 19.0676 16.6554C19.5125 17.6544 19.7533 18.7109 19.9224 19.7841C19.9483 19.9474 19.8641 20.1532 19.7725 20.304C19.4717 20.8014 19.0334 21.1713 18.5452 21.4729C18.2011 21.6854 17.8303 21.8545 17.4754 22.0503C17.3629 22.1128 17.2854 22.1103 17.1896 22.0145C17.0979 21.9229 16.9788 21.857 16.863 21.7737C17.2379 21.5896 17.5012 21.3071 17.5112 20.878C17.5162 20.6622 17.4762 20.4173 17.3737 20.2306C16.2956 18.2718 13.5002 18.0744 12.1463 19.8557C12.0505 19.9824 11.9522 20.0274 11.7972 20.0265C10.5624 20.0207 9.32845 20.0207 8.09367 20.0274C7.94286 20.0282 7.85371 19.9774 7.76456 19.8607C6.39813 18.0752 3.64194 18.2693 2.5313 20.224C2.24802 20.7231 2.343 21.4429 3.03955 21.777C2.91874 21.872 2.80209 21.972 2.67544 22.057C2.63379 22.0853 2.55713 22.0987 2.51381 22.0795C1.72311 21.7304 0.98074 21.308 0.393342 20.6531C0.0675653 20.2898 -0.079909 19.9215 0.0425696 19.3991C0.293359 18.3326 0.550814 17.2762 1.0449 16.2905C1.31985 15.7414 1.68478 15.2807 2.23552 14.9774C3.66361 14.1892 5.08669 13.3935 6.50978 12.5962C6.71391 12.482 6.88888 12.4978 7.07218 12.6361C7.62042 13.0502 8.22115 13.356 8.8927 13.5143C9.10183 13.5635 9.22097 13.7018 9.29346 13.9001C9.50009 14.4625 9.71589 15.0216 9.92752 15.5815C9.94668 15.5856 9.96501 15.5856 9.9825 15.5856Z" fill={`${parth === '/become-partner' ? "#E74216" : '#000'}`} />
                                        <path d="M4.39584 20.9147C4.12255 20.9147 3.84843 20.9205 3.57598 20.9114C3.49099 20.908 3.38518 20.8839 3.33185 20.828C3.30436 20.7989 3.35435 20.6706 3.39684 20.6047C3.84843 19.9065 4.49915 19.5441 5.32484 19.5666C6.17886 19.5899 6.82708 19.9999 7.23368 20.7581C7.3145 20.9089 7.39532 20.9655 7.56945 20.9647C9.15585 20.9572 10.7414 20.9572 12.3278 20.9639C12.5053 20.9647 12.6002 20.9189 12.6861 20.7522C13.4551 19.255 15.5922 19.155 16.4962 20.5689C16.5454 20.6456 16.5521 20.7489 16.5779 20.8397C16.4921 20.8639 16.4071 20.9072 16.3213 20.908C15.7822 20.9147 15.2431 20.9205 14.7041 20.908C14.5232 20.9039 14.4374 20.9647 14.4358 21.1355C14.4333 21.5712 14.4366 22.0062 14.4416 22.4419C14.4433 22.6061 14.5282 22.6594 14.6974 22.6552C15.244 22.6427 15.7914 22.6461 16.3379 22.6527C16.4221 22.6536 16.5287 22.6819 16.5812 22.7385C16.6087 22.7685 16.5596 22.8968 16.5171 22.9618C16.0588 23.6667 15.4014 24.0283 14.5657 23.9983C13.7201 23.9683 13.0827 23.5551 12.6811 22.8077C12.6002 22.6577 12.5203 22.5986 12.3461 22.5994C10.7597 22.6069 9.17418 22.6069 7.58778 22.5994C7.40865 22.5986 7.31616 22.6477 7.22951 22.8119C6.82708 23.5742 6.17136 23.9725 5.31984 23.9975C4.50248 24.0216 3.85926 23.6592 3.40684 22.976C3.36101 22.9068 3.31686 22.781 3.34852 22.7327C3.38601 22.676 3.50849 22.6561 3.59431 22.6552C4.13338 22.6486 4.67245 22.6427 5.21153 22.6552C5.3915 22.6594 5.47981 22.5994 5.47981 22.4278C5.47981 21.9845 5.47398 21.5412 5.46732 21.0988C5.46482 20.953 5.38983 20.903 5.24069 20.9089C4.95991 20.9214 4.67829 20.9122 4.39667 20.9122C4.39584 20.9139 4.39584 20.9139 4.39584 20.9147Z" fill={`${parth === '/become-partner' ? "#E74216" : '#000'}`} />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_262_29654">
                                            <rect width="19.9274" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className='d-none d-sm-block ps-2 menu-link' style={{ color: `${parth === '/become-partner' ? 'hsl(13, 83%, 50%)' : "#000"}` }} >Become A Partner</span>
                            </span>
                            {login ?
                                <span className="menu-item d-flex justify-content-center align-items-center ms-1 px-1" onClick={() => { navigate('/login'); setlogin(false) }}>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='img-fluid'>
                                        <path d="M0.92749 12.6997C0.92749 12.231 0.92749 11.7624 0.92749 11.2937C0.940692 11.2277 0.960494 11.1617 0.967094 11.0891C1.09911 9.22112 1.63376 7.47195 2.61066 5.87459C4.51825 2.76568 7.26412 0.858086 10.8615 0.184818C11.3103 0.0990099 11.7724 0.0594059 12.2278 0C12.6965 0 13.1651 0 13.6338 0C13.6932 0.0132013 13.7526 0.0330033 13.812 0.039604C15.4885 0.158416 17.0793 0.587459 18.5381 1.40594C22.4786 3.61716 24.6239 6.9901 24.9077 11.505C25.0265 13.4455 24.6635 15.3267 23.7922 17.0693C21.6602 21.3399 18.1948 23.67 13.4291 23.9802C11.2641 24.1188 9.19812 23.637 7.29713 22.5941C3.91759 20.7261 1.84498 17.8878 1.11891 14.0858C1.0265 13.6304 0.986896 13.1617 0.92749 12.6997ZM12.9407 13.4984C12.9407 13.4851 12.9407 13.4719 12.9407 13.4587C12.1816 13.4587 11.4225 13.4521 10.6701 13.4587C8.73607 13.4719 7.16511 14.6865 6.70967 16.5215C6.55125 17.1683 6.45884 17.8416 6.90769 18.4092C7.16511 18.7393 7.51495 19.0165 7.86478 19.2607C9.75257 20.5677 11.845 21.0759 14.1288 20.7723C15.8318 20.5479 17.3235 19.8548 18.6371 18.7591C19.0529 18.4158 19.2443 17.9538 19.2443 17.4191C19.2443 15.4521 17.7064 13.6898 15.746 13.5182C14.8219 13.4257 13.878 13.4984 12.9407 13.4984ZM8.95389 7.55116C8.95389 9.72937 10.7361 11.5182 12.9143 11.5248C15.0991 11.5314 16.9077 9.72277 16.8945 7.54455C16.8813 5.35314 15.1057 3.58416 12.9209 3.59076C10.7361 3.59736 8.96049 5.36634 8.95389 7.55116Z" fill={`${parth === '/login' ? "#E74216" : '#000'}`} />
                                    </svg>
                                    <span className='d-none d-sm-block menu-link' style={{ color: `${parth === '/login' ? 'hsl(13, 83%, 50%)' : "#000"}` }} >Login</span>
                                </span> :
                                <span className="menu-item d-flex justify-content-center align-items-center ms-1 px-1" onClick={() => { setaccount_dropdown(!account_dropdown); }}>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='img-fluid '>
                                        <path d="M0.92749 12.6997C0.92749 12.231 0.92749 11.7624 0.92749 11.2937C0.940692 11.2277 0.960494 11.1617 0.967094 11.0891C1.09911 9.22112 1.63376 7.47195 2.61066 5.87459C4.51825 2.76568 7.26412 0.858086 10.8615 0.184818C11.3103 0.0990099 11.7724 0.0594059 12.2278 0C12.6965 0 13.1651 0 13.6338 0C13.6932 0.0132013 13.7526 0.0330033 13.812 0.039604C15.4885 0.158416 17.0793 0.587459 18.5381 1.40594C22.4786 3.61716 24.6239 6.9901 24.9077 11.505C25.0265 13.4455 24.6635 15.3267 23.7922 17.0693C21.6602 21.3399 18.1948 23.67 13.4291 23.9802C11.2641 24.1188 9.19812 23.637 7.29713 22.5941C3.91759 20.7261 1.84498 17.8878 1.11891 14.0858C1.0265 13.6304 0.986896 13.1617 0.92749 12.6997ZM12.9407 13.4984C12.9407 13.4851 12.9407 13.4719 12.9407 13.4587C12.1816 13.4587 11.4225 13.4521 10.6701 13.4587C8.73607 13.4719 7.16511 14.6865 6.70967 16.5215C6.55125 17.1683 6.45884 17.8416 6.90769 18.4092C7.16511 18.7393 7.51495 19.0165 7.86478 19.2607C9.75257 20.5677 11.845 21.0759 14.1288 20.7723C15.8318 20.5479 17.3235 19.8548 18.6371 18.7591C19.0529 18.4158 19.2443 17.9538 19.2443 17.4191C19.2443 15.4521 17.7064 13.6898 15.746 13.5182C14.8219 13.4257 13.878 13.4984 12.9407 13.4984ZM8.95389 7.55116C8.95389 9.72937 10.7361 11.5182 12.9143 11.5248C15.0991 11.5314 16.9077 9.72277 16.8945 7.54455C16.8813 5.35314 15.1057 3.58416 12.9209 3.59076C10.7361 3.59736 8.96049 5.36634 8.95389 7.55116Z" fill={`${account_dropdown ? "#E74216" : '#000'}`} />
                                    </svg>
                                    <span className='d-none d-sm-block menu-link' style={{ color: `${account_dropdown ? 'hsl(13, 83%, 50%)' : "#000"}` }} >Account</span>
                                    {account_dropdown && <div className="dropdown-inner px-4 py-2">
                                        <Link className="dropdown-item py-1" to="/profile"><CgProfile className='me-3' style={{ fontSize: '22px' }} /> My Profile</Link>
                                        <Link className="dropdown-item py-1" to="/order"><BsFillCartPlusFill className='me-3' style={{ fontSize: '22px' }} />My Orders</Link>
                                        <Link className="dropdown-item py-1" onClick={() => {
                                            setShow(!false)
                                        }} ><MdOutlineRateReview className='me-3' style={{ fontSize: '22px' }} />Add Testimonial</Link>
                                        <Link className="dropdown-item py-1" onClick={() =>
                                            setlogin(true)
                                        }><FiLogOut className='me-3' style={{ fontSize: '22px' }}
                                            />Logout</Link>
                                    </div>
                                    }
                                </span>}
                        </div>
                    </div>
                </div>
            </header>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Testimonial</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Please tell people how great we are :</h6>
                    <div className="form-floating">
                        <textarea type="date" className="form-control" id="floatingInputValue" placeholder="Enter Text Here..." style={{ minHeight: '90px' }}
                            onChange={(e) => {
                                setReviews(e.target.value !== '' ? true : false)
                            }}
                        />
                        <label htmlFor="floatingInputValue">Enter Text Here...</label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={() => {
                        if (Reviews === true) {
                            setShow(false);
                        }
                    }}
                    >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Header