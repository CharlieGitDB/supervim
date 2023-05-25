import React, { lazy, Suspense } from 'react';
import { LinkButtonProps } from './LinkButton';

const LazyLinkButton = lazy(() => import('./LinkButton'));

const LinkButton = (props: LinkButtonProps & JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLinkButton {...props} />
  </Suspense>
);

export default LinkButton;
