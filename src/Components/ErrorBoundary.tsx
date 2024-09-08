import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
  componentStack: string | null | undefined;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
      componentStack: "",
    };
  }

  static getDerivedStateFromError(_: Error): State {
    // Update state so the next render shows the fallback UI.
    return { hasError: true, errorMessage: "", componentStack: "" };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Update the state with the error and the component stack trace
    this.setState({
      errorMessage: error.toString(),
      componentStack: errorInfo.componentStack,
    });

    // You can also log the error to an error reporting service here
    console.error("Error:", error, "Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render custom error UI, including the file and component name from the stack trace
      return (
        <div style={{borderRadius: "2rem", padding:"2rem", backgroundColor: "#ad2b327c"}}>
          <h1 style={{color:"rgb(197, 22, 22)"}}>Something went wrong.</h1>
          {/* <p>
            <strong>Error:</strong> {this.state.errorMessage}
          </p> */}
          <p style={{color:"rgb(197, 22, 22)"}}>
            <strong>At</strong> {this.state.componentStack}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
