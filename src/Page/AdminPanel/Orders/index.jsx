import React, { useState, useEffect } from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { allOrders, singleOrder } from "../../../shared/orders"
import { TbArrowsDownUp } from 'react-icons/tb'
import { BiArrowBack } from 'react-icons/bi'
import './Orders.scss'
function Orders() {
    const [orderId, setOrderId] = useState("");
    const [order, setOrder] = useState()
    const [tblBody, setTblBody] = useState(allOrders[0].tbody)
    const [tblHead, setTblHead] = useState(allOrders[0].thead)
    const [path, setPath] = useState("");
    const location = useLocation();
    const navigate = useNavigate()
    const handleSort = (data) => {
        const newData = [...allOrders[0].tbody].sort((a, b) =>
            a[data] > b[data] ? 1 : -1
        );
        setTblBody(newData)
    }
    const handleOrder = (data) => {
        setOrderId(true);
        setOrder(data);
    }
    const handlePartner = (data) => {
        navigate('/admin/partner', { state: { id: data, path: '/admin/orders' } });
    }
    const handleCustomer = (data) => {
        navigate('/admin/customer', { state: { id: data, path: '/admin/orders' } });
    }
    const handleService = (id) => {
        navigate('/admin/service', { state: { id: id, path: '/admin/orders' } })
    }
    useEffect(() => {
        if (location?.state?.id) {
            setOrderId(location?.state?.id)
            setOrder(location?.state?.data)
            setPath(location?.state?.path);
        } else {
            setOrderId("")
        }
    }, [])
    const handleBack = () => {
        setOrderId("")
        if (path) {
            navigate(path)
        }
    }
    return (
        <div>
            <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                <div className=" d-flex alight-items-center py-2">
                    <h5 className='mx-1 my-0 d-flex align-items-center ' style={{ fontSize: '18px' }}><b>Orders Management</b></h5>
                </div>
            </div>
            {orderId ? (
                <OrderDetails setOrderId={setOrderId} order={order} handleBack={handleBack} />
            ) : (
                <div className="bg-white header">
                    <div className="d-flex pt-3" style={{ borderBottom: '2px solid rgba(119, 119, 119,0.5)' }}>
                        <div className='py-4 px-3 ms-3 active'>
                            <h6 className='m-0 d-flex alight-items-center'><b> <AiOutlineMenuUnfold className='me-2' />Order Details</b></h6>
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
                                                if (data.name === 'Customer') {
                                                    return (
                                                        <td className={'align-middle clicable'} key={index} style={{ cursor: 'pointer' }} onClick={() => handleCustomer(e['Customer Id'])}>
                                                            {e[data.name]}
                                                        </td>
                                                    )
                                                }
                                                if (data.name === 'Partner') {
                                                    return (
                                                        <td className={'align-middle clicable'} key={index} style={{ cursor: 'pointer' }} onClick={() => handlePartner(e['Partner Id'])}>
                                                            {e[data.name]}
                                                        </td>
                                                    )
                                                }
                                                if (data.name === 'Order No') {
                                                    return (
                                                        <td className={'align-middle clicable'} key={index} style={{ cursor: 'pointer' }} onClick={() => handleOrder(e)}>
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
                </div>
            )}
        </div>
    )
}

const OrderDetails = (props) => {
    const { handleBack } = props

    return (
        <div className="bg-white">
            <div className='back p-2' onClick={handleBack}>
                <BiArrowBack size={40} />
            </div>
            <div className="d-flex pt-3" >
                <div className={'py-4 px-3 ms-3  active'} >
                    <h6 className='m-0 d-flex alight-items-center' ><b> <AiOutlineMenuUnfold className='me-2' />Order Details</b></h6>
                </div>
            </div>
            <div className="p-3" style={{ border: '2px solid rgba(119, 119, 119,0.5)' }}>
                <div className='container-fluid'  >
                    <div className='row bg-light' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='col-12 col-sm-5 px-2 m-0 dataContainer' >
                            <p className='p-0 m-0 title'>Order No:</p>
                            <p className='p-0 m-0'>{singleOrder.orderNo}</p>
                        </div>
                        <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                            <p className='p-0 m-0 title'>Service:</p>
                            <p className='p-0 m-0'>{singleOrder.Service}</p>
                        </div>
                        <div className='col-12 col-sm-5 m-0 dataContainer'>
                            <p className='p-0 m-0 title'>Customer:</p>
                            <p className='p-0 m-0'>{singleOrder.Customer}</p>
                        </div>
                        <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                            <p className='p-0 m-0 title'>Partner:</p>
                            <p className='p-0 m-0'>{singleOrder.partner}</p>
                        </div>
                        <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                            <p className='p-0 m-0 title'>Commision Type:</p>
                            <p className='p-0 m-0'>{singleOrder.commisionTpye}</p>
                        </div>
                        <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                            <p className='p-0 m-0 title'>Status:</p>
                            <p className='p-0 m-0'>{singleOrder.status}</p>
                        </div>
                        <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                            <p className='p-0 m-0 title'>Category:</p>
                            <p className='p-0 m-0'>{singleOrder.category}</p>
                        </div>
                        <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                            <p className='p-0 m-0 title'>Sub Category:</p>
                            <p className='p-0 m-0'>{singleOrder.subCategory}</p>
                        </div>
                        <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                            <p className='p-0 m-0 title'>Commision Amount:</p>
                            <p className='p-0 m-0'>{singleOrder.commisionAmt}</p>
                        </div>
                        <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                            <p className='p-0 m-0 title'>Amount:</p>
                            <p className='p-0 m-0'>{singleOrder.amount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders