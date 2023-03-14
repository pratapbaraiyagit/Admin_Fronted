import React from 'react'
import './Table.scss'
import { TbArrowsDownUp } from 'react-icons/tb'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose } from 'react-icons/ai'
const Customerdetails = ({ tbody, start, a, opan }) => {
    return (
        tbody.customerdetails && start.id === tbody.id && !opan &&
        <tr style={{ borderTop: 'none' }}>
            <td colspan={a.length}>
                <div className="px-5 pb-5 pt-3">
                    <h6 className='text-center py-4' style={{ borderBottom: '1px solid #FCB800' }}><b>Customer Booking Detail</b></h6>
                    <div className="d-flex justify-content-between align-items-center py-4" style={{ borderBottom: '1px solid #FCB800' }}>
                        <div className="">
                            <h6 className='m-0'><b>Address</b></h6>
                        </div>
                        <div className="">
                            <h6 className='m-0'>{tbody.customerdetails.Address}</h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-4" style={{ borderBottom: '1px solid #FCB800' }}>
                        <div className="">
                            <h6 className='m-0'><b>Contact</b></h6>
                        </div>
                        <div className="">
                            <h6 className='m-0'>{tbody.customerdetails.Contact}</h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-4" style={{ borderBottom: '1px solid #FCB800' }}>
                        <div className="d-flex">
                            <h6 className='m-0'><b>Total Amount :</b></h6>
                            <h6 className='m-0'>{tbody.customerdetails.Amount}</h6>
                        </div>
                        <div className="d-flex">
                            <h6 className='m-0'><b>Booking Date :</b></h6>
                            <h6 className='m-0'>{tbody.customerdetails.Booking}</h6>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    )
}
const Erning = ({ tbody, start, a, opan }) => {
    let b = []
    return (
        tbody.EarningStatus && start.id === tbody.id && !opan &&
        <tr style={{ borderTop: 'none' }}>
            <td colspan={a.length}>
                <div className="pb-5 pt-3">
                    <h6 className='text-center py-4'><b>Earning Status</b></h6>
                    {tbody.EarningStatus.map((data, i) => {
                        return (
                            <table className="table" key={i}>
                                <thead className='bg-white'>
                                    <tr style={{ border: 'none' }} >
                                        {data.thead.map((thead, i) => {
                                            b.push(thead)
                                            return (
                                                <th className='pt-2 pb-3 text-muted align-middle ' key={i}  >
                                                    <div className="d-flex  align-items-center">
                                                        {thead}
                                                    </div>
                                                </th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody style={{ background: "#FFF", border: 'none' }}>
                                    {data.tbody.map((tbody, i) => {
                                        return (
                                            <tr key={i} style={{ border: 'none' }}>
                                                {
                                                    b.map((heding, i) => {
                                                        return (
                                                            <>
                                                                <td key={i} className='py-3' style={{ border: 'none' }} >
                                                                    {tbody[heding]}
                                                                </td>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table >
                        )
                    })}
                </div>
            </td>
        </tr>
    )
}
function Table({ data, setselecteddata, setSwitch }) {
    const [start, setstart] = useState({})
    const [Data, setData] = useState(data)
    const [sort, setSort] = useState(0)
    const [opan, setopan] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const location = useLocation()
    let a = []
    useEffect(() => {
        console.log(location);
    }, [location])
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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
            <div className="table-responsive">
                {data.map((e, i) => {
                    return (
                        <table className="table m-0" key={i}>
                            <thead className='bg-white'>
                                <tr>
                                    {e.thead.map((thead, i) => {
                                        a.push(thead)
                                        if (thead !== 'customerdetails') {
                                            return (
                                                <th className='pt-2 pb-3 text-muted align-middle ' key={i} onClick={() => {
                                                    setSort(1)
                                                    console.log("📢[Table.jsx:113]: sort: ", sort);
                                                    if (sort !== 1) {
                                                        e.tbody.sort((a, b) => console.log(typeof a[thead]))
                                                        setData(async (all_data) => {
                                                            all_data.tbody = await e.tbody.sort((a, b) =>
                                                                typeof a[thead] !== 'object' && typeof a[thead] === 'string' ? a[thead].localeCompare(b[thead]) : b[thead] - a[thead]
                                                            )
                                                        })
                                                        setSort(1)
                                                    } else {
                                                        setData(async (all_data) => {
                                                            all_data.tbody = await e.tbody.sort((a, b) =>
                                                                typeof a[thead] !== 'object' && typeof a[thead] === 'string' ? b[thead].localeCompare(a[thead]) : a[thead] - b[thead]
                                                            )
                                                        })
                                                        setSort(0)
                                                    }
                                                }}>
                                                    <div className="d-flex  align-items-center">
                                                        {thead}
                                                        {thead !== 'Action' &&
                                                            <TbArrowsDownUp className='mx-1' style={{
                                                                fontSize: "16px"
                                                            }} />
                                                        }
                                                    </div>
                                                </th>
                                            )
                                        }
                                    })}
                                </tr>
                            </thead>
                            <tbody style={{ background: "#FFF" }}>
                                {e.tbody.map((tbody, i) => {
                                    return (
                                        <>
                                            <tr key={i} onClick={() => {
                                                if (tbody === start) {
                                                    setopan(!opan);
                                                } {
                                                    setstart(tbody);
                                                }
                                            }}>
                                                {a.map((data,i) => {
                                                    if (data !== 'customerdetails') {
                                                        if (data === 'Action') {
                                                            return (
                                                                <>
                                                                    <td className='align-middle' key={i} >
                                                                        <div className="d-flex align-middle">
                                                                            <div className="Edit mx-2" style={{ cursor: "pointer" }} onClick={() => {
                                                                                setselecteddata(tbody)
                                                                                setSwitch('')
                                                                            }}>
                                                                                {tbody.Action.edit && <tbody.Action.edit />}</div>
                                                                            <div className="Remove mx-2" style={{ cursor: "pointer" }} onClick={() => {
                                                                                setShow(true)
                                                                            }}>{tbody.Action.delete && <tbody.Action.delete />}</div>
                                                                            {start.id === tbody.id && !opan ?
                                                                                <div className="Remove" style={{ cursor: "pointer" }}>{tbody.Action.Down && <tbody.Action.Down />}</div>
                                                                                : <div className="Remove" style={{ cursor: "pointer" }}>{tbody.Action.Up && <tbody.Action.Up />}</div>}
                                                                        </div>
                                                                    </td>

                                                                </>
                                                            )
                                                        } else {
                                                            return (
                                                                <td className='align-middle'> {tbody[data]}{tbody['PaymentType'] && <span>{tbody.Price === tbody[data] && ' ' + tbody['PaymentType']}</span>}</td>
                                                            )
                                                        }
                                                    }
                                                })}
                                            </tr>
                                            {/* customerdetails */}
                                            <Customerdetails tbody={tbody} start={start} a={a} opan={opan} />
                                            <Erning tbody={tbody} start={start} a={a} opan={opan} />
                                        </>
                                    )
                                })}
                            </tbody>
                        </table >
                    )
                })}
            </div >
        </>
    )
}

export default Table