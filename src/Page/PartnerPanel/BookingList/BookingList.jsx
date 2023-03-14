import { useState } from 'react'
import Table from '../../../Components/Table/Table'
import { MdOutlineDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { GrDown, GrUp } from 'react-icons/gr'
import './BookingList.scss'
function BookingList() {
    const Service = [
        {
            id: "1",
            thead: ['BookingID', 'Service', 'Customer', 'Booking', 'Payment', 'Action', 'customerdetails'],
            tbody: [
                {
                    id: '1',
                    BookingID: 3054583,
                    Service: 'Cleaning',
                    Customer: 'Germaine Guzman',
                    Booking: 'Recived',
                    Payment: 'Paid',
                    Action: { Down: GrDown, Up: GrUp },
                    customerdetails: {
                        Address: 'New york city london near sand lake park',
                        Contact: '+01 89215 98745',
                        Amount: '$30.00',
                        Booking: '22 Feb 2022',
                    }
                }, {
                    id: '2',
                    BookingID: 3014830,
                    Service: 'Pest control',
                    Customer: 'Germaine Guzman',
                    Booking: 'On the way',
                    Payment: 'Unpaid',
                    Action: { Down: GrDown, Up: GrUp },
                    customerdetails: {
                        Address: 'New york city london near sand lake park',
                        Contact: '+01 89215 98745',
                        Amount: '$30.00',
                        Booking: '22 Feb 2022',
                    }
                }, {
                    id: '3',
                    BookingID: 3014483,
                    Service: 'Cleaning',
                    Customer: 'Germaine Guzman',
                    Booking: 'Faild',
                    Payment: 'Paid',
                    Action: { Down: GrDown, Up: GrUp },
                    customerdetails: {
                        Address: 'New york city london near sand lake park',
                        Contact: '+01 89215 98745',
                        Amount: '$30.00',
                        Booking: '22 Feb 2022',
                    }
                }, {
                    id: '4',
                    BookingID: 3114583,
                    Service: 'Pest control',
                    Customer: 'Germaine Guzman',
                    Booking: 'In Progress',
                    Payment: 'Paid',
                    Action: { Down: GrDown, Up: GrUp },
                    customerdetails: {
                        Address: 'New york city london near sand lake park',
                        Contact: '+01 89215 98745',
                        Amount: '$30.00',
                        Booking: '22 Feb 2022',
                    }
                }, {
                    id: '5',
                    BookingID: 364583,
                    Service: 'Cleaning',
                    Customer: 'Germaine Guzman',
                    Booking: 'Done',
                    Payment: 'Paid',
                    Action: { Down: GrDown, Up: GrUp },
                    customerdetails: {
                        Address: 'New york city london near sand lake park',
                        Contact: '+01 89215 98745',
                        Amount: '$30.00',
                        Booking: '22 Feb 2022',
                    }
                },
            ]
        }
    ]

    return (
        <div>
            <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                <div className=" d-flex alight-items-center py-2">
                    <h5 className='mx-1 my-0 d-flex align-items-center ' style={{ fontSize: '18px' }}><b>Booking Management</b></h5>
                </div>
                <div className="d-flex justify-content-end py-2">
                    <div className='p-2 me-3 bg-light' style={{ borderRadius: "4px" }} >
                        <Link >
                            <span className='d-flex align-items-center bg-light p-2'>
                                <MdOutlineDashboard style={{ fontSize: '18px', color: '#E74216' }} className='' />
                                <h5 className='mx-1 my-0' style={{ fontSize: '18px', color: '#E74216' }}>Dashboard</h5> <h5 className='mx-1 my-0 text-muted' style={{ fontSize: '18px' }}>/ Booking  List</h5>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white ">
                <div className="d-flex pt-3" style={{ borderBottom: '2px solid rgba(119, 119, 119,0.5)' }}>
                    <div className='py-4 px-3 ms-3  active' >
                        <h6 className='m-0 d-flex alight-items-center'><b> <AiOutlineMenuUnfold className='me-2' />Booking List</b></h6>
                    </div>
                </div>
                <Table data={Service} />
            </div>
        </div>
    )
}

export default BookingList;
