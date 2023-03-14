import React from 'react'
import './Footer.scss'
import logo from './logo-2 (2).svg'
import { GrTwitter, GrLinkedinOption, GrYoutube } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
    return (
        <div className='container-fluid p-0 p-sm-1' style={{ background: "#000" }}>
            <div className='container p-0 p-sm-1'>
                <div className="row">
                    <div className=' mt-5' style={{ background: "#000" }}>
                        {/* <div className="row m-auto search">
                            <div className="d-flex px-4 mx-0 px-lg-5 mx-lg-5">
                                <div className="input_footer" >
                                    <input type="text" placeholder='Your E-mail' className='w-100 h-100 px-4 py-1' />
                                </div>
                                <div className="button_footer p-0 m-0">
                                    <button className='active_Servicesbtn px-4 py-3  w-100' style={{
                                        minWidth: "100%",
                                        border: '2px solid #fab700'
                                    }}>
                                        Salon at Home
                                    </button></div>
                            </div>
                        </div> */}
                        <div className="row py-5 m-0">
                            <div className="col-12  col-lg-4 p-4 p-md-3">
                                <h2 className='heading ps-2 ps-sm-4'>About Us</h2>
                                <p className='text-light pt-4 ps-2 ps-sm-4' style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis repellendus laboriosam amet quae odit dolorem possimus voluptate dolorum.</p>
                                <p className='text-light ps-2 pt-1 ps-sm-4' style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis repellendus laboriosam amet quae odit dolorem possimus voluptate dolorum.</p>
                                <button className='active_Servicesbtn  ms-2 ms-sm-4 px-4 py-3 mt-4' style={{ minWidth: "160px", fontSize: '18px' }}>
                                    Read More
                                </button>
                            </div>
                            <div className="col-12  col-lg-4 p-4 p-md-3">
                                <h2 className='heading s-2 ps-sm-4'>Information</h2>
                                <ul className='s-2 ps-sm-4 list_footer'>
                                    <li className='py-2 pt-4'>Home</li>
                                    <li className='py-2'>About</li>
                                    <li className='py-2'>Services</li>
                                    <li className='py-2'>Package</li>
                                </ul>
                                <img src={logo} alt="" className='img-fluid pt-3' />
                            </div>
                            <div className="col-12  col-lg-4 p-4 p-md-3">
                                <h2 className='heading s-2 ps-sm-4'>Contact here</h2>
                                <div className="ps-2 ps-sm-4 pt-2">
                                    <div style={{width:'100%',display:'flex', flexDirection:'row'}}>
                                        <div className='sub-heading pt-2 m-0'style={{width:'35%'}}>Contact :</div>
                                        <h4 className='sub-heading pt-2 m-0'>+91 8965236589</h4>
                                    </div>
                                    <div style={{width:'100%',display:'flex', flexDirection:'row'}}>
                                        <div className='sub-heading pt-2 m-0'style={{width:'45%'}}>Address :</div>
                                        <h4 className='sub-heading pt-2 m-0'>123, Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit. 47576.</h4>
                                    </div>
                                    <div style={{width:'100%',display:'flex', flexDirection:'row'}}>
                                        <div className='sub-heading pt-2 m-0'style={{width:'35%'}}>E-Mail :</div>
                                        <h4 className='sub-heading pt-2 m-0'> proserv22@gmail.com</h4>
                                    </div>
                                    {/* <h4 className='sub-heading pt-2 m-0'style={{width:'30%', background:'red'}}>Contact : +91 8965236589</h4> */}
                                    {/* <h3 className='sub-heading pt-2 m-0'>+91 8965236589</h3>     */}
                                    {/* <input type="text" placeholder='+91 2222222222' className='px-2 py-1 inputs-bottom mb-2 w-100' /> */}
                                    {/* <h4 className='sub-heading m-0'>Address: 123, Lorem ipsum dolor sit amet,
                                                                                consectetur adipiscing elit. 47576.</h4> */}
                                    {/* <input type="text" placeholder='Lorem ipsum dolor' className='px-2 py-1 inputs-bottom w-100' />
                                    <input type="text" placeholder='Lorem ipsum dolor' className='px-2 py-1 inputs-bottom mb-2 w-100' /> */}
                                    {/* <h4 className='sub-heading m-0'>E-Mail: proserv22@gmail.com</h4> */}
                                    {/* <input type="text" placeholder='proserv@gmail.com' className='px-2 py-1 inputs-bottom w-100' /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-md-flex px-0 mx-0 px-sm-5 mx-sm-5 justify-content-between py-4 main_content">
                <div className="">
                    <p className='text-light m-md-0 text-center text-md-left'>© 2022 ProServ. All right reserved.</p>
                </div>
                <div className="d-flex justify-content-center ">
                    <GrTwitter className='text-light mx-2' />
                    <FaFacebookF className='text-light mx-2' />
                    <GrLinkedinOption className='text-light mx-2' />
                    <GrYoutube className='text-light mx-2' />
                </div>
            </div>
        </div>
    )
}

export default Footer