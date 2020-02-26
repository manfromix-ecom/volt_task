import { useState } from 'react';

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