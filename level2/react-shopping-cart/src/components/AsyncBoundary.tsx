import { ComponentProps, Suspense } from 'react';

import ErrorBoundary from './ErrorBoundary';

interface AsyncBoundaryProps {
  children?: React.ReactNode;
  pendingFallback: React.ReactNode;
  rejectedFallback: ComponentProps<typeof ErrorBoundary>['renderFallback'];
}

const AsyncBoundary = ({
  children,
  pendingFallback,
  rejectedFallback,
}: AsyncBoundaryProps) => {
  return (
    <ErrorBoundary renderFallback={rejectedFallback}>
      <Suspense fallback={pendingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
