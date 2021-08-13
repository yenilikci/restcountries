import React from "react";
import "./alertModal.css";

const AlertModal = () => {
  return (
    <>
      <div className="alert-modal">
        <div className="modal-content">
          <div className="modal-header bg-danger">
            <h5 className="modal-title text-white">Warning!</h5>
          </div>
          <div className="modal-body">
            <p>
              <span className="alert-modal-face">🙄</span> No data found
              matching your search parameters
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertModal;
