import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useTitle } from 'hookrouter';

export const NotFoundPage = () => {
  useTitle('No Page Found');
  return <Alert>404: Page does not exist</Alert>;
};
