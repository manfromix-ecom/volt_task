import React from "react";

export const withSuspense = (Component:React.FC) => {
  return (props:any) => {
    return <React.Suspense fallback={<div>loading...</div>} >
      <Component {...props} />
    </React.Suspense>
  };
};