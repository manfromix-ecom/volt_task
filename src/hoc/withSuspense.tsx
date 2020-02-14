import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export const Loading = () => {
  return (
    <div className={'suspense_loading'}>
      <Spinner animation="border" role="status" variant="secondary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export const withSuspense = (Component: React.FC) => {
  return () => {
    return (
      <React.Suspense fallback={Loading}>
        <Component />
      </React.Suspense>
    );
  };
};
