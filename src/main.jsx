import React from 'react';
import ReactDOM from 'react-dom/client';

// context
import { TransactionProvider } from './context/TransactionContext';

// style
import './index.css';

// components
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </React.StrictMode>
);
