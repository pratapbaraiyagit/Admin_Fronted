import React from 'react'
import Table from '../../../Components/Table/Table'
import { MdOutlineDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { TiEdit } from 'react-icons/ti'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import * as yup from "yup";
import { Formik, Form } from 'formik';
import './AvailabilityHours.scss'
import { useState } from 'react'
import { useEffect } from 'react'
function AvailabilityHours() {
    const [Switch, setSwitch] = useState('Availability Hours List')
    const [selecteddata, setselecteddata] = useState({})
    const Service = [
        {
            id: "1",
            thead: ['Day', 'StartAt', 'EndAt', 'Message', 'Service', 'City', 'Action'],
            tbody: [{
                id: '1',
                Day: 'Monday',
                StartAt: 9,
                EndAt: 21,
                Message: 'a ipsum dolor sit amet, conse...',
                Service: 'Pest Control',
                City: 'Ontario',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }, {
                id: '1',
                Day: 'Sunday',
                StartAt: 9,
                EndAt: 18,
                Message: 'b ipsum dolor sit amet, conse...',
                Service: 'Pest Control',
                City: 'Ontario',
                Action: { edit: TiEdit, delete: RiDeleteBin7Fill }
            }]
        }
    ]
    const yupsolver = yup.object({
        Service: yup.string().required('Service is required'),
        Message: yup.string().required('Message is required'),
        Day: yup.string().required('Day is required'),
        StartAt: yup.string().required('Start At  is required'),
        EndAt: yup.string().required('End At is required'),
        City: yup.string().required('City is required'),
    })
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    useEffect(() => {
        if (Switch === 'Availability Hours List') {
            setselecteddata({})
        }
    }, [Switch])

    return (
        <div>
            <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                <div className=" d-flex alight-items-center py-2">
                    <h5 className='mx-1 my-0 d-flex align-items-center ' style={{ fontSize: '18px' }}><b>Availability Hours Management</b></h5>
                </div>
                <div className="d-flex justify-content-end py-2">
                    <div className='p-2 me-3 bg-light' style={{ borderRadius: "4px" }} >
                        <Link >
                            <span className='d-flex align-items-center bg-light p-2'>
                                <MdOutlineDashboard style={{ fontSize: '18px', color: '#E74216' }} className='' />
                                <h5 className='mx-1 my-0' style={{ fontSize: '18px', color: '#E74216' }}>Dashboard</h5> <h5 className='mx-1 my-0 text-muted' style={{ fontSize: '18px' }}>/ Availability Hours</h5>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="d-flex pt-3" style={{ borderBottom: '2px solid rgba(119, 119, 119,0.5)' }}>
                    <div className={`py-4 px-3 ms-3 ${Switch !== 'Availability Hours List' ? 'not-active' : 'active'}`} onClick={() => { setSwitch('Availability Hours List') }}>
                        <h6 className='m-0 d-flex alight-items-center'><b> <AiOutlineMenuUnfold className='me-2' />Availability Hours List</b></h6>
                    </div>
                    <div className={`py-4 px-3 ms-3 ${Switch === 'Availability Hours List' ? 'not-active' : 'active'}`} onClick={() => { setSwitch('Create Availability Hours') }}>
                        <h6 className='m-0'><b> + {'   '} Create Availability Hours</b></h6>
                    </div>
                </div>
                {Switch === 'Availability Hours List' ?
                    <Table data={Service} setSwitch={setSwitch} setselecteddata={setselecteddata} />
                    :
                    <Formik
                        initialValues={selecteddata ? selecteddata : {}}
                        validationSchema={yupsolver}
                        onSubmit={(values) => {
                            console.log("📢[AvailabilityHours.jsx:83]: values: ", values);
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
                                                        <select className="form-select pt-0 pb-0 selectBox" id="floatingSelectGrid" name='Day' defaultValue={values.Day} aria-label="Floating label select example" onChange={handleChange} >
                                                            <option selected >Select Day</option>
                                                            {dayNames.map((e, i) => {
                                                                return (
                                                                    <option defaultValue="1" key={i}>{e}</option>
                                                                )
                                                            })}
                                                        </select>
                                                    </div>
                                                    {errors.Day ? <div className='error'>{errors.Day}</div> : null}
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
                                                        <select className="form-select pt-0 pb-0 selectBox" id="floatingSelectGrid" name='Service' defaultValue={values.Service} aria-label="Floating label select example" onChange={handleChange} >
                                                            <option selected >Select Service Type</option>
                                                            <option defaultValue="1">One</option>
                                                            <option defaultValue="2">Two</option>
                                                            <option defaultValue="3">Pest Control</option>
                                                        </select>
                                                    </div>
                                                    {errors.Service ? <div className='error'>{errors.Service}</div> : null}
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
                                                        <select className="form-select pt-0 pb-0 selectBox" id="floatingSelectGrid" name='project' defaultValue={values.City} aria-label="Floating label select example" onChange={handleChange} >
                                                            <option selected >Select City</option>
                                                            <option defaultValue="1">One</option>
                                                            <option defaultValue="2">Two</option>
                                                            <option defaultValue="3">Ontario</option>
                                                        </select>
                                                    </div>
                                                    {errors.City ? <div className='error'>{errors.City}</div> : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <button className='active_Servicesbtn px-4 mt-3 py-3 w-75 d-block m-auto' type='submit'>
                                                {Object.values(selecteddata).length === 0 ? 'Save' : "Update"}  Availability Hours
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

export default AvailabilityHours