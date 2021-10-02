import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
          className="header"
        >
          {props.x}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
            height: "15vh",
          }}
        >
          {props.content}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3px",
          }}
        >
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
