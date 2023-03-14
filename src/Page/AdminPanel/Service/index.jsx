import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { toast } from 'react-toastify'
import Spinner from '../../../Components/Spinner'
import { TiEdit } from 'react-icons/ti'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { MdOutlineDashboard } from 'react-icons/md'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { Formik, Form } from 'formik';
import * as yup from "yup";
import { adminServiceAdd, adminServiceDelete, adminServiceEdit, adminServiceListing, adminServiceUpdate } from '../../../Redux/Actions/AdminPanel/adminService'
import { adminWiseSubCategoryListing } from '../../../Redux/Actions/AdminPanel/adminSubCategory'
import { adminEnableCategoryListing } from '../../../Redux/Actions/AdminPanel/adminCategory'
import { adminCityListing } from '../../../Redux/Actions/AdminPanel/addCity'
import DeleteModal from '../../../Components/AdminPanel/Common/Modal/DeleteModal'
import Select from 'react-select';
import 'react-toastify/dist/ReactToastify.css';
import './Service.scss'

function Service() {

    const dispatch = useDispatch()

    const serviceList = useSelector((state) => state?.adminService?.serviceList)
    const serviceDataList = serviceList?.data
    const serviceEditReducers = useSelector((state) => state?.adminService?.serviceEdit)
    const serviceEdit = serviceEditReducers?.service
    console.log('serviceEdit :>> ', serviceEdit?.cityId?.map(e => e.cityName))

    const categoryEnableList = useSelector((state) => state?.adminSubCategory?.categoryEnableList)
    const categoryData = categoryEnableList?.data

    const cityList = useSelector((state) => state?.adminCity?.cityList)
    const cityDataList = cityList?.data

    const categoryWiseList = useSelector((state) => state?.adminSubCategory?.categoryWiseList)
    const categoryWiseDataList = categoryWiseList?.subCategory

    const [arg, setArg] = useState({
        totalPages: 2,
        totalRecords: 9999
    });

    const [options, setOptions] = useState([]);
    // console.log('options :>> ', options);

    const [Switch, setSwitch] = useState('Service List')

    const [selectState, setSelectState] = useState('')
    const [selectStateCategory, setSelectStateCategory] = useState('')
    const [selectStateSubCategory, setSelectStateSubCategory] = useState('')
    const [selectStateCity, setSelectStateCity] = useState([])

    const [spinnerLoading, setSpinnerLoading] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [editId, setEditId] = useState('')
    const [deleteId, setDeleteId] = useState('')

    const validationService = yup.object({
        serviceName: yup.string().required('Service is required.'),
        status: yup.string().required('Status is required.'),
        serviceDescription: yup.string().required('Description is required.'),
        category: yup.string().required('Category is required.'),
        subCategory: yup.string().required('Sub Category is required.'),
        // city: yup.string().required('City is required.')
    })


    const ListingApiCall = () => {
        dispatch(adminServiceListing())
            .then((res) => {
                setSpinnerLoading(true)
            })
    }

    useEffect(() => {
        ListingApiCall()
        dispatch(adminEnableCategoryListing())
        dispatch(adminCityListing())
            .then(res => {
                setOptions(res.data?.map((item) => ({
                    value: item?._id,
                    label: item?.cityName
                })));
                setSpinnerLoading(true)
            })
    }, [])
    useEffect(() => {
        if (selectStateCategory) {
            dispatch(adminWiseSubCategoryListing(selectStateCategory))
                .then((res) => {
                    setSpinnerLoading(true)
                })
        }
    }, [selectStateCategory])

    const listingApi = () => {
        dispatch(adminServiceListing(arg))
        setSwitch('Service List')
        setEditId('')
    }

    const onSubmitAddService = ((values) => {
        setSpinnerLoading(false)
        const data = {
            serviceName: values?.serviceName,
            description: values?.serviceDescription,
            categoryId: selectStateCategory,
            subCategoryId: selectStateSubCategory,
            cityId: selectStateCity,
            isActive: selectState
        }
        dispatch(adminServiceAdd(data))
            .then((res) => {
                toast.success(res.message || 'Success')
                ListingApiCall()
                setSpinnerLoading(false)
                setSwitch('Service List')
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    })

    const onSubmitEditService = (data) => {
        setSpinnerLoading(false)
        setEditId(data._id)
        dispatch(adminServiceEdit(data._id))
            .then(res => {
                setSpinnerLoading(true)
                setSelectStateCategory(res?.service?.categoryId?._id);
                setSelectStateSubCategory(res?.service?.subCategoryId?._id);
                setSelectStateCity(res?.service?.cityId);
                setSelectState(data?.isActive)
                // dispatch(adminWiseSubCategoryListing(res?.service?.categoryId?._id))
                setSpinnerLoading(false)
                dispatch(adminWiseSubCategoryListing(res?.service?.categoryId?._id))
            })
            .then((res) => {
                setSpinnerLoading(true)
            })
        setSpinnerLoading(false)
        setSwitch('edit')
        ListingApiCall()
    }
    const onSubmitUpdateService = (values, i) => {
        setSpinnerLoading(false)
        const data = {
            serviceName: values?.serviceName,
            description: values?.serviceDescription,
            categoryId: selectStateCategory,
            subCategoryId: selectStateSubCategory,
            cityId: selectStateCity,
            isActive: selectState
        }
        dispatch(adminServiceUpdate(data, editId))
            .then((res) => {
                setSpinnerLoading(true)
                toast.success(res.message || 'Success')
                setSwitch('Service List')
                ListingApiCall()
                setEditId('')
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    }

    const onSubmitDeleteService = () => {
        setSpinnerLoading(false)
        dispatch(adminServiceDelete(deleteId))
            .then((res) => {
                setDeleteModal(false)
                toast.success(res.message || 'Success')
                setSwitch('Service List')
                setEditId('')
                ListingApiCall()
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    }
    const onSubmitCancel = () => {
        setSwitch('Service List')
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
            name: 'Name',
            selector: (row) => row.serviceName,
            sortable: true,
        },
        {
            name: 'Category',
            selector: (row) => row.categoryId?.categoryName,
            sortable: true,
        },
        {
            name: 'Description',
            selector: (row) => row.description,
            sortable: true,
        },
        {
            name: 'Sub Category',
            selector: (row) => row.subCategoryId?.subCategoryName,
            sortable: true,
        },
        {
            name: 'City List',
            selector: (row) => row.cityId?.map(e => e.cityName).join(","),
            sortable: true,
        },
        {
            name: 'Status',
            selector: (row) => row.isActive,
            cell: (rows) => (
                <div className={`${rows.isActive ? rows.isActive === true ? 'enable' : 'disable' : rows.isActive === false ? 'disable' : 'disable'}`}>
                    {rows.isActive ? rows.isActive && "Enable" : "Disable"}
                </div>
            )
        },
        {
            name: 'Action',
            selector: (row) => row.action,
            cell: (rows) => (
                <div className="d-flex align-middle">
                    <div className="Edit me-3" onClick={() => onSubmitEditService(rows)}><TiEdit /></div>
                    <div className="Remove" style={{ cursor: 'pointer' }} onClick={() => handlerDelete(rows._id)} ><RiDeleteBin7Fill /></div>
                </div>
            )
        }
    ]

    const cityHandleChange = (selectedOption) => {
        setSelectStateCity(selectedOption?.map((item) => item?.value))
    }

    const customStylesSelect = {
        control: base => ({
            ...base,
            minHeight: 58
        })
    };

    return (
        <div>
            <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                <div className=" d-flex alight-items-center py-2">
                    <h5 className='mx-1 my-0 d-flex align-items-center ' style={{ fontSize: '18px' }}><b>Service Management</b></h5>
                </div>
            </div>

            <div className="bg-white header">
                <div className="d-flex pt-3" style={{ borderBottom: '2px solid rgba(119, 119, 119,0.5)' }}>
                    <div className={`py-4 px-3 ms-3 ${Switch !== 'Service List' ? 'not-active' : 'active'}`} onClick={listingApi}>
                        <h6 className='m-0 d-flex alight-items-center'><b> <AiOutlineMenuUnfold className='me-2' />Service List</b></h6>
                    </div>
                    {editId ?
                        <div className={`py-4 px-3 ms-3 ${Switch === 'Service List' ? 'not-active' : 'active'}`} onClick={() => { setSwitch('edit') }}>
                            <h6 className='m-0'><b> + {'   '}Edit Service</b></h6>
                        </div>
                        :
                        <div className={`py-4 px-3 ms-3 ${Switch === 'Service List' ? 'not-active' : 'active'}`} onClick={() => { setSwitch('add') }}>
                            <h6 className='m-0'><b> + {'   '}Add Service</b></h6>
                        </div>
                    }

                </div>
                {Switch === 'Service List' ?
                    <div className='tbl-responsive'>
                        {spinnerLoading ?
                            <DataTable
                                columns={columns}
                                data={serviceDataList?.length ? serviceDataList : []}
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
                                            serviceName: serviceEdit?.serviceName,
                                            serviceDescription: serviceEdit?.description,
                                            category: serviceEdit?.categoryId?.categoryName,
                                            subCategory: serviceEdit?.subCategoryId?.subCategoryName,
                                            city: serviceEdit?.cityId?.map(e => e.cityName),
                                            status: serviceEdit?.isActive,
                                        }}
                                        validateOnBlur={false}
                                        validationSchema={validationService}
                                        onSubmit={onSubmitUpdateService}
                                    >
                                        {(props) => (
                                            <>
                                                <Form >
                                                    <div className="container-fluid py-3">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="my-3">
                                                                    <div className="form-floating ">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name='serviceName'
                                                                            onChange={props.handleChange}
                                                                            value={props.values.serviceName}
                                                                            placeholder={props.values.serviceName || "Message"}
                                                                        />
                                                                        <label >Service Name</label>
                                                                    </div>
                                                                    {props.errors.serviceName && props.touched.serviceName ? <div className='error'>{props.errors.serviceName}</div> : ""}
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="my-3">
                                                                    <div className="form-floating ">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name='serviceDescription'
                                                                            onChange={props.handleChange}
                                                                            value={props.values.serviceDescription}
                                                                            placeholder={props.values.serviceDescription || "Message"}
                                                                        />
                                                                        <label >Description</label>
                                                                    </div>
                                                                    {props.errors.serviceDescription && props.touched.serviceDescription ? <div className='error'>{props.errors.serviceDescription}</div> : ""}
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="my-3">
                                                                    <div className="form-floating">
                                                                        <select
                                                                            className="form-select pt-0 pb-0 selectBox"
                                                                            id="floatingSelectGrid"
                                                                            name='category'
                                                                            onChange={(e) => {
                                                                                const index = e.target.selectedIndex;
                                                                                const el = e.target.childNodes[index]
                                                                                const option = el.getAttribute('id');
                                                                                setSelectStateCategory(option);
                                                                                props.handleChange(e)
                                                                                // setSpinnerLoading(true)
                                                                                // dispatch(adminWiseSubCategoryListing(selectStateCategory)).then(res => setSpinnerLoading(true))
                                                                            }}
                                                                            value={props.values.category}
                                                                            aria-label="Floating label select example"
                                                                        >
                                                                            <option disabled selected >Select Category</option>
                                                                            {categoryData?.map((item) => (
                                                                                <option
                                                                                    id={item._id}
                                                                                    defaultValue={item?._id}
                                                                                    key={item._id}
                                                                                >
                                                                                    {item?.categoryName}
                                                                                </option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                    {props.errors.category && props.touched.category ? <div className='error'>{props.errors.category}</div> : ""}
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="my-3">
                                                                    <div className="form-floating">
                                                                        <select
                                                                            className="form-select pt-0 pb-0 selectBox"
                                                                            id="floatingSelectGrid"
                                                                            name='subCategory'
                                                                            onChange={(e) => {
                                                                                const index = e.target.selectedIndex;
                                                                                const el = e.target.childNodes[index]
                                                                                const option = el.getAttribute('id');
                                                                                setSelectStateSubCategory(option);
                                                                                props.handleChange(e)
                                                                            }}
                                                                            value={props.values.subCategory}
                                                                            aria-label="Floating label select example"
                                                                        >
                                                                            <option disabled selected >Select Sub Category</option>
                                                                            {categoryWiseDataList?.map((item) => (
                                                                                <option
                                                                                    id={item._id}
                                                                                    defaultValue={item?._id}
                                                                                    key={item._id}
                                                                                >{item?.subCategoryName}</option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                    {props.errors.subCategory && props.touched.subCategory ? <div className='error'>{props.errors.subCategory}</div> : ""}
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="my-3">
                                                                    <div className="form-floating">
                                                                        <Select
                                                                            id="floatingSelectGrid"
                                                                            name='city'
                                                                            options={options}
                                                                            isMulti
                                                                            isClearable={true}
                                                                            isDisabled={false}
                                                                            isLoading={false}
                                                                            onChange={cityHandleChange}
                                                                            styles={customStylesSelect}
                                                                            defaultInputValue={props.values.city}

                                                                        />
                                                                        {console.log('props.value :>> ', props.values.city)}
                                                                        {/* <select
                                                                            className="form-select pt-0 pb-0 selectBox"
                                                                            id="floatingSelectGrid"
                                                                            name='city'
                                                                            onChange={(e) => {
                                                                                const index = e.target.selectedIndex;
                                                                                const el = e.target.childNodes[index]
                                                                                const option = el.getAttribute('id');
                                                                                setSelectStateCity(option);
                                                                                props.handleChange(e)
                                                                            }}
                                                                            value={props.values.city}
                                                                            aria-label="Floating label select example"
                                                                        >
                                                                            <option disabled selected >Select City</option>
                                                                            {cityDataList?.map((item) => (
                                                                                <option
                                                                                    id={item._id}
                                                                                    defaultValue={item._id}
                                                                                    key={item._id} >
                                                                                    {item?.cityName}</option>
                                                                            ))}
                                                                        </select> */}
                                                                    </div>
                                                                    {props.errors.city && props.touched.city ? <div className='error'>{props.errors.city}</div> : ""}
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="my-3">
                                                                    <div className="form-floating">
                                                                        <select
                                                                            className="form-select pt-0 pb-0 selectBox"
                                                                            id="floatingSelectGrid"
                                                                            name='status'
                                                                            onChange={(e) => {
                                                                                const value = e.target.value;
                                                                                setSelectState(value);
                                                                                props.handleChange(e)
                                                                            }}
                                                                            value={props.values.status}
                                                                            aria-label="Floating label select example"
                                                                        >
                                                                            <option disabled selected >Select Status</option>
                                                                            <option value='true'>Enable</option>
                                                                            <option value='false'>Disable</option>
                                                                        </select>
                                                                    </div>
                                                                    {props.errors.status && props.touched.status ? <div className='error'>{props.errors.status}</div> : ""}
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
                                                                <button className='Servicesbtn px-4 mt-3 py-3' onClick={onSubmitCancel} >
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
                                        serviceName: '',
                                        serviceDescription: '',
                                        category: '',
                                        subCategory: '',
                                        city: '',
                                        status: '',
                                    }}
                                    validateOnBlur={false}
                                    validationSchema={validationService}
                                    onSubmit={onSubmitAddService}
                                >
                                    {(props) => (
                                        <>
                                            <Form >
                                                <div className="container-fluid py-3">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="my-3">
                                                                <div className="form-floating ">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name='serviceName'
                                                                        onChange={props.handleChange}
                                                                        value={props.values.serviceName}
                                                                        placeholder={props.values.serviceName || "Message"}
                                                                    />
                                                                    <label >Service Name</label>
                                                                </div>
                                                                {props.errors.serviceName && props.touched.serviceName ? <div className='error'>{props.errors.serviceName}</div> : ""}
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="my-3">
                                                                <div className="form-floating ">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name='serviceDescription'
                                                                        onChange={props.handleChange}
                                                                        value={props.values.serviceDescription}
                                                                        placeholder={props.values.serviceDescription || "Message"}
                                                                    />
                                                                    <label >Description</label>
                                                                </div>
                                                                {props.errors.serviceDescription && props.touched.serviceDescription ? <div className='error'>{props.errors.serviceDescription}</div> : ""}
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="my-3">
                                                                <div className="form-floating">
                                                                    <select
                                                                        className="form-select pt-0 pb-0 selectBox"
                                                                        id="floatingSelectGrid"
                                                                        name='category'
                                                                        onChange={(e) => {
                                                                            const value = e.target.value;
                                                                            setSelectStateCategory(value);
                                                                            props.handleChange(e)
                                                                            dispatch(adminWiseSubCategoryListing(value)).then(res => setSpinnerLoading(true))
                                                                        }}
                                                                        aria-label="Floating label select example"
                                                                    >
                                                                        <option disabled selected >Select Category</option>
                                                                        {categoryData?.map((item) => (
                                                                            <option
                                                                                value={item?._id}
                                                                                key={item._id}
                                                                            >
                                                                                {item?.categoryName}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                                {props.errors.category && props.touched.category ? <div className='error'>{props.errors.category}</div> : ""}
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="my-3">
                                                                <div className="form-floating">
                                                                    <select
                                                                        className="form-select pt-0 pb-0 selectBox"
                                                                        id="floatingSelectGrid"
                                                                        name='subCategory'
                                                                        onChange={(e) => {
                                                                            const value = e.target.value;
                                                                            setSelectStateSubCategory(value);
                                                                            props.handleChange(e)
                                                                        }}
                                                                        aria-label="Floating label select example"
                                                                    >
                                                                        <option disabled selected >Select Sub Category</option>
                                                                        {categoryWiseDataList?.map((item) => (
                                                                            <option value={item?._id}
                                                                                key={item._id}
                                                                            >{item?.subCategoryName}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                                {props.errors.subCategory && props.touched.subCategory ? <div className='error'>{props.errors.subCategory}</div> : ""}
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="my-3">
                                                                <div className="form-floating">
                                                                    <Select
                                                                        id="floatingSelectGrid"
                                                                        name='city'
                                                                        options={options}
                                                                        isMulti
                                                                        isClearable={true}
                                                                        isDisabled={false}
                                                                        isLoading={false}
                                                                        onChange={cityHandleChange}
                                                                        styles={customStylesSelect}
                                                                    />
                                                                    {/* <select
                                                                        className="form-select pt-0 pb-0 selectBox"
                                                                        id="floatingSelectGrid"
                                                                        name='city'
                                                                        onChange={(e) => {
                                                                            const value = e.target.value;
                                                                            setSelectStateCity(value);
                                                                            props.handleChange(e)
                                                                        }}
                                                                        aria-label="Floating label select example"
                                                                    >
                                                                        <option disabled selected >Select City</option>
                                                                        {cityDataList?.map((item) => (
                                                                            <option value={item?._id} key={item._id}>{item?.cityName}</option>
                                                                        ))}
                                                                    </select> */}
                                                                </div>
                                                                {/* {props.errors.city && props.touched.city ? <div className='error'>{props.errors.city}</div> : ""} */}
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="my-3">
                                                                <div className="form-floating">
                                                                    <select
                                                                        className="form-select pt-0 pb-0 selectBox"
                                                                        id="floatingSelectGrid"
                                                                        name='status'
                                                                        onChange={(e) => {
                                                                            const value = e.target.value;
                                                                            setSelectState(value);
                                                                            props.handleChange(e)
                                                                        }}
                                                                        aria-label="Floating label select example"
                                                                    >
                                                                        <option disabled selected >Select Status</option>
                                                                        <option value='true'>Enable</option>
                                                                        <option value='false'>Disable</option>
                                                                    </select>
                                                                </div>
                                                                {props.errors.status && props.touched.status ? <div className='error'>{props.errors.status}</div> : ""}
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
                                                            <button className='Servicesbtn px-4 mt-3 py-3' onClick={onSubmitCancel} >
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
            <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} onSubmitDelete={onSubmitDeleteService} />
        </div>
    )
}

export default Service