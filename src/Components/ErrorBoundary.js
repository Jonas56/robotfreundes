import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render(props) {
    if (this.state.hasError) {
      return <h1>Error during compilation ! ! </h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
