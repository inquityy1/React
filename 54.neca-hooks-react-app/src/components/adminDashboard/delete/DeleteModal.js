import React from "react";
import { Modal, Button } from "react-bootstrap";

import "./modal.css";

const DeleteModal = ({ showModal, hideModal, confirmModal, message }) => {
  return (
    <Modal show={showModal} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="alert alert-danger">{message}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => confirmModal()}>
          Yes
        </Button>
        <Button variant="default" onClick={() => hideModal()}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
