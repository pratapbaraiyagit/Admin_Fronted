import React from 'react'
import Table from '../../../Components/Table/Table'
import { MdOutlineDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { TiEdit } from 'react-icons/ti'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import * as yup from "yup";
import { Formik, Form } from 'formik';
import './BookingStatus.scss'
import { useState } from 'react'
function BookingStatus() {
    const [Switch, setSwitch] = useState('Service List')
    const Service = [
        {
            id: "1",
            thead: ['ServiceName', 'BookingId', 'Status', 'UpdatedAt'],
            tbody: [
                {
                    id: '1',
                    ServiceName: 'Cleaning',
                    BookingId: 52682,
                    Status: 'Received',
                    UpdatedAt: '2 Minutes Ago',
                },
                {
                    id: '2',
                    ServiceName: 'Cleaning',
                    BookingId: 263482,
                    Status: 'Received',
                    UpdatedAt: '1 Minutes Ago',
                },
                {
                    id: '2',
                    ServiceName: 'Cleaning',
                    BookingId: 63482,
                    Status: 'Received',
                    UpdatedAt: '7 Minutes Ago',
                },
                {
                    id: '2',
                    ServiceName: 'Home Cleaning',
                    BookingId: 526348,
                    Status: 'Done',
                    UpdatedAt: '5 Minutes Ago',
                },
                {
                    id: '2',
                    ServiceName: 'Cleaning',
                    BookingId: 963482,
                    Status: 'Received',
                    UpdatedAt: '2 Minutes Ago',
                },
            ]
        }
    ]
    const yupsolver = yup.object({
        project: yup.string().required('Service is required'),
        Message: yup.string().required('Message is required'),
        day: yup.string().required('day is required'),
        StartAt: yup.string().required('Start At  is required'),
        EndAt: yup.string().required('End At is required'),
        City: yup.string().required('City is required'),
    })
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
                                <h5 className='mx-1 my-0' style={{ fontSize: '18px', color: '#E74216' }}>Dashboard</h5> <h5 className='mx-1 my-0 text-muted' style={{ fontSize: '18px' }}>/ Booking Status</h5>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white ">
                <div className="d-flex pt-3" style={{ borderBottom: '2px solid rgba(119, 119, 119,0.5)' }}>
                    <div className='py-4 px-3 ms-3 active'>
                        <h6 className='m-0 d-flex alight-items-center'><b> <AiOutlineMenuUnfold className='me-2' />Booking Status</b></h6>
                    </div>
                </div>
                {Switch === 'Service List' ?
                    <Table data={Service} />
                    :
                    <Formik
                        initialValues={{}}
                        validationSchema={yupsolver}
                        onSubmit={(values) => {
                        }}
                    >
                        {({
                            values,
                            errors,
                            handleChange,
                        }) => (
                            <>
                                <Form >
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="my-3">
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelectGrid" name='day' defaultValue={values.day} aria-label="Floating label select example" onChange={handleChange} >
                                                            <option selected ></option>
                                                            <option defaultValue="1">One</option>
                                                            <option defaultValue="2">Two</option>
                                                            <option defaultValue="3">Three</option>
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid">Select Day</label>
                                                    </div>
                                                    {errors.day ? <div className='error'>{errors.day}</div> : null}
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="my-3">
                                                    <div className="form-floating ">
                                                        <input type="text" className="form-control" name='Message' placeholder="Message" defaultValue={values.Message}
                                                            onChange={handleChange} />
                                                        <label >Message</label>
                                                    </div>
                                                    {errors.Message ? <div className='error'>{errors.Message}</div> : null}
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="my-3">
                                                    <div className="form-floating ">
                                                        <input type="text" className="form-control" name='StartAt' placeholder="Email" defaultValue={values.StartAt}
                                                            onChange={handleChange} />
                                                        <label >Start At</label>
                                                    </div>
                                                    {errors.StartAt ? <div className='error'>{errors.StartAt}</div> : null}
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="my-3">
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelectGrid" name='project' defaultValue={values.project} aria-label="Floating label select example" onChange={handleChange} >
                                                            <option selected ></option>
                                                            <option defaultValue="1">One</option>
                                                            <option defaultValue="2">Two</option>
                                                            <option defaultValue="3">Three</option>
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid">Type of Service</label>
                                                    </div>
                                                    {errors.project ? <div className='error'>{errors.project}</div> : null}
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="my-3">
                                                    <div className="form-floating ">
                                                        <input type="text" className="form-control" name='EndAt' placeholder="Email" defaultValue={values.EndAt}
                                                            onChange={handleChange} />
                                                        <label >End At</label>
                                                    </div>
                                                    {errors.EndAt ? <div className='error'>{errors.EndAt}</div> : null}
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="my-3">
                                                    <div className="form-floating">
                                                        <select className="form-select" id="floatingSelectGrid" name='project' defaultValue={values.City} aria-label="Floating label select example" onChange={handleChange} >
                                                            <option selected ></option>
                                                            <option defaultValue="1">One</option>
                                                            <option defaultValue="2">Two</option>
                                                            <option defaultValue="3">Three</option>
                                                        </select>
                                                        <label htmlFor="floatingSelectGrid">City</label>
                                                    </div>
                                                    {errors.City ? <div className='error'>{errors.City}</div> : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <button className='active_Servicesbtn px-4 mt-3 py-3 w-75 d-block m-auto' type='submit'>
                                                Save Service
                                            </button>
                                            <button className='Servicesbtn px-4 mt-3 py-3  w-75 d-block m-auto' >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </>
                        )}
                    </Formik>
                }
            </div>
        </div>
    )
}

export default BookingStatus

