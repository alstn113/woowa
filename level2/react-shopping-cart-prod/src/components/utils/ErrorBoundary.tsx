import React, { Component } from 'react';

import axios, { AxiosError } from 'axios';

interface ErrorBoundaryBaseProps {
  children?: React.ReactNode;
  catchStatus: number | number[];
}

interface ErrorBoundaryPropsWithRender extends ErrorBoundaryBaseProps {
  fallbackRenderer: (props: { error: AxiosError }) => React.ReactNode;
  fallback?: never;
}

interface ErrorBoundaryPropsWithFallback extends ErrorBoundaryBaseProps {
  fallback: React.ReactNode;
  fallbackRenderer?: never;
}

type ErrorBoundaryProps =
  | ErrorBoundaryPropsWithRender
  | ErrorBoundaryPropsWithFallback;

interface ErrorBoundaryState {
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      error,
    };
  }

  override componentDidCatch() {}

  private shouldCatchError(status: number): boolean {
    const { catchStatus } = this.props;
    if (Array.isArray(catchStatus)) {
      return catchStatus.includes(status);
    }
    return catchStatus === status;
  }

  override render(): React.ReactNode {
    const { children, fallback, fallbackRenderer } = this.props;
    const { error } = this.state;

    if (!error) return children;

    // TODO: For fallbackRender, define component during render error
    if (axios.isAxiosError(error) && error.response) {
      if (this.shouldCatchError(error.response.status)) {
        return fallbackRenderer
          ? fallbackRenderer({ error })
          : fallback || null;
      }
      throw error;
    }

    return <div>unknown error</div>;
  }
}

export default ErrorBoundary;
