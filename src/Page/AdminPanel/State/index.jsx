import React, { useState, useEffect } from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import * as yup from "yup";
import { Formik, Form } from 'formik';
import './State.scss'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { toast } from 'react-toastify'
import { TiEdit } from 'react-icons/ti'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import Spinner from '../../../Components/Spinner'
import { adminStateAdd, adminStateDelete, adminStateEdit, adminStateListing, adminStateUpdate } from '../../../Redux/Actions/AdminPanel/addState'
import DeleteModal from '../../../Components/AdminPanel/Common/Modal/DeleteModal'

function State() {

    const dispatch = useDispatch()

    const stateList = useSelector((state) => state?.adminState?.stateList)
    const stateDataList = stateList?.data
    const stateEditReducers = useSelector((state) => state?.adminState?.stateEdit)
    const stateEdit = stateEditReducers?.state

    const [Switch, setSwitch] = useState('State List')

    const [spinnerLoading, setSpinnerLoading] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [editId, setEditId] = useState('')
    const [deleteId, setDeleteId] = useState('')

    const validationState = yup.object({
        stateName: yup.string().required('State is required.'),
    })

    const ListingApiCall = () => {
        dispatch(adminStateListing())
            .then((res) => {
                setSpinnerLoading(true)
            })
    }

    useEffect(() => {
        ListingApiCall()
    }, [])

    const listingApi = () => {
        dispatch(adminStateListing())
        setSwitch('State List')
        setEditId('')
    }

    const onSubmitAddState = ((values) => {
        setSpinnerLoading(false)
        const data = {
            stateName: values?.stateName,
        }
        dispatch(adminStateAdd(data))
            .then((res) => {
                toast.success(res.message || 'Success')
                ListingApiCall()
                setSpinnerLoading(false)
                setSwitch('State List')
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    })

    const onSubmitEditState = (data) => {
        setSpinnerLoading(false)
        setEditId(data._id)
        dispatch(adminStateEdit(data._id))
            .then(res => {
                setSpinnerLoading(true)
                ListingApiCall()
            })
        setSwitch('Edit City')
        ListingApiCall()
    }
    const onSubmitUpdateState = (values, i) => {
        setSpinnerLoading(false)
        const data = {
            stateName: values?.stateName,
        }
        dispatch(adminStateUpdate(data, editId))
            .then((res) => {
                setSpinnerLoading(true)
                toast.success(res.message || 'Success')
                setSwitch('State List')
                ListingApiCall()
                setEditId('')
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    }

    const onSubmitDeleteState = () => {
        setSpinnerLoading(false)
        dispatch(adminStateDelete(deleteId))
            .then((res) => {
                toast.success(res.message || 'Success')
                setSwitch('State List')
                setEditId('')
                ListingApiCall()
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    }
    const onSubmitCancel = () => {
        setSwitch('State List')
        setEditId('')
    }

    const handlerDelete = (id) => {
        setDeleteId(id)
        setDeleteModal(true)
    }

    const customStyles = {
        title: {
            style: {
                fontColor: 'red',
            }
        },
        rows: {
            style: {
                minHeight: '60px',
                border: '12px solid #fff4f0'
            }
        },
        headCells: {
            style: {
                fontSize: '15px',
                fontWeight: '500',
            },
        },
        cells: {
            style: {
                fontSize: '15px',
                backgroundColor: "white",
            },
        },
    };

    let columns = [
        {
            name: 'State Name',
            selector: (row) => row.stateName,
            sortable: true,
        },
        {
            name: 'Action',
            selector: (row) => row.action,
            cell: (rows) => (
                <div className="d-flex align-middle">
                    <div className="Edit me-3" onClick={() => onSubmitEditState(rows)}><TiEdit /></div>
                    <div className="Remove" style={{ cursor: 'pointer' }} onClick={() => handlerDelete(rows._id)} ><RiDeleteBin7Fill /></div>
                </div>
            )
        }
    ]

    return (
        <div>
            <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                <div className=" d-flex alight-items-center py-2">
                    <h5 className='mx-1 my-0 d-flex align-items-center ' style={{ fontSize: '18px' }}><b>State Management</b></h5>
                </div>
            </div>
            <div className="bg-white header">
                <div className="d-flex pt-3" style={{ borderBottom: '2px solid rgba(119, 119, 119,0.5)', display: 'flex', justifyContent: 'space-between' }}>
                    <div className="d-flex pt-3">
                        <div className={`py-4 px-3 ms-3 ${Switch !== 'State List' ? 'not-active' : 'active'}`} onClick={listingApi}>
                            <h6 className='m-0 d-flex alight-items-center'><b> <AiOutlineMenuUnfold className='me-2' />State List</b></h6>
                        </div>
                        {editId ?
                            <div className={`py-4 px-3 ms-3 ${Switch === 'State List' ? 'not-active' : 'active'}`} onClick={() => { setSwitch('Edit State') }}>
                                <h6 className='m-0'><b> + {'   '}Edit State</b></h6>
                            </div>
                            :
                            <div className={`py-4 px-3 ms-3 ${Switch === 'State List' ? 'not-active' : 'active'}`} onClick={() => { setSwitch('Create State') }}>
                                <h6 className='m-0'><b> + {'   '}Add State</b></h6>
                            </div>
                        }
                    </div>
                </div>
                {Switch === 'State List' ?
                    <div className='tbl-responsive'>
                        {spinnerLoading ?
                            <DataTable
                                columns={columns}
                                data={stateDataList?.length ? stateDataList : []}
                                pagination
                                customStyles={customStyles}
                            />
                            :
                            <Spinner isSuspense />
                        }
                    </div>
                    :
                    <>
                        {editId ?
                            <>
                                {spinnerLoading ?
                                    <Formik
                                        initialValues={{
                                            stateName: stateEdit?.stateName,
                                        }}
                                        validateOnBlur={false}
                                        validationSchema={validationState}
                                        onSubmit={onSubmitUpdateState}
                                    >
                                        {(props) => (
                                            <>
                                                <Form>
                                                    <div className="container-fluid py-3">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="my-3">
                                                                    <div className="form-floating ">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name='stateName'
                                                                            onChange={props.handleChange}
                                                                            value={props.values.stateName}
                                                                            placeholder={props.values.stateName || "Message"}
                                                                        />
                                                                        <label >State Name</label>
                                                                    </div>
                                                                    {props.errors.stateName && props.touched.stateName ? <div className='error'>{props.errors.stateName}</div> : ""}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row" style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                            <div className='col-3' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                                <button className='active_Servicesbtn px-4 mt-3 py-3' type='submit'>
                                                                    Save
                                                                </button>
                                                            </div>
                                                            <div className='col-3' >
                                                                <button className='Servicesbtn px-4 mt-3 py-3 ' onClick={onSubmitCancel}>
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Form>
                                            </>
                                        )}
                                    </Formik>
                                    :
                                    <Spinner isSuspense />
                                }
                            </>
                            :
                            <>
                                <Formik
                                    initialValues={{
                                        stateName: '',
                                    }}
                                    validateOnBlur={false}
                                    validationSchema={validationState}
                                    onSubmit={onSubmitAddState}
                                >
                                    {(props) => (
                                        <>
                                            <Form>
                                                <div className="container-fluid py-3">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="my-3">
                                                                <div className="form-floating ">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name='stateName'
                                                                        onChange={props.handleChange}
                                                                        value={props.values.stateName}
                                                                        placeholder={props.values.stateName || "Message"}
                                                                    />
                                                                    <label >State Name</label>
                                                                </div>
                                                                {props.errors.stateName && props.touched.stateName ? <div className='error'>{props.errors.stateName}</div> : ""}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                        <div className='col-3' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                            <button className='active_Servicesbtn px-4 mt-3 py-3' type='submit'>
                                                                Save
                                                            </button>
                                                        </div>
                                                        <div className='col-3' >
                                                            <button className='Servicesbtn px-4 mt-3 py-3 ' onClick={onSubmitCancel}>
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Form>
                                        </>
                                    )}
                                </Formik>
                            </>
                        }

                    </>
                }
            </div>
            <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} onSubmitDelete={onSubmitDeleteState} onSubmitCancel={onSubmitCancel} />
        </div>
    )
}

export default State
