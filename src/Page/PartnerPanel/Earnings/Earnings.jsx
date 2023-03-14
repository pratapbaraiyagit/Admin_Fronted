import React from 'react'
import Table from '../../../Components/Table/Table'
import { MdOutlineDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import './Earnings.scss'
import { GrDown, GrUp } from 'react-icons/gr'
function Earnings() {
    const Service = [
        {
            id: "1",
            thead: ['ServiceName', 'TotalBooking', 'TotalEarning', 'UpdatedAt', 'Action'],
            tbody: [
                {
                    id: '1',
                    ServiceName: 'Cleaning',
                    TotalBooking: '3',
                    TotalEarning: 440100,
                    UpdatedAt: '6 hour ago',
                    Action: { Down: GrDown, Up: GrUp },
                    EarningStatus: [{
                        id: "1",
                        thead: ['BookingID', 'BookingDate', 'Amount', 'PaymentStatus', 'PaymentAcceptedDate'],
                        tbody: [
                            {
                                id: '1',
                                BookingID: '001',
                                BookingDate: '12-12-2022',
                                Amount: '$5000',
                                PaymentStatus: 'Pending',
                                PaymentAcceptedDate: '14-02-2022',
                            }
                        ]
                    }]
                },
                {
                    id: '2',
                    ServiceName: 'Home Cleaning',
                    TotalBooking: '5',
                    TotalEarning: 50000,
                    UpdatedAt: '60 hour ago',
                    Action: { Down: GrDown, Up: GrUp },
                    EarningStatus: [{
                        id: "1",
                        thead: ['BookingID', 'BookingDate', 'Amount', 'PaymentStatus', 'PaymentAcceptedDate'],
                        tbody: [
                            {
                                id: '1',
                                BookingID: '001',
                                BookingDate: '12-12-2022',
                                Amount: '$5000',
                                PaymentStatus: 'Pending',
                                PaymentAcceptedDate: '14-02-2022',
                            },
                            {
                                id: '2',
                                BookingID: '001',
                                BookingDate: '12-12-2022',
                                Amount: '$5000',
                                PaymentStatus: 'Pending',
                                PaymentAcceptedDate: '14-02-2022',
                            }
                        ]
                    }]
                },
            ]
        }
    ]
    return (
        <div>
            <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                <div className=" d-flex alight-items-center py-2">
                    <h5 className='mx-1 my-0 d-flex align-items-center ' style={{ fontSize: '18px' }}><b>Earnings Management</b></h5>
                </div>
                <div className="d-flex justify-content-end py-2">
                    <div className='p-2 me-3 bg-light' style={{ borderRadius: "4px" }} >
                        <Link >
                            <span className='d-flex align-items-center bg-light p-2'>
                                <MdOutlineDashboard style={{ fontSize: '18px', color: '#E74216' }} className='' />
                                <h5 className='mx-1 my-0' style={{ fontSize: '18px', color: '#E74216' }}>Dashboard</h5> <h5 className='mx-1 my-0 text-muted' style={{ fontSize: '18px' }}>/ Earnings</h5>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="d-flex pt-3" style={{ borderBottom: '2px solid rgba(119, 119, 119,0.5)' }}>
                    <div className='py-4 px-3 ms-3 active'>
                        <h6 className='m-0 d-flex alight-items-center'><b> <AiOutlineMenuUnfold className='me-2' />Earnings</b></h6>
                    </div>
                </div>
                <Table data={Service} />
            </div>
        </div>
    )
}


export default Earnings