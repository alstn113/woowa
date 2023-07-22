import { ComponentProps, Suspense } from 'react';

import ErrorBoundary from './ErrorBoundary';

interface AsyncBoundaryProps {
  children?: React.ReactNode;
  pending: React.ReactNode;
  rejected: ComponentProps<typeof ErrorBoundary>['renderFallback'];
}

const AsyncBoundary = ({ children, pending, rejected }: AsyncBoundaryProps) => {
  return (
    <ErrorBoundary renderFallback={rejected}>
      <Suspense fallback={pending}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
