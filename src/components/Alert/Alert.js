import React from 'react';

const AlertMessage = ({ sucesso, falha }) => {
    return (
        <div id="alerta">
            {sucesso && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <i className="oi oi-check"></i>
                    <span>
                        <strong>{sucesso}</strong>
                    </span>
                    <button
                        type="button"
                        className="close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )}

            {falha && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <i className="oi oi-check"></i>
                    <span>
                        <strong>{falha}</strong>
                    </span>
                    <button
                        type="button"
                        className="close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default AlertMessage;
