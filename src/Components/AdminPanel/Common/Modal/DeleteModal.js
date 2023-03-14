import React from 'react'
import { Modal } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'

const DeleteModal = (props) => {
    const { deleteModal, setDeleteModal, onSubmitDelete } = props
    return (
        <div className="modal fade">
            <Modal show={deleteModal}>
                <div className="modal-dialog" style={{ width: '490px' }}>
                    <div className="modal-content" style={{ display: 'contents' }}>
                        <div className="modal-header">
                            <h4 className="modal-title">Are you sure?</h4>
                            <div className="icon-box" onClick={() => setDeleteModal(false)}>
                                <i className="material-icons">
                                    <AiOutlineClose />
                                </i>
                            </div>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this record ?</p>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-secondary" onClick={() => setDeleteModal(false)}>Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={() => { onSubmitDelete(); setDeleteModal(false) }}>Delete</button>
                        </div>
                    </div>
                </div>
            </Modal >
        </div >
    )
}

export default DeleteModal