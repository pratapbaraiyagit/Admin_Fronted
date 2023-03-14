import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { MdOutlineDashboard } from 'react-icons/md'
import { Formik, Form } from 'formik';
import * as yup from "yup";
import { TablePagination } from '@mui/material';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { adminCustomerFAQAdd, adminCustomerFAQDelete, adminCustomerFAQEdit, adminCustomerFAQListing, adminCustomerFAQUpdate } from '../../../Redux/Actions/AdminPanel/adminCustomerFAQ';
import Accordion from '../../../Components/AdminPanel/Accordion/Accordion'
import Spinner from '../../../Components/Spinner';
import DeleteModal from '../../../Components/AdminPanel/Common/Modal/DeleteModal';
import 'react-toastify/dist/ReactToastify.css';
import './CustomerFaq.scss'

function CustomerFaq() {

    const dispatch = useDispatch()

    const customerFAQList = useSelector((state) => state?.adminCustomerFAQ?.customerFAQList)
    const customerFAQEditReducers = useSelector((state) => state?.adminCustomerFAQ?.customerFAQEdit)
    const customerFAQEdit = customerFAQEditReducers.question
    const customerFAQDataList = customerFAQList?.data

    const [active, setActive] = useState('FAQ')

    const [spinnerLoading, setSpinnerLoading] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [editId, setEditId] = useState('')
    const [deleteId, setDeleteId] = useState('')

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const currentRows = customerFAQDataList?.filter((r, ind) => {
        return ind >= rowsPerPage * page && ind < rowsPerPage * (page + 1);
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const validationCustomerFAQ = yup.object({
        question: yup.string().required('Question is required.'),
        answer: yup.string().required('Answer is required.'),
    })

    const ListingApiCall = () => {
        dispatch(adminCustomerFAQListing())
            .then((res) => {
                setSpinnerLoading(true)
            })
    }
    useEffect(() => {
        ListingApiCall()
    }, [])

    const listingApi = () => {
        dispatch(adminCustomerFAQListing())
        setActive('FAQ')
        setEditId('')
    }

    const onSubmitAddCustomerFAQ = ((values) => {
        setSpinnerLoading(false)
        const data = {
            question: values?.question,
            answer: values?.answer,
        }
        dispatch(adminCustomerFAQAdd(data))
            .then((res) => {
                toast.success(res.message || 'Success')
                ListingApiCall()
                setSpinnerLoading(false)
                setActive('FAQ')
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    })

    const onSubmitEditCustomerFAQ = (index, item) => {
        setSpinnerLoading(false)
        setEditId(item._id)
        dispatch(adminCustomerFAQEdit(item._id))
            .then(res => {
                setSpinnerLoading(true)
                ListingApiCall()
            })
        setActive('edit')
        ListingApiCall()
    }

    const onSubmitUpdateCustomerFAQ = (values, i) => {
        setSpinnerLoading(false)
        const data = {
            question: values?.question,
            answer: values?.answer,
        }
        dispatch(adminCustomerFAQUpdate(data, editId))
            .then((res) => {
                setSpinnerLoading(true)
                toast.success(res.message || 'Success')
                setActive('FAQ')
                ListingApiCall()
                setEditId('')
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    }

    const onSubmitDeleteCustomerFAQ = () => {
        setSpinnerLoading(false)
        dispatch(adminCustomerFAQDelete(deleteId))
            .then((res) => {
                toast.success(res.message || 'Success')
                setDeleteModal(false)
                setActive('FAQ')
                ListingApiCall()
                setEditId('')
            })
            .catch(err => {
                toast.error(err.message || "Something went wrong")
            })
        ListingApiCall()
    }
    const handlerDelete = (id) => {
        setDeleteId(id)
        setDeleteModal(true)
    }

    return (
        <>
            <div>
                <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                    <div className=" d-flex alight-items-center py-2">
                        <h5 className='mx-1 my-0 d-flex align-items-center ' style={{ fontSize: '18px' }}><b>FAQ Management</b></h5>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="d-flex pt-3" style={{ borderBottom: '2px solid rgba(119, 119, 119,0.5)' }}>
                        <div className={`py-4 px-3 ms-3 ${active === 'FAQ' && 'active'}`} style={{ cursor: 'pointer' }} onClick={listingApi} >
                            <h6 className='m-0 d-flex alight-items-center' ><b> <AiOutlineMenuUnfold className='me-2' />FAQ</b></h6>
                        </div>
                        {editId ?
                            <div className={`py-4 px-3 ms-3 ${active !== 'FAQ' && 'active'}`} style={{ cursor: 'pointer' }} onClick={() => { setActive('edit') }}>
                                <h6 className='m-0 d-flex alight-items-center'><b>+ Edit FAQ</b></h6>
                            </div>
                            :
                            <div className={`py-4 px-3 ms-3 ${active !== 'FAQ' && 'active'}`} style={{ cursor: 'pointer' }} onClick={() => { setActive('add') }}>
                                <h6 className='m-0 d-flex alight-items-center'><b>+ Add FAQ</b></h6>
                            </div>
                        }
                    </div>
                    <div className="p-3">
                        {active === 'FAQ' ?
                            <>
                                {spinnerLoading ?
                                    <>
                                        <Accordion
                                            questionsAnswers={customerFAQDataList}
                                            onSubmitEdit={onSubmitEditCustomerFAQ}
                                            handlerDelete={handlerDelete}
                                            currentRows={currentRows}
                                        />
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 25]}
                                            component="div"
                                            count={customerFAQDataList.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                            sx={{
                                                float: 'right',
                                                '.MuiTablePagination-selectLabel': {
                                                    marginBottom: '1px'
                                                },
                                                '.MuiTablePagination-displayedRows': {
                                                    marginBottom: '1px'
                                                },
                                            }}
                                        />
                                    </>
                                    :
                                    <Spinner isSuspense />
                                }
                            </>
                            :
                            <>
                                {editId ?
                                    <>{spinnerLoading ?
                                        <Formik
                                            initialValues={{
                                                question: customerFAQEdit?.question,
                                                answer: customerFAQEdit?.answer
                                            }}
                                            validationSchema={validationCustomerFAQ}
                                            validateOnBlur={false}
                                            onSubmit={onSubmitUpdateCustomerFAQ}
                                        >
                                            {(props) => (
                                                <>
                                                    <Form >
                                                        <div className="my-3">
                                                            <div className="form-floating ">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name='question'
                                                                    onChange={props.handleChange}
                                                                    value={props.values.question}
                                                                    placeholder={props.values.question || "Question"}
                                                                />
                                                                <label >Question</label>
                                                            </div>
                                                            {props.errors.question && props.touched.question ? <div className='error'>{props.errors.question}</div> : ""}
                                                        </div>
                                                        <div className="my-3">
                                                            <div className="form-floating ">
                                                                <textarea
                                                                    type="Answer"
                                                                    className="form-control"
                                                                    name='answer'
                                                                    onChange={props.handleChange}
                                                                    value={props.values.answer}
                                                                    placeholder={props.values.answer || "answer"}
                                                                />
                                                                <label >Answer</label>
                                                            </div>
                                                            {props.errors.answer && props.touched.answer ? <div className='error'>{props.errors.answer}</div> : ""}
                                                        </div>
                                                        <button className='active_Servicesbtn px-4 py-3 my-3 w-100' type='submit' style={{ background: '#FCB800' }}>
                                                            Submit
                                                        </button>
                                                    </Form>
                                                </>
                                            )}
                                        </Formik>
                                        : <Spinner isSuspense />
                                    }
                                    </>
                                    :
                                    <Formik
                                        initialValues={{
                                            question: '',
                                            answer: ''
                                        }}
                                        validationSchema={validationCustomerFAQ}
                                        validateOnBlur={false}
                                        onSubmit={onSubmitAddCustomerFAQ}
                                    >
                                        {(props) => (
                                            <>
                                                <Form >
                                                    <div className="my-3">
                                                        <div className="form-floating ">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name='question'
                                                                onChange={props.handleChange}
                                                                value={props.values.question}
                                                                placeholder={props.values.question || "Question"}
                                                            />
                                                            <label >Question</label>
                                                        </div>
                                                        {props.errors.question && props.touched.question ? <div className='error'>{props.errors.question}</div> : ""}
                                                    </div>
                                                    <div className="my-3">
                                                        <div className="form-floating ">
                                                            <textarea
                                                                type="Answer"
                                                                className="form-control"
                                                                name='answer'
                                                                onChange={props.handleChange}
                                                                value={props.values.answer}
                                                                placeholder={props.values.answer || "answer"}
                                                            />
                                                            <label >Answer</label>
                                                        </div>
                                                        {props.errors.answer && props.touched.answer ? <div className='error'>{props.errors.answer}</div> : ""}
                                                    </div>
                                                    <button className='active_Servicesbtn px-4 py-3 my-3 w-100' type='submit' style={{ background: '#FCB800' }}>
                                                        Submit
                                                    </button>
                                                </Form>
                                            </>
                                        )}
                                    </Formik>
                                }
                            </>
                        }
                    </div>
                </div>
                <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} onSubmitDelete={onSubmitDeleteCustomerFAQ} />
            </div>
        </>
    )
}

export default CustomerFaq


