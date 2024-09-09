# Error Boundary React with HOC

Welcome to Error Boundary React HOC. This package provides you with ErrorBoundary and hasErrorBoundary. hasErrorBoundary is a high order component. Example usage of both approach is provided below. 


#### Using yarn

```bash
yarn add error-boundary-react-hoc

```

#### Using npm

npm i error-boundary-react-hoc

## Example Usage

Here is the example usage of using errorBoundary

### Approach 1

You can wrap the component inside Error Boundary.

```jsx
import React from 'react';
import {ErrorBoundary} from 'error-boundary-react-hoc;
import MyComponent from './MyComponent';

function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}

export default App;

```

### Approach 2

You can use hasErrorBoundary, which is a high order component. HOC lets you wrap the component while export

```jsx
import React from 'react';
import {hasErrorBoundary} from 'error-boundary-react-hoc;

function MyComponent() {
  return (
    <div> hello</div>
  );
}

export default hasErrorBoundary(MyComponent);


```

## Contributing

If you have suggestions or improvements, feel free to open an issue or submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
