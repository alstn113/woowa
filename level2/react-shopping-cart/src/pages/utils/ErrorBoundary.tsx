import React, { Component } from 'react';

interface ErrorBoundaryProps<ErrorType> {
  children?: React.ReactNode;
  renderFallback: (props: { error: ErrorType }) => React.ReactNode;
}

interface ErrorBoundaryState<ErrorType> {
  error: ErrorType | null;
  hasError: boolean;
}

class ErrorBoundary<ErrorType extends Error = Error> extends Component<
  ErrorBoundaryProps<ErrorType>,
  ErrorBoundaryState<ErrorType>
> {
  constructor(props: ErrorBoundaryProps<ErrorType>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render(): React.ReactNode {
    const { children, renderFallback } = this.props;
    const { error } = this.state;

    if (error !== null) {
      return renderFallback({ error });
    }
    return children;
  }
}
export default ErrorBoundary;
