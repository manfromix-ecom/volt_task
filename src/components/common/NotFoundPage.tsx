import React from 'react';
import Alert from 'react-bootstrap/Alert';

export const NotFoundPage = () => {
  document.title = 'No Page Found';
  return <Alert>404: Page does not exist</Alert>;
};
