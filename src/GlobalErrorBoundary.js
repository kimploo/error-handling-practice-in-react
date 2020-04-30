import React from 'react';

export class GlobalErrorBoundary extends React.Component {
  render() {
    return this.props.children;
  }
} // TODO : 전역 Error Boundary를 작성하세요. https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries
