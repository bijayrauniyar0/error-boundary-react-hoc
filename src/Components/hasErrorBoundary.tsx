import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const hasErrorBoundary = (WrappedComponent: React.ComponentType) => {
  return function WrappedWithErrorBoundary(props: any) {
    return (
      <ErrorBoundary>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
};

export default hasErrorBoundary;
