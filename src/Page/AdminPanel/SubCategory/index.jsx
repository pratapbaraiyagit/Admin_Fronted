import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
// import { Spinner } from 'react-bootstrap';
import Spinner from '../../../Components/Spinner';
import { TiEdit } from 'react-icons/ti';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import DataTable from 'react-data-table-component';
import { Formik, Form } from 'formik';
import * as yup from "yup";
import { MdOutlineDashboard } from 'react-icons/md'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { adminEnableCategoryListing } from '../../../Redux/Actions/AdminPanel/adminCategory';
import { adminSubCategoryAdd, adminSubCategoryDelete, adminSubCategoryEdit, adminSubCategoryListing, adminSubCategoryUpdate } from '../../../Redux/Actions/AdminPanel/adminSubCategory'
import { adminCategoryListing } from '../../../Redux/Actions/AdminPanel/adminCategory';
import DeleteModal from '../../../Components/AdminPanel/Common/Modal/DeleteModal';
import 'react-toastify/dist/ReactToastify.css';
import './SubCategory.scss'

function SubCategory() {

    const dispatch = useDispatch()

    const subCategoryList = useSelector((state) => state?.adminSubCategory?.subCategoryList)
    const subCategoryEditReducers = useSelector((state) => state?.adminSubCategory?.subCategoryEdit)
    const subCategoryEdit = subCategoryEditReducers?.subCategory
    const subCategoryDataList = subCategoryList?.data

    const categoryEnableList = useSelector((state) => state?.adminSubCategory?.categoryEnableList)
    const categoryData = categoryEnableList?.data

    const [arg, setArg] = useState({
        totalPages: 2,
        totalRecords: 9999
    });

    const [Switch, setSwitch] = useState('subCategoryList')
    const [selectState, setSelectState] = useState('')
    const [selectStateCategory, setSelectStateCategory] = useState('')

    const [spinnerLoading, setSpinnerLoading] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [editId, setEditId] = useState('')
    const [deleteId, setDeleteId] = useState('')

    const validationSubCategory = yup.object({
        subCategoryName: yup.string().required('Sub category name is required.'),
        category: yup.string().required('Category is required.'),
        status: yup.string().required('Status is required.'),
        subCategoryDescription: yup.string().required('Description is required.'),
    })

    const ListingApiCall = () => {
        dispatch(adminSubCategoryListing())
            .then((res) => {
                setSpinnerLoading(true)
            })
    }
    useEffect(() => {
        ListingApiCall()
    }, [])

    useEffect(() => {
        dispatch(adminEnableCategoryListing())
    }, [arg])

    const listingApi = () => {
        dispatch(adminSubCategoryListing(arg))
        setSwitch('subCategoryList')
        setEditId('')
    }

    const onSubmitAddSubCategory = ((values) => {
        setSpinnerLoading(false)
        const data = {
            categoryId: selectStateCategory,
            subCategoryName: values?.subCategoryName,
            description: values?.subCategoryDescription,
            isActive: selectState
        }
        dispatch(adminSubCategoryAdd(data))
            .then((res) => {
                toast.success(res.message || 'Success')
                ListingApiCall()
                setSpinnerLoading(false)
                setSwitch('subCategoryList')
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    })

    const onSubmitEditSubCategory = (data) => {
        setSpinnerLoading(false)
        setEditId(data._id)
        dispatch(adminSubCategoryEdit(data._id))
            .then(res => {
                setSpinnerLoading(true)
                setSelectStateCategory(res?.subCategory?.categoryId?._id);
                // setSelectStateCategory(data?._id);
                setSelectState(data?.isActive)
            })
        setSwitch('edit')
        ListingApiCall()
    }
    const onSubmitUpdateSubCategory = (values, i) => {
        setSpinnerLoading(false)
        const data = {
            categoryId: selectStateCategory,
            subCategoryName: values?.subCategoryName,
            description: values?.subCategoryDescription,
            isActive: selectState,
        }
        dispatch(adminSubCategoryUpdate(data, editId))
            .then((res) => {
                setSpinnerLoading(true)
                toast.success(res.message || 'Success')
                setSwitch('subCategoryList')
                ListingApiCall()
                setEditId('')
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    }

    const onSubmitDeleteSubCategory = () => {
        setSpinnerLoading(false)
        dispatch(adminSubCategoryDelete(deleteId))
            .then((res) => {
                setDeleteModal(false)
                toast.success(res.message || 'Success')
                setSwitch('subCategoryList')
                setEditId('')
                ListingApiCall()
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    }
    const onSubmitCancel = () => {
        setSwitch('subCategoryList')
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
            selector: (row) => row.categoryId?.categoryName,
            sortable: true,
        },
        {
            name: 'Sub category name',
            selector: (row) => row.subCategoryName,
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
                    <div className="Edit me-3" onClick={() => onSubmitEditSubCategory(rows)}><TiEdit /></div>
                    <div className="Remove" style={{ cursor: 'pointer' }} onClick={() => handlerDelete(rows._id)} ><RiDeleteBin7Fill /></div>
                </div>
            )
        }
    ]
    return (
        <div>
            <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                <div className=" d-flex alight-items-center py-2">
                    <h5 className='mx-1 my-0 d-flex align-items-center ' style={{ fontSize: '18px' }}><b>Sub Category Management</b></h5>
                </div>
            </div>
            <div className="bg-white header">
                <div className="d-flex pt-3" style={{ borderBottom: '2px solid rgba(119, 119, 119,0.5)' }}>
                    <div className={`py-4 px-3 ms-3 ${Switch !== 'subCategoryList' ? 'not-active' : 'active'}`} onClick={listingApi}>
                        <h6 className='m-0 d-flex alight-items-center'><b> <AiOutlineMenuUnfold className='me-2' />Sub Category List</b></h6>
                    </div>
                    {editId ?
                        <div className={`py-4 px-3 ms-3 ${Switch === 'subCategoryList' ? 'not-active' : 'active'}`} onClick={() => { setSwitch('edit') }}>
                            <h6 className='m-0'><b> + {'   '}Edit Sub Category</b></h6>
                        </div>
                        :
                        <div className={`py-4 px-3 ms-3 ${Switch === 'subCategoryList' ? 'not-active' : 'active'}`} onClick={() => { setSwitch('add') }}>
                            <h6 className='m-0'><b> + {'   '}Add Sub Category</b></h6>
                        </div>
                    }
                </div>
                {Switch === 'subCategoryList' ?
                    <div className='tbl-responsive'>
                        {spinnerLoading ?
                            <DataTable
                                columns={columns}
                                data={subCategoryDataList?.length ? subCategoryDataList : []}
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
                            <>{spinnerLoading ?
                                <Formik
                                    initialValues={
                                        {
                                            subCategoryName: subCategoryEdit?.subCategoryName,
                                            category: subCategoryEdit?.categoryId?.categoryName,
                                            status: subCategoryEdit.isActive,
                                            subCategoryDescription: subCategoryEdit?.description
                                        }
                                    }
                                    validationSchema={validationSubCategory}
                                    validateOnBlur={false}
                                    onSubmit={onSubmitUpdateSubCategory}
                                >
                                    {(props) => (
                                        <>
                                            <Form >
                                                <div className="container-fluid py-3">
                                                    <div className="row">
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
                                                                        }}
                                                                        value={props.values.category}
                                                                        aria-label="Floating label select example"
                                                                    >
                                                                        <option disabled selected >Select Category</option>
                                                                        {categoryData?.map((item) => (
                                                                            <option
                                                                                id={item._id}
                                                                                defaultValue={item._id}
                                                                                key={item._id} >
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
                                                                <div className="form-floating ">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name='subCategoryName'
                                                                        onChange={props.handleChange}
                                                                        value={props.values.subCategoryName}
                                                                        placeholder="Sub Category Name"
                                                                    />
                                                                    <label >Sub Category Name</label>
                                                                </div>
                                                                {props.errors.subCategoryName && props.touched.subCategoryName ? <div className='error'>{props.errors.subCategoryName}</div> : ""}
                                                            </div>
                                                        </div>


                                                        <div className="col-6">
                                                            <div className="my-3">
                                                                <div className="form-floating ">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name='subCategoryDescription'
                                                                        onChange={props.handleChange}
                                                                        value={props.values.subCategoryDescription}
                                                                        placeholder={props.values.subCategoryDescription || "Message"}
                                                                    />
                                                                    <label>Description</label>
                                                                </div>
                                                                {props.errors.subCategoryDescription && props.touched.subCategoryDescription ? <div className='error'>{props.errors.subCategoryDescription}</div> : ""}
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
                            <Formik
                                initialValues={
                                    {
                                        subCategoryName: '',
                                        category: '',
                                        status: '',
                                        subCategoryDescription: ''
                                    }
                                }
                                validateOnBlur={false}
                                validationSchema={validationSubCategory}
                                onSubmit={onSubmitAddSubCategory}
                            >
                                {(props) => (
                                    <>
                                        <Form >
                                            <div className="container-fluid py-3">
                                                <div className="row">
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
                                                                    }}
                                                                    // defaultValue={values.Category}
                                                                    aria-label="Floating label select example"
                                                                >
                                                                    <option disabled selected >Select Category</option>
                                                                    {categoryData?.map((item) => (
                                                                        <option value={item?._id} key={item}>{item?.categoryName}</option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            {props.errors.category && props.touched.category ? <div className='error'>{props.errors.category}</div> : ""}
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="my-3">
                                                            <div className="form-floating ">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name='subCategoryName'
                                                                    onChange={props.handleChange}
                                                                    value={props.values.subCategoryName}
                                                                    placeholder="Sub Category Name"
                                                                />
                                                                <label >Sub Category Name</label>
                                                            </div>
                                                            {props.errors.subCategoryName && props.touched.subCategoryName ? <div className='error'>{props.errors.subCategoryName}</div> : ""}
                                                        </div>
                                                    </div>


                                                    <div className="col-6">
                                                        <div className="my-3">
                                                            <div className="form-floating ">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name='subCategoryDescription'
                                                                    onChange={props.handleChange}
                                                                    placeholder={props.values.subCategoryDescription || "Message"}
                                                                    value={props.values.subCategoryDescription}
                                                                />
                                                                <label>Description</label>
                                                            </div>
                                                            {props.errors.subCategoryDescription && props.touched.subCategoryDescription ? <div className='error'>{props.errors.subCategoryDescription}</div> : ""}
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
                        }
                    </>
                }
            </div>
            <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} onSubmitDelete={onSubmitDeleteSubCategory} />
        </div >
    )
}

export default SubCategory
