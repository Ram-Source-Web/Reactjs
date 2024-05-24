// src/components/CallbackModal.js
import React from 'react';

const CallbackModal = () => (
  <div className="modal fade" id="callbackModal" tabIndex="-1" aria-labelledby="callbackModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="callbackModalLabel">Request Call Back</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          Success! We will contact you soon.
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
);

export default CallbackModal;
