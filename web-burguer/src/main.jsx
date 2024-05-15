import React from 'react'
import { createRoot } from 'react-dom/client';
import RoutesTelas from './routes.jsx'; 
import GlobalStyle from './styles/global.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <RoutesTelas/>
      <GlobalStyle />
    </>
  </React.StrictMode>

);
