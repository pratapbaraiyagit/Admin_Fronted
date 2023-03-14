import React, { useState } from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { planList, singlePlan } from "../../../shared/plan"
import { TbArrowsDownUp } from 'react-icons/tb'
import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineEye } from 'react-icons/ai';
import './PlanApproval.scss'

function PlanApproval() {
    const [viewplan, setViewPlan] = useState(false);
    const [tblBody, setTblBody] = useState(planList[0].tbody)
    const [tblHead, setTblHead] = useState(planList[0].thead)

    const handleSort = (data) => {
        const newData = [...planList[0].tbody].sort((a, b) =>
            a[data] > b[data] ? 1 : -1
        );
        setTblBody(newData)
    }
    const handleViewAction = (data) => {
        setViewPlan(true)
    }
    return (
        <div>
            <div className="py-3 d-flex justify-content-between alight-items-center flex-column flex-md-row">
                <div className=" d-flex alight-items-center py-2">
                    <h5 className='mx-1 my-0 d-flex align-items-center ' style={{ fontSize: '18px' }}><b>Plan Approval Management</b></h5>
                </div>
            </div>
            {viewplan ? (
                <PlanDetails setViewPlan={setViewPlan} />
            ) : (
                <div className="bg-white header">
                    <div className="d-flex pt-3" style={{ borderBottom: '2px solid rgba(119, 119, 119,0.5)' }}>
                        <div className='py-4 px-3 ms-3 active'>
                            <h6 className='m-0 d-flex alight-items-center'><b> <AiOutlineMenuUnfold className='me-2' />Plan Details</b></h6>
                        </div>
                    </div>
                    <div className='tbl-responsive'>
                        <table className="table m-0" >
                            <thead className='bg-white'>
                                <tr>
                                    {tblHead.map((item) => {
                                        if (item.sort) {
                                            return (
                                                <th className='pt-2 pb-3 text-muted align-middle' onClick={() => { handleSort(item.name) }} style={{ cursor: "pointer" }}>
                                                    <div className="d-flex  align-items-center" >
                                                        {item.name}<TbArrowsDownUp className='mx-1' style={{ fontSize: "16px" }} />
                                                    </div>
                                                </th>
                                            )
                                        } else {
                                            return (
                                                <th className='pt-2 pb-3 text-muted align-middle '>
                                                    <div className="d-flex  align-items-center" >
                                                        {item.name}
                                                    </div>
                                                </th>
                                            )
                                        }
                                    })}
                                </tr>
                            </thead>
                            {tblBody.map((e, i) => {
                                return (
                                    <tbody style={{ background: "#FFF" }} key={i}>
                                        <tr key={i}>
                                            {tblHead.map((data, index) => {
                                                if (data.name === 'Action') {
                                                    return (
                                                        <td className={'align-middle clicable'} key={index} style={{ cursor: 'pointer' }} onClick={() => handleViewAction(e)}>
                                                            <AiOutlineEye size={20} />
                                                        </td>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <td className={'align-middle'} key={index}>
                                                            {e[data.name]}
                                                        </td>
                                                    )
                                                }
                                            })}
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}

const PlanDetails = (props) => {
    const { setViewPlan } = props

    return (
        <div className="bg-white">
            <div className='back p-2' onClick={() => setViewPlan(false)}>
                <BiArrowBack size={40} />
            </div>
            <div className="d-flex pt-3">
                <div className={'py-4 px-3 ms-3  active'} >
                    <h6 className='m-0 d-flex alight-items-center' ><b> <AiOutlineMenuUnfold className='me-2' />Plan Details</b></h6>
                </div>
            </div>
            <div className="p-3" style={{ border: '2px solid rgba(119, 119, 119,0.5)' }}>
                <div className='container-fluid'  >
                    <div className='row bg-light' style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid black' }}>
                        <div className='col-12 col-sm-5 px-2 m-0 dataContainer' >
                            <p className='p-0 m-0 title'>Plan Id:</p>
                            <p className='p-0 m-0'>{singlePlan.PlanId}</p>
                        </div>
                        <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                            <p className='p-0 m-0 title'>Title:</p>
                            <p className='p-0 m-0'>{singlePlan.Title}</p>
                        </div>
                        <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                            <p className='p-0 m-0 title'>Cost:</p>
                            <p className='p-0 m-0'>{singlePlan.Cost}</p>
                        </div>
                        <div className='col-12 col-sm-5 px-2 m-0 dataContainer'>
                            <p className='p-0 m-0 title'>Partner:</p>
                            <p className='p-0 m-0'>{singlePlan.Partner}</p>
                        </div>
                    </div>
                    <div className='row' style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className='col-12 col-sm-2 mb-2' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button className='approve'>Approve</button>
                        </div>
                        <div className='col-12 col-sm-2 mb-2'>
                            <button className='reject '>Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanApproval