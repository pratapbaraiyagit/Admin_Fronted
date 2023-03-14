import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineDashboard } from 'react-icons/md'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import * as yup from "yup";
import { Formik, Form } from 'formik';
import { styled } from '@mui/material/styles';
import { adminCityAdd, adminCityDelete, adminCityEdit, adminCityListing, adminCityUpdate } from '../../../Redux/Actions/AdminPanel/addCity'
import DataTable from 'react-data-table-component'
import { toast } from 'react-toastify'
import { TiEdit } from 'react-icons/ti'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import Spinner from '../../../Components/Spinner'
import { adminStateListing } from '../../../Redux/Actions/AdminPanel/addState'
import DeleteModal from '../../../Components/AdminPanel/Common/Modal/DeleteModal'
import 'react-toastify/dist/ReactToastify.css';
import './City.scss'

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 1,
    width: 18,
    height: 18,
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    'input:hover ~ &': {
        backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
}));

function City() {

    const dispatch = useDispatch()

    const cityList = useSelector((state) => state?.adminCity?.cityList)
    const cityDataList = cityList?.data
    const cityEditReducers = useSelector((state) => state?.adminCity?.cityEdit)
    const cityEdit = cityEditReducers?.city

    const stateList = useSelector((state) => state?.adminState?.stateList)
    const stateDataList = stateList?.data

    const [Switch, setSwitch] = useState('City List')

    const [selectState, setSelectState] = useState('')

    const [spinnerLoading, setSpinnerLoading] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [editId, setEditId] = useState('')
    const [deleteId, setDeleteId] = useState('')

    const validationCity = yup.object({
        cityName: yup.string().required('City is required.'),
        state: yup.string().required('State is required.'),
    })

    const ListingApiCall = () => {
        dispatch(adminCityListing())
            .then((res) => {
                setSpinnerLoading(true)
            })
    }

    useEffect(() => {
        ListingApiCall()
        dispatch(adminStateListing())
        // dispatch(adminEnableCategoryListing())
        // dispatch(adminCityListing())
    }, [])

    const listingApi = () => {
        dispatch(adminCityListing())
        setSwitch('City List')
        setEditId('')
    }

    const onSubmitAddCity = ((values) => {
        setSpinnerLoading(false)
        const data = {
            cityName: values?.cityName,
            stateId: selectState
        }
        dispatch(adminCityAdd(data))
            .then((res) => {
                toast.success(res.message || 'Success')
                ListingApiCall()
                setSpinnerLoading(false)
                setSwitch('City List')
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    })

    const onSubmitEditCity = (data) => {
        setSpinnerLoading(false)
        setEditId(data._id)
        dispatch(adminCityEdit(data._id))
            .then(res => {
                setSelectState(res?.city?.stateId?._id);
                setSpinnerLoading(true)
            })
            .then((res) => {
                setSpinnerLoading(true)
            })
        setSpinnerLoading(false)
        setSwitch('Edit City')
        ListingApiCall()
    }
    const onSubmitUpdateCity = (values, i) => {
        setSpinnerLoading(false)
        const data = {
            cityName: values?.cityName,
            stateId: selectState
        }
        dispatch(adminCityUpdate(data, editId))
            .then((res) => {
                setSpinnerLoading(true)
                toast.success(res.message || 'Success')
                setSwitch('City List')
                ListingApiCall()
                setEditId('')
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    }

    const onSubmitDeleteCity = () => {
        setSpinnerLoading(false)
        dispatch(adminCityDelete(deleteId))
            .then((res) => {
                toast.success(res.message || 'Success')
                setSwitch('City List')
                setEditId('')
                ListingApiCall()
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    }
    const onSubmitCancel = () => {
        setSwitch('City List')
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
            name: 'City Name',
            selector: (row) => row.cityName,
            sortable: true,
        },
        {
            name: 'State Name',
            selector: (row) => row.stateId?.stateName,
            sortable: true,
        },
        {
            name: 'Action',
            selector: (row) => row.action,
            cell: (rows) => (
                <div className="d-flex align-middle">
                    <div className="Edit me-3" onClick={() => onSubmitEditCity(rows)}><TiEdit /></div>
                    <div className="Remove" style={{ cursor: 'pointer' }} onClick={() => handlerDelete(rows._id)} ><RiDeleteBin7Fill /></div>
                </div>
            )
        }
    ]

    return (
        <div>
            <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                <div className=" d-flex alight-items-center py-2">
                    <h5 className='mx-1 my-0 d-flex align-items-center ' style={{ fontSize: '18px' }}><b>City Management</b></h5>
                </div>
            </div>
            <div className="bg-white header">
                <div className="d-flex pt-3" style={{ borderBottom: '2px solid rgba(119, 119, 119,0.5)', display: 'flex', justifyContent: 'space-between' }}>
                    <div className="d-flex pt-3">
                        <div className={`py-4 px-3 ms-3 ${Switch !== 'City List' ? 'not-active' : 'active'}`} onClick={listingApi}>
                            <h6 className='m-0 d-flex alight-items-center'><b> <AiOutlineMenuUnfold className='me-2' />City List</b></h6>
                        </div>
                        {editId ?
                            <div className={`py-4 px-3 ms-3 ${Switch === 'City List' ? 'not-active' : 'active'}`} onClick={() => { setSwitch('Edit City') }}>
                                <h6 className='m-0'><b> + {'   '}Edit City</b></h6>
                            </div>
                            :
                            <div className={`py-4 px-3 ms-3 ${Switch === 'City List' ? 'not-active' : 'active'}`} onClick={() => { setSwitch('Create City') }}>
                                <h6 className='m-0'><b> + {'   '}Add City</b></h6>
                            </div>
                        }
                    </div>
                </div>
                {Switch === 'City List' ?
                    <div className='tbl-responsive'>
                        {spinnerLoading ?
                            <DataTable
                                columns={columns}
                                data={cityDataList?.length ? cityDataList : []}
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
                                            cityName: cityEdit?.cityName,
                                            state: cityEdit?.stateId?.stateName,
                                        }}
                                        validateOnBlur={false}
                                        validationSchema={validationCity}
                                        onSubmit={onSubmitUpdateCity}
                                    >
                                        {(props) => (
                                            <>
                                                <Form>
                                                    <div className="container-fluid py-3">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="my-3">
                                                                    <div className="form-floating">
                                                                        <select
                                                                            className="form-select pt-0 pb-0 selectBox"
                                                                            id="floatingSelectGrid"
                                                                            name='state'
                                                                            onChange={(e) => {
                                                                                const index = e.target.selectedIndex;
                                                                                const el = e.target.childNodes[index]
                                                                                const option = el.getAttribute('id');
                                                                                setSelectState(option);
                                                                                props.handleChange(e)
                                                                            }}
                                                                            value={props.values.state}
                                                                            aria-label="Floating label select example"
                                                                        >
                                                                            <option disabled selected >Select State</option>
                                                                            {stateDataList.map((item) => (
                                                                                <option
                                                                                    id={item._id}
                                                                                    defaultValue={item.id}
                                                                                    key={item.id}>
                                                                                    {item?.stateName}
                                                                                </option>))}
                                                                        </select>
                                                                    </div>
                                                                    {props.errors.state && props.touched.state ? <div className='error'>{props.errors.state}</div> : ""}
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="my-3">
                                                                    <div className="form-floating ">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name='cityName'
                                                                            onChange={props.handleChange}
                                                                            value={props.values.cityName}
                                                                            placeholder={props.values.cityName || "Message"}
                                                                        />
                                                                        <label >City Name</label>
                                                                    </div>
                                                                    {props.errors.cityName && props.touched.cityName ? <div className='error'>{props.errors.CityName}</div> : ""}
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
                                        cityName: '',
                                        state: '',
                                    }}
                                    validateOnBlur={false}
                                    validationSchema={validationCity}
                                    onSubmit={onSubmitAddCity}
                                >
                                    {(props) => (
                                        <>
                                            <Form>
                                                <div className="container-fluid py-3">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="my-3">
                                                                <div className="form-floating">
                                                                    <select
                                                                        className="form-select pt-0 pb-0 selectBox"
                                                                        id="floatingSelectGrid"
                                                                        name='state'
                                                                        onChange={(e) => {
                                                                            const index = e.target.selectedIndex;
                                                                            const el = e.target.childNodes[index]
                                                                            const option = el.getAttribute('id');
                                                                            setSelectState(option);
                                                                            props.handleChange(e)
                                                                        }}
                                                                        aria-label="Floating label select example"
                                                                    >
                                                                        <option disabled selected >Select State</option>
                                                                        {stateDataList.map((item) => (
                                                                            <option
                                                                                id={item._id}
                                                                                value={item.id}
                                                                                key={item.id}>
                                                                                {item?.stateName}
                                                                            </option>))}
                                                                    </select>
                                                                </div>
                                                                {props.errors.state && props.touched.state ? <div className='error'>{props.errors.state}</div> : ""}
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="my-3">
                                                                <div className="form-floating ">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name='cityName'
                                                                        onChange={props.handleChange}
                                                                        value={props.values.cityName}
                                                                        placeholder={props.values.cityName || "Message"}
                                                                    />
                                                                    <label >City Name</label>
                                                                </div>
                                                                {props.errors.cityName && props.touched.cityName ? <div className='error'>{props.errors.cityName}</div> : ""}
                                                            </div>
                                                        </div>

                                                    </div>
                                                    {/* <h5>Service Mapping</h5>
                                                    <div className='container-fluid mappContainer'>
                                                        <div className='row'>
                                                            <div className='col-4 heading '>
                                                                Category Name
                                                            </div>
                                                            <div className='col-4 heading'>
                                                                Sub Category Name
                                                            </div>
                                                            <div className='col-4 heading'>
                                                                Service
                                                            </div>
                                                        </div>
                                                        {serviceMapping.map((item, index) => (
                                                            <div className='row p-2'>
                                                                <div style={{ width: '35%' }}>{item.category}</div>
                                                                <div style={{ width: '65%', }}>
                                                                    {item.subCategory.map((data) => (
                                                                        <>
                                                                            <div className='subCategory'>
                                                                                <div style={{ width: '50%' }}>
                                                                                    {data.name}
                                                                                </div>
                                                                                <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                                                                                    {
                                                                                        data.serviceInfo.map((list) => (
                                                                                            <div style={{ paddingBottom: '5px' }}>
                                                                                                <FormControlLabel control={<Checkbox sx={{
                                                                                                    color: '#C5C5C5',
                                                                                                    '&.Mui-checked': {
                                                                                                        color: '#C5C5C5',
                                                                                                    },
                                                                                                }}
                                                                                                    icon={<BpIcon />} />}
                                                                                                    label={list.title} sx={{ height: '20px', padding: '0px', }} />
                                                                                            </div>
                                                                                        ))
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                            <br />
                                                                        </>
                                                                    ))}
                                                                </div>
                                                                <hr />
                                                            </div>
                                                        ))}
                                                    </div> */}
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
            <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} onSubmitDelete={onSubmitDeleteCity} onSubmitCancel={onSubmitCancel} />
        </div>
    )
}

export default City
