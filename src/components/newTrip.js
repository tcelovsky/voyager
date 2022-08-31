import "../css/button.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const NewTrip = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="button">
      <Button
        type="submit"
        variant="outline-secondary"
        size="sm"
        onClick={handleShow}
      >
        New Trip
      </Button>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Woohoo, let's create your new trip!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Trip Name</Form.Label>
                <Form.Control type="title" placeholder="Trip name" />
                <Form.Text className="text-muted">
                  Feel free to pick something fun!
                </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="button"
              type="cancel"
              variant="outline-secondary"
              size="sm"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              className="button"
              type="submit"
              variant="outline-primary"
              size="sm"
              onClick={handleClose}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default NewTrip;
