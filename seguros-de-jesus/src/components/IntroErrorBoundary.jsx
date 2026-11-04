import { Component } from "react";

export default class IntroErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error al cargar la introducción 3D:", error, info);
    this.props.onError?.();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
