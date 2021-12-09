import { Component, ErrorInfo, ReactNode } from "react";
import Button from "../Button/Button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Sorry.. there was an error</h1>
          {/* <Button
            colorType="secondary"
            onClick={() => this.setState({ hasError: false })}
          >
            Reset error
          </Button> */}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
