import React, { lazy, Suspense } from 'react';

const LazyMiddleOfScreen = lazy(() => import('./MiddleOfScreen'));

const MiddleOfScreen = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMiddleOfScreen {...props} />
  </Suspense>
);

export default MiddleOfScreen;
