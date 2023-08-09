import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import StateFile from './context/StateFile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateFile>
    <HashRouter>
      <App />
    </HashRouter>
  </StateFile>
);
