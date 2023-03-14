
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import Spinner from '../../../Components/Spinner';
import { TiEdit } from 'react-icons/ti';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import DataTable from 'react-data-table-component';
import { Formik, Form } from 'formik';
import * as yup from "yup";
import { MdOutlineDashboard } from 'react-icons/md'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { adminCategoryAdd, adminCategoryDelete, adminCategoryEdit, adminCategoryListing, adminCategoryUpdate } from '../../../Redux/Actions/AdminPanel/adminCategory'
import DeleteModal from '../../../Components/AdminPanel/Common/Modal/DeleteModal';
import 'react-toastify/dist/ReactToastify.css';
import './Category.scss'

function Category() {

    const dispatch = useDispatch()

    const categoryList = useSelector((state) => state?.adminCategory?.categoryList)
    const categoryEditReducers = useSelector((state) => state?.adminCategory?.categoryEdit)
    const categoryEdit = categoryEditReducers.category
    const categoryDataList = categoryList?.data

    const [Switch, setSwitch] = useState('CategoryList')
    const [selectState, setSelectState] = useState('')

    const [spinnerLoading, setSpinnerLoading] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [editId, setEditId] = useState('')
    const [deleteId, setDeleteId] = useState('')

    const validationCategory = yup.object({
        categoryName: yup.string().required('Category name is required.'),
        categoryDescription: yup.string().required('Description is required.'),
        status: yup.string().required('Status is required.'),
    })

    const ListingApiCall = () => {
        dispatch(adminCategoryListing())
            .then((res) => {
                setSpinnerLoading(true)
            })
    }
    useEffect(() => {
        ListingApiCall()
    }, [])

    const listingApi = () => {
        dispatch(adminCategoryListing())
        setSwitch('CategoryList')
        setEditId('')
    }

    const onSubmitAddCategory = ((values) => {
        setSpinnerLoading(false)
        const data = {
            categoryName: values?.categoryName,
            description: values?.categoryDescription,
            isActive: selectState
        }
        dispatch(adminCategoryAdd(data))
            .then((res) => {
                toast.success(res.message || 'Success')
                ListingApiCall()
                setSpinnerLoading(false)
                setSwitch('CategoryList')
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    })

    const onSubmitEditCategory = (data) => {
        setSpinnerLoading(false)
        setEditId(data._id)
        dispatch(adminCategoryEdit(data._id))
            .then(res => {
                setSpinnerLoading(true)
                setSelectState(data?.isActive)
                ListingApiCall()
            })
        setSwitch('edit')
        ListingApiCall()
    }

    const onSubmitUpdateCategory = (values, i) => {
        setSpinnerLoading(false)
        const data = {
            categoryName: values?.categoryName,
            description: values?.categoryDescription,
            isActive: selectState,
        }
        dispatch(adminCategoryUpdate(data, editId))
            .then((res) => {
                setSpinnerLoading(true)
                toast.success(res.message || 'Success')
                setSwitch('CategoryList')
                ListingApiCall()
                setEditId('')
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    }
    const onSubmitDeleteCategory = () => {
        setSpinnerLoading(false)
        dispatch(adminCategoryDelete(deleteId))
            .then((res) => {
                toast.success(res.message || 'Success')
                setDeleteModal(false)
                setSwitch('CategoryList')
                setEditId('')
                ListingApiCall()
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    }

    const onSubmitCancel = () => {
        setSwitch('CategoryList')
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
            name: 'Category Name',
            selector: (row) => row.categoryName,
            sortable: true,
        },
        {
            name: 'Description',
            selector: (row) => row.description,
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
                    <div className="Edit me-3" onClick={() => onSubmitEditCategory(rows)}><TiEdit /></div>
                    <div className="Remove" style={{ cursor: 'pointer' }} onClick={() => handlerDelete(rows._id)} ><RiDeleteBin7Fill /></div>
                </div>
            )
        }
    ]

    return (
        <div>
            <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                <div className=" d-flex alight-items-center py-2">
                    <h5 className='mx-1 my-0 d-flex align-items-center ' style={{ fontSize: '18px' }}><b>Category Management</b></h5>
                </div>
            </div>
            <div className="bg-white header">
                <div className="d-flex pt-3" style={{ borderBottom: '2px solid rgba(119, 119, 119,0.5)' }}>
                    <div className={`py-4 px-3 ms-3 ${Switch !== 'CategoryList' ? 'not-active' : 'active'}`} onClick={listingApi} >
                        <h6 className='m-0 d-flex alight-items-center'><b> <AiOutlineMenuUnfold className='me-2' />Category List</b></h6>
                    </div>
                    {editId ?
                        <div className={`py-4 px-3 ms-3 ${Switch === 'CategoryList' ? 'not-active' : 'active'}`} onClick={() => { setSwitch('edit') }}>
                            <h6 className='m-0'><b> + {'   '}Edit Category</b></h6>
                        </div>
                        :
                        <div className={`py-4 px-3 ms-3 ${Switch === 'CategoryList' ? 'not-active' : 'active'}`} onClick={() => { setSwitch('add') }}>
                            <h6 className='m-0'><b> + {'   '}Add Category</b></h6>
                        </div>
                    }
                </div>
                {Switch === 'CategoryList' ?
                    <div className='tbl-responsive'>
                        {spinnerLoading ?
                            <DataTable
                                columns={columns}
                                data={categoryDataList?.length ? categoryDataList : []}
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
                                            categoryName: categoryEdit?.categoryName,
                                            categoryDescription: categoryEdit?.description,
                                            status: categoryEdit?.isActive,
                                        }}
                                        validationSchema={validationCategory}
                                        validateOnBlur={false}
                                        onSubmit={onSubmitUpdateCategory}
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
                                                                            name='categoryName'
                                                                            onChange={props.handleChange}
                                                                            value={props.values.categoryName}
                                                                            placeholder={props.values.categoryName || "Message"}
                                                                        />
                                                                        <label >Category Name</label>
                                                                    </div>
                                                                    {props.errors.categoryName && props.touched.categoryName ? <div className='error'>{props.errors.categoryName}</div> : ""}
                                                                </div>
                                                            </div>

                                                            <div className="col-6">
                                                                <div className="my-3">
                                                                    <div className="form-floating ">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name='categoryDescription'
                                                                            onChange={props.handleChange}
                                                                            value={props.values.categoryDescription}
                                                                            placeholder={props.values.categoryDescription || "Message"}
                                                                        />
                                                                        <label >Description</label>
                                                                    </div>
                                                                    {props.errors.categoryDescription && props.touched.categoryDescription ? <div className='error'>{props.errors.categoryDescription}</div> : ""}
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
                                                                            defaultValue={props.values.status}
                                                                            aria-label="Floating label select example"
                                                                        >
                                                                            <option disabled > Select Status</option>
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
                            <Formik
                                initialValues={{
                                    categoryName: '',
                                    status: '',
                                    categoryDescription: ''
                                }}
                                validationSchema={validationCategory}
                                validateOnBlur={false}
                                onSubmit={onSubmitAddCategory}
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
                                                                    name='categoryName'
                                                                    onChange={props.handleChange}
                                                                    value={props.values.categoryName}
                                                                    placeholder={props.values.categoryName || "Message"}
                                                                />
                                                                <label >Category Name</label>
                                                            </div>
                                                            {props.errors.categoryName && props.touched.categoryName ? <div className='error'>{props.errors.categoryName}</div> : ""}
                                                        </div>
                                                    </div>

                                                    <div className="col-6">
                                                        <div className="my-3">
                                                            <div className="form-floating ">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name='categoryDescription'
                                                                    onChange={props.handleChange}
                                                                    value={props.values.categoryDescription}
                                                                    placeholder={props.values.categoryDescription || "Message"}
                                                                />
                                                                <label >Description</label>
                                                            </div>
                                                            {props.errors.categoryDescription && props.touched.categoryDescription ? <div className='error'>{props.errors.categoryDescription}</div> : ""}
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
                                                                    // value={props.values.status}
                                                                    aria-label="Floating label select example"
                                                                >
                                                                    <option disabled selected > Select Status</option>
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
                                                        <button className='Servicesbtn px-4 mt-3 py-3 ' onClick={onSubmitCancel}>
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    </>
                                )}
                            </Formik>}
                    </>
                }
            </div>
            <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} onSubmitDelete={onSubmitDeleteCategory} onSubmitCancel={onSubmitCancel} />
        </div >
    )
}

export default Category