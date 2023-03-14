import React, { useEffect, useState } from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { partnerData, singlePartner } from "../../../shared/user"
import { orderOfPartner } from "../../../shared/orders"
import { TbArrowsDownUp } from 'react-icons/tb'
import { BiArrowBack } from 'react-icons/bi'
import Rating from '@mui/material/Rating';
import { AiOutlineEye } from 'react-icons/ai';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import './Partner.scss'
function Partner() {
    const [name, setName] = useState("");
    const [path, setPath] = useState("");
    const [tblBody, setTblBody] = useState(partnerData[0].tbody)
    const [tblHead, setTblHead] = useState(partnerData[0].thead)
    const [showBtn, setShowBtn] = useState(false);
    const [filterValue, setFilterValue] = useState('all')
    const location = useLocation();
    const navigate = useNavigate()
    const handleSort = (data) => {
        const newData = [...partnerData[0].tbody].sort((a, b) =>
            a[data] > b[data] ? 1 : -1
        );
        setTblBody(newData)
    }
    const handlePartner = (data) => {
        setName(data);
    }
    const handleViewAction = (data) => {
        setShowBtn(true)
        setName(data)
    }
    useEffect(() => {
        if (location?.state?.id) {
            setName(location?.state?.id)
            setPath(location?.state?.path)
        } else {
            setName("")
        }
    }, [])
    const handleBack = () => {
        setName("")
        setShowBtn(false)
        if (path) {
            navigate(path)
        }
    }
    return (
        <div>
            <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                <div className=" d-flex alight-items-center py-2">
                    <h5 className='mx-1 my-0 d-flex align-items-center ' style={{ fontSize: '18px' }}><b>Partner Management</b></h5>
                </div>
            </div>
            {name ? (
                <PartnerDetails setName={setName} handleBack={handleBack} showBtn={showBtn} />
            ) : (
                <div className="bg-white header">
                    <div className="d-flex pt-3" style={{ borderBottom: '2px solid rgba(119, 119, 119,0.5)', display: 'flex', justifyContent: 'space-between' }}>
                        <div className='py-4 px-3 ms-3 active'>
                            <h6 className='m-0 d-flex alight-items-center'><b> <AiOutlineMenuUnfold className='me-2' />Partner Details</b></h6>
                        </div>
                        <div className='py-4 px-3 ms-3 '>
                            <select className="form-select" id="floatingSelectGrid" name='State'
                                aria-label="Floating label select example" defaultValue={filterValue} onChange={e => setFilterValue(e.target.value)}>
                                <option value={'all'}>All</option>
                                <option value={'approved'}>Approved</option>
                                <option value={'rejected'}>Rejected</option>
                            </select>
                        </div>
                    </div>
                    <div className='tbl-responsive'>
                        <table className="table m-0" >
                            <thead className='bg-white'>
                                <tr>
                                    {tblHead.map((item) => {
                                        if (item.sort) {
                                            return (
                                                <th className='pt-2 pb-3 text-muted align-middle' onClick={() => { handleSort(item.name) }} style={{ cursor: "pointer" }}>
                                                    <div className="d-flex  align-items-center" >
                                                        {item.name}<TbArrowsDownUp className='mx-1' style={{ fontSize: "16px" }} />
                                                    </div>
                                                </th>
                                            )
                                        } else {
                                            return (
                                                <th className='pt-2 pb-3 text-muted align-middle '>
                                                    <div className="d-flex  align-items-center" >
                                                        {item.name}
                                                    </div>
                                                </th>
                                            )
                                        }
                                    })}
                                </tr>
                            </thead>
                            {tblBody.map((e, i) => {
                                return (
                                    <tbody style={{ background: "#FFF" }} key={i}>
                                        <tr key={i}>
                                            {tblHead.map((data, index) => {
                                                if (data.name === 'FullName') {
                                                    return (
                                                        <td className={'align-middle clicable'} key={index} style={{ cursor: 'pointer' }} onClick={() => handlePartner(e[data.name])}>
                                                            {e[data.name]}
                                                        </td>
                                                    )
                                                }
                                                else if (data.name === 'Rating') {
                                                    return (
                                                        <td className={'align-middle clicable'} key={index}>
                                                            <Rating name="read-only" value={e['Rating']} precision={0.5} readOnly size="small" />
                                                        </td>
                                                    )
                                                }
                                                else if (data.name === 'Action') {
                                                    return (
                                                        <td className={'align-middle clicable'} key={index} style={{ cursor: 'pointer' }} onClick={() => handleViewAction(e)}>
                                                            <AiOutlineEye size={20} />
                                                        </td>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <td className={'align-middle'} key={index}>
                                                            {e[data.name]}
                                                        </td>
                                                    )
                                                }
                                            })}
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}

const PartnerDetails = (props) => {
    const { setName, handleBack, showBtn } = props
    const [active, setactive] = useState('Details')
    const [orderData, setOrderData] = useState(orderOfPartner)
    const tblHead = [
        { name: 'Order Id', sort: true },
        { name: 'Order No', sort: true },
        { name: 'Service', sort: true },
        { name: 'Customer', sort: true },
        { name: 'Customer Id', sort: true },
        { name: 'Commission Type' },
        { name: 'Commission Amount', sort: true },
        { name: 'Amount', sort: true },
        { name: 'Status' }
    ]
    const navigate = useNavigate()
    const handleSort = (data) => {
        const newData = [...orderOfPartner].sort((a, b) =>
            a[data] > b[data] ? 1 : -1
        );
        setOrderData(newData)
    }
    const handleCustomer = (data) => {
        setName(data);
        navigate('/admin/customer', { state: { id: data, path: '/admin/partner' } });
    }
    const handleOrder = (id, data) => {
        setName(data);
        navigate('/admin/orders', { state: { id: id, data: data, path: '/admin/partner' } });
    }
    const handleService = (id) => {
        setName(id);
        navigate('/admin/service', { state: { id: id, path: '/admin/partner' } })
    }
    return (
        <div className="bg-white">
            <div className='back p-2' onClick={handleBack}>
                <BiArrowBack size={40} />
            </div>
            <div className="d-flex pt-3" style={active !== 'Details' ? { borderBottom: '2px solid rgba(119, 119, 119,0.5)' } : { borderBottom: '0px' }}>
                <div className={`py-4 px-3 ms-3 ${active === 'Details' ? 'active' : 'not-active'}`} onClick={() => {
                    setactive('Details')
                }}>
                    <h6 className='m-0 d-flex alight-items-center' ><b> <AiOutlineMenuUnfold className='me-2' />Partner Details</b></h6>
                </div>
                <div className={`py-4 px-3 ms-3 ${active !== 'Details' ? 'active' : 'not-active'}`} onClick={() => {
                    setactive('Orders')
                }}>
                    <h6 className='m-0 d-flex alight-items-center'><b>Orders</b></h6>
                </div>
            </div>
            <div className="p-3" style={active === 'Details' ? { border: '2px solid rgba(119, 119, 119,0.5)' } : { border: '0px' }}>
                {active === 'Details' ? (
                    <div className='container-fluid'  >
                        <div className='row bg-light' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                                <p className='p-0 m-0 title'>Name:</p>
                                <p className='p-0 m-0'>{singlePartner.FullName}</p>
                            </div>
                            <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                                <p className='p-0 m-0 title'>Email:</p>
                                <p className='p-0 m-0'>{singlePartner.Email}</p>
                            </div>
                            <div className='col-12 col-sm-5 m-0 dataContainer'>
                                <p className='p-0 m-0 title'>Contact:</p>
                                <p className='p-0 m-0'>{singlePartner.Contact}</p>
                            </div>
                            <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                                <p className='p-0 m-0 title'>City:</p>
                                <p className='p-0 m-0'>{singlePartner.City}</p>
                            </div>
                            <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                                <p className='p-0 m-0 title'>Current Address:</p>
                                <p className='p-0 m-0' >
                                    {singlePartner.currentAdd.house}<br />
                                    {singlePartner.currentAdd.road}<br />
                                    {singlePartner.currentAdd.area}<br />
                                    {singlePartner.currentAdd.city}
                                </p>
                            </div>
                            <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                                <p className='p-0 m-0 title'>Permanent Address:</p>
                                <p className='p-0 m-0' >
                                    {singlePartner.permanentAdd.house}<br />
                                    {singlePartner.permanentAdd.road}<br />
                                    {singlePartner.permanentAdd.area}<br />
                                    {singlePartner.permanentAdd.city}
                                </p>
                            </div>
                            <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                                <p className='p-0 m-0 title'>Commission Type:</p>
                                <p className='p-0 m-0'>{singlePartner.commissionType}</p>
                            </div>
                            <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                                <p className='p-0 m-0 title'>Commission Amount:</p>
                                <p className='p-0 m-0'>{singlePartner.commissionAmt}</p>
                            </div>
                            <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                                <p className='p-0 m-0 title'>Total Orders:</p>
                                <p className='p-0 m-0'>{singlePartner.totalOrders}</p>
                            </div>
                            <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                                <p className='p-0 m-0 title'>Rating:</p>
                                <p className='p-0 m-0'><Rating name="read-only" value={singlePartner.Rating} precision={0.5} readOnly size="small" /></p>
                            </div>
                            <div className='col-12 col-sm-5 px-2 m-0 '>
                                <p className='p-0 m-0 title'>Adhar Card:</p>
                                <Zoom>
                                    <img src='https://Assets-global.website-files.com/5f689f82910c6b4f1ffb855b/613b1f91b195318100f7d27e_aadhar%20card%402x-min.jpg'
                                        alt='adhar card' style={{ height: '100px', width: '100px' }} />
                                </Zoom>
                            </div>
                            <div className='col-12 col-sm-5 px-2 m-0 '>
                                <p className='p-0 m-0 title'>Driving License</p>
                                <Zoom>
                                    <img src='https://c.ndtvimg.com/2022-01/d5dpp70g_car_120x90_14_January_22.jpg'
                                        alt='Driving License' style={{ height: '100px', width: '100px' }} />
                                </Zoom>
                            </div>
                        </div>

                        {showBtn && (
                            <div className='row' style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className='col-12 col-sm-3'>
                                    <button className='active_Servicesbtn px-4 mt-3 py-3 w-75 d-block m-auto'>Approve</button>
                                </div>
                                <div className='col-12 col-sm-3' style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button className='Servicesbtn px-4 mt-3 py-3 w-75 d-block m-auto'>Reject</button>
                                </div>
                            </div>
                        )}

                    </div>
                ) : (
                    <div className='tbl-responsive'>
                        <table className="table m-0" >
                            <thead className='bg-white'>
                                <tr>
                                    {tblHead.map((item) => {
                                        if (item.sort) {
                                            return (
                                                <th className='pt-2 pb-3 text-muted align-middle' onClick={() => { handleSort(item.name) }} style={{ cursor: "pointer" }}>
                                                    <div className="d-flex  align-items-center" >
                                                        {item.name}<TbArrowsDownUp className='mx-1' style={{ fontSize: "16px" }} />
                                                    </div>
                                                </th>
                                            )
                                        } else {
                                            return (
                                                <th className='pt-2 pb-3 text-muted align-middle '>
                                                    <div className="d-flex  align-items-center" >
                                                        {item.name}
                                                    </div>
                                                </th>
                                            )
                                        }
                                    })}
                                </tr>
                            </thead>
                            {orderData.map((e, i) => {
                                return (
                                    <tbody style={{ background: "#FFF" }} key={i}>
                                        <tr key={i}>
                                            {tblHead.map((data, index) => {
                                                if (data.name === 'Customer') {
                                                    return (
                                                        <td className={'align-middle clicable'} key={index} style={{ cursor: 'pointer' }} onClick={() => handleCustomer(e['Customer Id'])}>
                                                            {e[data.name]}
                                                        </td>
                                                    )
                                                }
                                                else if (data.name === 'Order No') {
                                                    return (
                                                        <td className={'align-middle clicable'} key={index} style={{ cursor: 'pointer' }} onClick={() => handleOrder(e['Order No'], e)}>
                                                            {e[data.name]}
                                                        </td>
                                                    )
                                                }
                                                else if (data.name === 'Service') {
                                                    return (
                                                        <td className={'align-middle clicable'} key={index} style={{ cursor: 'pointer' }} onClick={() => handleService(e['Service'], e)}>
                                                            {e[data.name]}
                                                        </td>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <td className={'align-middle'} key={index}>
                                                            {e[data.name]}
                                                        </td>
                                                    )
                                                }
                                            })}
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Partner