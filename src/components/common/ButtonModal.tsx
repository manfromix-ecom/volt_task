import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { modalProps } from './types/ButtonModalProps';
import { useModal } from '../../hooks/useModal';

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
