import React, { useState } from 'react'
import { TbArrowsDownUp } from 'react-icons/tb'
import "./Table.scss"
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose } from 'react-icons/ai'
import { TiEdit } from 'react-icons/ti';
import { RiDeleteBin7Fill } from 'react-icons/ri';


const SubCategoryTable = (props) => {
    const {
        setSelectedData,
        setSwitch,
        bodyData,
        tableHead,
        onSubmitEdit,
        onSubmitDelete,
        name
    } = props
    console.log('bodyData :>> ', bodyData);

    const [show, setShow] = useState(false);
    const [deleteId, setDeleteId] = useState('')


    const handleClose = (e) => {
        onSubmitDelete(deleteId)
        setShow(false);
    }

    const handleSort = (data) => {
        // const newData = [...data[0].tbody].sort((a, b) =>
        //     a[data] > b[data] ? 1 : -1
        // );
        // setTblBody(newData)
    }
    const handleEdit = (data) => {
        onSubmitEdit(data)
        setSelectedData(data)
        setSwitch('edit')
    }

    const onClickDelete = (e) => {
        setDeleteId(e?._id)
        setShow(true)
    }
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
                            {tableHead.map((item) => {
                                return (
                                    <th key={item} className='pt-2 pb-3 text-muted align-middle '>
                                        <div className="d-flex  align-items-center" >
                                            {item.name}
                                        </div>
                                    </th>
                                )
                            }
                            )}
                        </tr>
                    </thead>
                    {bodyData.map((e, i) => {
                        return (
                            <tbody style={{ background: "#FFF" }} key={i}>
                                <tr key={i}>
                                    <td>{e.categoryId?.categoryName}</td>
                                    <td>{e.subCategoryName}</td>
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
                    })}
                </table>
            </div >
        </>
    )
}
export default SubCategoryTable
