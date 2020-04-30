import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalErrorBoundary } from './GlobalErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <App />
    </GlobalErrorBoundary>
  </React.StrictMode>,
  document.getElementById('main')
);
