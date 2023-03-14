import React from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import * as yup from "yup";
import { Formik, Form } from 'formik';
import { useState } from 'react'
import Accordion from '../../../Components/AdminPanel/Accordion/Accordion'
import Modal from 'react-bootstrap/Modal';
import './PartnerFaq.scss'
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai';
function PartnerFaq() {
    const [show, setShow] = useState(false)
    const [active, setactive] = useState('FAQ')
    const [selecteddata, setselecteddata] = useState({})
    const handleClose = () => setShow(false);
    const questionsAnswers = [
        {
            question: "How many team members can I invite?",
            answer:
                "No more than 2GB. All files in your account must fit your allotted storage space.",

        },
        {
            question: "What is the maximum file upload size?",
            answer:
                "No more than 2GB. All files in your account must fit your allotted storage space.",
        },
        {
            question: "How do I reset my password?",
            answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
        },
        {
            question: "Do you provide additional support?",
            answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
        },
        {
            question: "Can I cancel my subscription?",
            answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
        },
        {
            question: "Do you provide additional support?",
            answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
        },
        {
            question: "How do I reset my password?",
            answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
        },
    ];
    const yupsolver3 = yup.object({
        question: yup.string().required('Question is required.'),
        answer: yup.string().required('Answer is required.'),
    })
    return (
        <>
            <Modal show={show}>
                <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                        <div className="modal-header flex-column">
                            <div className="icon-box">
                                <i className="material-icons">
                                    <AiOutlineClose />
                                </i>
                            </div>
                            <h4 className="modal-title w-100">Are you sure?</h4>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this record ?</p>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={handleClose}>Delete</button>
                        </div>
                    </div>
                </div>
            </Modal>
            <div>
                <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                    <div className=" d-flex alight-items-center py-2">
                        <h5 className='mx-1 my-0 d-flex align-items-center ' style={{ fontSize: '18px' }}><b>FAQ Management</b></h5>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="d-flex pt-3" style={{ borderBottom: '2px solid rgba(119, 119, 119,0.5)' }}>
                        <div className={`py-4 px-3 ms-3 ${active === 'FAQ' && 'active'}`} style={{ cursor: 'pointer' }} onClick={() => {
                            setactive('FAQ')
                        }}>
                            <h6 className='m-0 d-flex alight-items-center' ><b> <AiOutlineMenuUnfold className='me-2' />FAQ</b></h6>
                        </div>
                        <div className={`py-4 px-3 ms-3 ${active !== 'FAQ' && 'active'}`} style={{ cursor: 'pointer' }} onClick={() => {
                            setactive('Add FAQ'); setselecteddata({})
                        }}>
                            <h6 className='m-0 d-flex alight-items-center'><b>+ Add FAQ</b></h6>
                        </div>
                    </div>
                    <div className="p-3">
                        {active === 'FAQ' ?
                            <Accordion questionsAnswers={questionsAnswers} setselecteddata={setselecteddata} setactive={setactive} setShow={setShow} />
                            :
                            <Formik
                                initialValues={selecteddata}
                                validationSchema={yupsolver3}
                                validateOnChange={false}
                                validateOnBlur={false}
                                onSubmit={(values) => {
                                    console.log("📢[Faq.jsx:89]: values: ", values);
                                    setactive('FAQ')
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    handleChange,
                                }) => (
                                    <>
                                        <Form >
                                            <div className="my-3">
                                                <div className="form-floating ">
                                                    <input type="text" className="form-control" name='question' placeholder="Question" defaultValue={values.question}
                                                        onChange={handleChange} />
                                                    <label >Question</label>
                                                </div>
                                                {errors.question ? <div className='error'>{errors.question}</div> : null}
                                            </div>
                                            <div className="my-3">
                                                <div className="form-floating ">
                                                    <textarea type="Answer" className="form-control" name='answer' placeholder="answer" defaultValue={values.answer}
                                                        onChange={handleChange} />
                                                    <label >Answer</label>
                                                </div>
                                                {errors.answer ? <div className='error'>{errors.answer}</div> : null}
                                            </div>
                                            <button className='active_Servicesbtn px-4 py-3 my-3 w-100' type='submit' style={{ background: '#FCB800' }}>
                                                Submit
                                            </button>
                                        </Form>
                                    </>
                                )}
                            </Formik>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnerFaq


