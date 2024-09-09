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
        <div style={{borderRadius: "1rem", padding:"2rem", backgroundColor: "#ca4b5157", width:"80%", margin:"0 auto", display: "flex",flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
          <h1 style={{color:"rgb(255, 0, 0)", fontSize: "1rem", fontWeight:"bold"}}>Something went wrong.</h1>
          <p style={{color:"rgb(255, 0, 0)"}}>
            <strong>Component:</strong> {this.state.componentStack?.split(")")[0]})
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
