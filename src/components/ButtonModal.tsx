import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface modalProps {
  title?: string | null;
  body?: JSX.Element | null;
  buttonText?: string | null;
}

export const ButtonModal: React.FC<modalProps> = (props: modalProps) => {
  const { title, body, buttonText='Create'} = props;
  const [isShow, setShow] = useState(false);

  return (
  <>
    <Button variant="outline-secondary" onClick={() => setShow(true)}>{buttonText}</Button>

    <Modal
      size="lg"
      show={isShow}
      onHide={() => setShow(false)}
      aria-labelledby="modal"
      >
      <Modal.Header closeButton>
        <Modal.Title id="modal">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  </>
  )
};
