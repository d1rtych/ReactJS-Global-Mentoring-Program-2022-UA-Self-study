import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundry';
import { StatusModalsProvider } from './context/StatusModalsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <StatusModalsProvider>
        <App/>
      </StatusModalsProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
