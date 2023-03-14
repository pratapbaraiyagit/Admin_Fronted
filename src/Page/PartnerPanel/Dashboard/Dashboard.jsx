import React, { useState } from 'react'
import { BiUpArrowAlt } from 'react-icons/bi'
import { MdOutlineDashboard } from 'react-icons/md'
import { CgMenuRight } from 'react-icons/cg'
import { TiEdit } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import './Dashboard.scss'
import orders from '../../../Assets/orders.png'
import Delivered from '../../../Assets/Delivered.png'
import Canceled from '../../../Assets/Canceled.png'
import Revenue from '../../../Assets/Revenue.png'
import Table from '../../../Components/Table/Table'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import { RiDeleteBin7Fill } from 'react-icons/ri'
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)
function Deshboard() {
    const Recent = [
        {
            id: "1",
            thead: ['Service', 'Address', 'Payment'],
            tbody: [{
                id: '1',
                Service: 'Pestcontrol',
                Address: 'ssss',
                Payment: 'PrePaid',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }, {
                id: '2',
                Service: 'Home Cleaning',
                Address: 'zs, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                Payment: 'PrePaid',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }, {
                id: '3',
                Service: 'Pestcontrol',
                Address: 'awefrsezdfvzsdfa, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                Payment: 'PrePaid',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }, {
                id: '4',
                Service: 'Home Cleaning',
                Address: 'sss, Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                Payment: 'PrePaid',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }]

        }
    ]
    const Service = [
        {
            id: "1",
            thead: ['Service', 'City', 'HourlyRate'],
            tbody: [{
                id: '1',
                Service: 'Pest Control',
                City: 'Ontario',
                HourlyRate: 500,
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }, {
                id: '2',
                Service: 'Home Cleaning',
                City: 'Ontario',
                HourlyRate: 1,
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }]
        }
    ]
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: " 2020",
                data: [4, 55, 2, 4, 55, 2],
                borderColor: "#e94416",
                fill: false,
                tension: 0.4
            },
            {
                label: " 2021",
                data: [33, 25, 35, 51, 2, 76],
                borderColor: "#fab700",
                fill: false,
                tension: 0.4

            }
        ],
    };
    return (
        <div>
            <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                <div className=" d-flex alight-items-center py-2">
                    <h5 className='mx-1 my-0 ' style={{ fontSize: '18px' }}><b>Dashboard</b></h5>
                </div>
                <div className="d-flex justify-content-end py-2">
                    <div className='p-2 me-3 bg-light' style={{ borderRadius: "4px" }} >
                        <Link >
                            <span className='d-flex align-items-center bg-light p-2'>
                                <MdOutlineDashboard style={{ fontSize: '18px', color: '#E74216' }} className='' />
                                <h5 className='mx-1 my-0' style={{ fontSize: '18px', color: '#E74216' }}>Dashboard</h5> <h5 className='mx-1 my-0 text-muted' style={{ fontSize: '18px' }}></h5>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-xl-3">
                    <div className="bg-light py-3 px-3 my-2 d-flex Orders" style={{ borderRadius: "8px" }} >
                        <div className="d-flex justify-content-center alight-items-center pe-1" style={{ width: '35%' }}>
                            <img src={orders} alt="" className='img-fluid' style={{ objectFit: 'contain' }} />
                        </div>
                        <div className="ps-1" style={{ width: '65%' }}>
                            <h6 className='text' style={{ fontSize: '22px', fontWeight: "600" }}>45</h6>
                            <h6 className='text' style={{ fontSize: '18px', fontWeight: "500" }}>Total Orders</h6>
                            <span className='text-muted' style={{ fontSize: '14px' }}><BiUpArrowAlt style={{ color: '#90C000', fontSize: "21px" }} />4% (62 days)</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                    <div className="bg-light py-3 px-3 my-2 d-flex Orders" style={{ borderRadius: "8px" }} >
                        <div className="d-flex justify-content-center alight-items-center pe-1" style={{ width: '35%' }}>
                            <img src={Delivered} alt="" className='img-fluid' style={{ objectFit: 'contain' }} />
                        </div>
                        <div className="ps-1" style={{ width: '65%' }}>
                            <h6 className='text' style={{ fontSize: '22px', fontWeight: "600" }}>60</h6>
                            <h6 className='text' style={{ fontSize: '18px', fontWeight: "500" }}>Total Delivered</h6>
                            <span className='text-muted' style={{ fontSize: '14px' }}><BiUpArrowAlt style={{ color: '#90C000', fontSize: "21px" }} />4% (62 days)</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                    <div className="bg-light py-3 px-3 my-2 d-flex Orders" style={{ borderRadius: "8px" }} >
                        <div className="d-flex justify-content-center alight-items-center pe-1" style={{ width: '35%' }}>
                            <img src={Canceled} alt="" className='img-fluid' style={{ objectFit: 'contain' }} />
                        </div>
                        <div className="ps-1" style={{ width: '65%' }}>
                            <h6 className='text' style={{ fontSize: '22px', fontWeight: "600" }}>20</h6>
                            <h6 className='text' style={{ fontSize: '18px', fontWeight: "500" }}>Total Canceled</h6>
                            <span className='text-muted' style={{ fontSize: '14px' }}><BiUpArrowAlt style={{ color: '#90C000', fontSize: "21px" }} />4% (62 days)</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                    <div className="bg-light py-3 px-3 my-2 d-flex Orders" style={{ borderRadius: "8px" }} >
                        <div className="d-flex justify-content-center alight-items-center pe-1" style={{ width: '35%' }}>
                            <img src={Revenue} alt="" className='img-fluid' style={{ objectFit: 'contain' }} />
                        </div>
                        <div className="ps-1" style={{ width: '65%' }}>
                            <h6 className='text' style={{ fontSize: '22px', fontWeight: "600" }}>$120</h6>
                            <h6 className='text' style={{ fontSize: '18px', fontWeight: "500" }}>Total Revenue</h6>
                            <span className='text-muted' style={{ fontSize: '14px' }}><BiUpArrowAlt style={{ color: '#90C000', fontSize: "21px" }} />4% (62 days)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between alight-items-center py-4">
                <div className="">
                    <h5 className='mx-1 my-0 ' style={{ fontSize: '18px' }}><b>Recent Orders </b></h5>
                </div>
                <div className=""><CgMenuRight style={{ fontSize: "24px" }} /></div>
            </div>
            <Table data={Recent} />
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="d-flex justify-content-between alight-items-center py-4">
                        <div className="">
                            <h5 className='mx-1 my-0 ' style={{ fontSize: '18px' }}><b>Total Revenue </b></h5>
                        </div>
                        <div className=""><CgMenuRight style={{ fontSize: "24px" }} /></div>
                    </div>
                    <div className="bg-light p-4" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Line
                            data={data}
                            options={{
                                plugins: {
                                    legend: {
                                        position: "top",
                                        align: "end",
                                        labels: {
                                            usePointStyle: true,
                                            boxWidth: 55,
                                            fontSize: 20,
                                            padding: 9
                                        },
                                    },

                                }
                            }}
                        />
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="d-flex justify-content-between alight-items-center py-4">
                        <div className="">
                            <h5 className='mx-1 my-0 ' style={{ fontSize: '18px' }}><b>Service List</b></h5>
                        </div>
                        <div className=""><CgMenuRight style={{ fontSize: "24px" }} /></div>
                    </div>
                    <div className="">
                        <Table data={Service} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Deshboard