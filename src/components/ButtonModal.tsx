import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface modalProps {
  title?: string | null;
  body?: JSX.Element | null;
  buttonText?: string | null;
}

export const useModal = (initShow = false) => {
  const [show, setShow] = useState(initShow);
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);
  return {
    show,
    showModal,
    hideModal,
  };
};

export const ButtonModal: React.FC<modalProps> = (props: modalProps) => {
  const { title, body, buttonText = 'Create' } = props;
  const { show, showModal, hideModal } = useModal(false);

  return (
    <>
      <Button variant="outline-secondary" onClick={showModal}>
        {buttonText}
      </Button>

      <Modal size="lg" show={show} onHide={hideModal} aria-labelledby="modal">
        <Modal.Header closeButton>
          <Modal.Title id="modal">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
      </Modal>
    </>
  );
};
