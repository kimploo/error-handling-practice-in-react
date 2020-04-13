import React from 'react';
import PropTypes from 'prop-types';

export class SearchErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    // TODO : ???
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error);
  }

  toggleError() {
    const { toggleFlag } = this.props;
    toggleFlag();
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      const { input } = this.props;
      // You can render any custom fallback UI
      return (
        <div id="error">
          <h1>{`Oops, "${input}" is not included on our contury list`}</h1>
          <button onClick={this.toggleError}>Search Again</button>
        </div>
      );
    }

    return this.props.children;
  }
}

SearchErrorBoundary.propTypes = {
  // TODO : Do Type Checking
};
