import React, { Component } from 'react';

interface ErrorBoundaryProps {
  children?: React.ReactNode;
  fallback: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  render(): React.ReactNode {
    const { children, fallback } = this.props;
    const { hasError } = this.state;

    if (hasError) return fallback;
    return children;
  }
}
export default ErrorBoundary;
