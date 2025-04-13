import React, { useState } from 'react';

export function ModalConfirm({ show, onClose, onConfirm }) {
    return (
        <div className={`modal fade ${show ? 'show' : ''}`} id="confirm-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!show}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            <span>
                                <i className="fas fa-exclamation-triangle"></i>
                            </span>
                        </h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Você tem certeza que deseja excluir esse ítem?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="button" className="btn btn-success" onClick={onConfirm}>
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}