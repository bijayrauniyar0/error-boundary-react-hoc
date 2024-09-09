import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function hasErrorBoundary<T>(
    WrappedComponent: React.ComponentType<
      React.PropsWithChildren<React.PropsWithChildren<T>>
    >,
  ) {
    return function ErrorBoundaryWrapper(props: React.PropsWithChildren<T>) {
      return (
        <ErrorBoundary>
          <WrappedComponent {...props} />
        </ErrorBoundary>
      );
    };
  }
  
  export default hasErrorBoundary;