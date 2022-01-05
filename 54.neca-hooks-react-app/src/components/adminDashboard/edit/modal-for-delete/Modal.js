import React from "react";

const Modal = (props) => {
  return (
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
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
    </div>
  );
};

export default Modal;
