import { useState } from 'react';
import Forms from './Form';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';

function Model() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click to and submit form
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Forms />
      </Modal>
    </>
  );
}

export default Model;