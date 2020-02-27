export const hideModal = () => {
  const modalCloseButton: HTMLElement | null = document.querySelector('.modal-header .close');
  if (modalCloseButton) modalCloseButton.click();
};
