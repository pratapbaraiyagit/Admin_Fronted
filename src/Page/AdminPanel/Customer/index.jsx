import React, { useState, useEffect } from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { UserData, singleUser } from "../../../shared/user"
import { orderByCustomer } from "../../../shared/orders"
import { TbArrowsDownUp } from 'react-icons/tb'
import { BiArrowBack } from 'react-icons/bi'
import './Customer.scss'

function Customer() {
    const [name, setName] = useState("");
    const [path, setPath] = useState("");
    const [tblBody, setTblBody] = useState(UserData[0].tbody)
    const [tblHead, setTblHead] = useState(UserData[0].thead)
    const location = useLocation();
    const navigate = useNavigate();
    const handleSort = (data) => {
        const newData = [...UserData[0].tbody].sort((a, b) =>
            a[data] > b[data] ? 1 : -1
        );
        setTblBody(newData)
    }
    const handleCustomer = (data) => {
        setName(data);
    }
    useEffect(() => {
        if (location?.state?.id) {
            setName(location?.state?.id)
            setPath(location?.state?.path);
        } else {
            setName("")
        }
    }, [])
    const handleBack = () => {
        setName("")
        if (path) {
            navigate(path)
        }
    }
    return (
        <div>
            <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                <div className=" d-flex alight-items-center py-2">
                    <h5 className='mx-1 my-0 d-flex align-items-center ' style={{ fontSize: '18px' }}><b>Customer Management</b></h5>
                </div>
            </div>
            {name ? (

                // {/* <Table data={UserData} handlePress="FullName" setSelectedName={setSelectedName}/> */}
                <CustomerDetails setName={setName} handleBack={handleBack} />
                // <div onClick={()=>setName("")}>Go back</div>
            ) : (
                <div className="bg-white header">
                    <div className="d-flex pt-3" style={{ borderBottom: '2px solid rgba(119, 119, 119,0.5)' }}>
                        <div className='py-4 px-3 ms-3 active'>
                            <h6 className='m-0 d-flex alight-items-center'><b> <AiOutlineMenuUnfold className='me-2' />Customer Details</b></h6>
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
                                                        <td className={'align-middle clicable'} key={index} style={{ cursor: 'pointer' }} onClick={() => handleCustomer(e[data.name])}>
                                                            {e[data.name]}
                                                        </td>
                                                    )
                                                } else {
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

const CustomerDetails = (props) => {
    const { setName, handleBack } = props
    const [active, setactive] = useState('Details')
    const [orderData, setOrderData] = useState(orderByCustomer)
    const navigate = useNavigate();
    const tblHead = [
        { name: 'Order Id', sort: true },
        { name: 'Order No', sort: true },
        { name: 'Service', sort: true },
        { name: 'Partner', sort: true },
        { name: 'Commission Type' },
        { name: 'Commission Amount', sort: true },
        { name: 'Amount', sort: true },
        { name: 'Status' }
    ]
    const handleSort = (data) => {
        const newData = [...orderByCustomer].sort((a, b) =>
            a[data] > b[data] ? 1 : -1
        );
        setOrderData(newData)
    }
    const handlePartner = (data) => {
        setName(data);
        navigate('/admin/partner', { state: { id: data, path: '/admin/customer' } });
    }
    const handleOrder = (id, data) => {
        setName(data);
        navigate('/admin/orders', { state: { id: id, data: data, path: '/admin/customer' } });
    }
    const handleService = (id) => {
        setName(id);
        navigate('/admin/service', { state: { id: id, path: '/admin/customer' } })
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
                    <h6 className='m-0 d-flex alight-items-center' ><b> <AiOutlineMenuUnfold className='me-2' />Customer Details</b></h6>
                </div>
                <div className={`py-4 px-3 ms-3 ${active !== 'Details' ? 'active' : 'not-active'}`} onClick={() => {
                    setactive('Orders')
                }}>
                    <h6 className='m-0 d-flex alight-items-center'><b>Orders</b></h6>
                </div>
            </div>
            <div className="p-3" style={active === 'Details' ? { border: '2px solid rgba(119, 119, 119,0.5)' } : { border: '0px' }} >
                {active === 'Details' ? (
                    <div className='container-fluid' >
                        <div className='row bg-light' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className='col-12 col-sm-5 px-2 m-0 dataContainer' >
                                <p className='p-0 m-0 title'>Name:</p>
                                <p className='p-0 m-0'>{singleUser.name}</p>
                            </div>
                            <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                                <p className='p-0 m-0 title'>Email:</p>
                                <p className='p-0 m-0'>{singleUser.email}</p>
                            </div>
                            <div className='col-12 col-sm-5 m-0 dataContainer'>
                                <p className='p-0 m-0 title'>Contact:</p>
                                <p className='p-0 m-0'>{singleUser.contact}</p>
                            </div>
                            <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                                <p className='p-0 m-0 title'>City:</p>
                                <p className='p-0 m-0'>{singleUser.city}</p>
                            </div>
                            <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                                <p className='p-0 m-0 title' >Shipping Address:</p>
                                <p className='p-0 m-0'>
                                    {singleUser.shippingAdd.house}<br />
                                    {singleUser.shippingAdd.road}<br />
                                    {singleUser.shippingAdd.area}<br />
                                    {singleUser.shippingAdd.city}
                                </p>
                            </div>
                            <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                                <p className='p-0 m-0 title'>Billing Address:</p>
                                <p className='p-0 m-0' >
                                    {singleUser.billingAdd.house}<br />
                                    {singleUser.billingAdd.road}<br />
                                    {singleUser.billingAdd.area}<br />
                                    {singleUser.billingAdd.city}
                                </p>
                            </div>
                            <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                                <p className='p-0 m-0 title'>Total Orders:</p>
                                <p className='p-0 m-0'>{singleUser.totalOrders}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='tbl-responsive'>
                        <table className="table  m-0" >
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
                                                if (data.name === 'Partner') {
                                                    return (
                                                        <td className={'align-middle clicable'} key={index} style={{ cursor: 'pointer' }} onClick={() => handlePartner(e['Partner Id'])}>
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

export default Customer