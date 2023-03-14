import React, { useState } from 'react'
import { TbArrowsDownUp } from 'react-icons/tb'
import "./Table.scss"
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose } from 'react-icons/ai'
import { TiArrowUnsorted, TiEdit } from 'react-icons/ti';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Pagination } from 'react-pagination-bar';
import 'react-pagination-bar/dist/index.css'
import useSortableData from '../../../Utils/useSortableData';
import { useEffect } from 'react';

const Table = (props) => {
    const {
        setSelectedData,
        setSwitch,
        bodyData,
        tableHead,
        onSubmitEdit,
        onSubmitDelete,
        name
    } = props

    const [show, setShow] = useState(false);
    const [deleteId, setDeleteId] = useState('')

    const [tableData, setTableData] = useState(bodyData)
    const [paginatedData, setPaginatedData] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const pagePostsLimit = 9;

    const handleClose = (e) => {
        onSubmitDelete(deleteId)
        setShow(false);
    }
    useEffect(() => {
        const firstPageIndex = (currentPage - 1) * pagePostsLimit;
        const lastPageIndex = firstPageIndex + pagePostsLimit;
        const data = tableData
        setPaginatedData(data.slice(firstPageIndex, lastPageIndex))
    }, [])


    const handleEdit = (data) => {
        onSubmitEdit(data)
        setSelectedData(data)
        setSwitch('edit')
    }

    const onClickDelete = (e) => {
        setDeleteId(e?._id)
        setShow(true)
    }

    const { items, requestSort, sortConfig } = useSortableData(tableData)

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <>
            <Modal show={show}>
                <div class="modal-dialog modal-confirm">
                    <div class="modal-content">
                        <div class="modal-header flex-column">
                            <div class="icon-box">
                                <i class="material-icons">
                                    <AiOutlineClose />
                                </i>
                            </div>
                            <h4 class="modal-title w-100">Are you sure?</h4>
                        </div>
                        <div class="modal-body">
                            <p>Are you sure you want to delete this record ?</p>
                        </div>
                        <div class="modal-footer justify-content-center">
                            <button type="button" class="btn btn-secondary" onClick={() => setShow(false)}>Cancel</button>
                            <button type="button" class="btn btn-danger" onClick={handleClose}>Delete</button>
                        </div>
                    </div>
                </div>
            </Modal>
            <div className="table-responsive">
                <table className="table m-0" >
                    <thead className='bg-white'>
                        <tr>
                            <th className='pt-2 pb-3 text-muted align-middle' >
                                <div className="d-flex  align-items-center" >
                                    Category Name
                                    <TiArrowUnsorted className={getClassNamesFor('categoryName')} onClick={() => requestSort('categoryName')} />
                                </div>
                            </th>
                            <th className='pt-2 pb-3 text-muted align-middle ' >
                                <div className="d-flex  align-items-center" >
                                    Description
                                    <TiArrowUnsorted className={getClassNamesFor('description')} onClick={() => requestSort('description')} />
                                </div>
                            </th>
                            <th className='pt-2 pb-3 text-muted align-middle ' >
                                <div className="d-flex  align-items-center" >
                                    Status
                                </div>
                            </th>
                            <th className='pt-2 pb-3 text-muted align-middle ' >
                                <div className="d-flex  align-items-center" >
                                    Action
                                </div>
                            </th>
                        </tr>
                    </thead>
                    {tableData.length ? items.slice((currentPage - 1) * pagePostsLimit, currentPage * pagePostsLimit).map((e, i) => {
                        return (
                            <tbody style={{ background: "#FFF" }} key={i}>
                                <tr key={i}>
                                    <td>{e.categoryName}</td>
                                    <td>{e.description}</td>
                                    <td className={`${e.isActive ? e.isActive === true ? 'enable' : 'disable' : e.isActive === false ? 'disable' : 'disable'}`}>
                                        {e.isActive ? e.isActive && "Enable" : "Disable"}
                                    </td>
                                    <td className='align-middle'>
                                        <div className="d-flex align-middle">
                                            <div className="Edit" onClick={() => handleEdit(e)}><TiEdit /></div>
                                            <div className="Remove" style={{ cursor: 'pointer' }} onClick={() => onClickDelete(e)}><RiDeleteBin7Fill /></div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    }) : <></>}
                </table>
                <div className='mt-2' style={{ float: 'right' }}                >
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={pagePostsLimit}
                        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
                        totalItems={tableData.length}
                        pageNeighbours={2}
                    />
                </div>
            </div >
        </>
    )
}
export default Table