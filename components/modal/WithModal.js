import React from 'react';
import "./modal.css";


export default function Modal(Component, number) {
  function closeModal() {
    let modal = document.getElementById(`modal${number}`);
    modal.className = 'modal out';
  }
  return function (props) {
    return (
      <div className="modal" id={`modal${number}`}>
        <div className="modal-background">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div>
              <Component {...props} />
            </div>
          </div>
        </div>

      </div>
    );
  };
}
