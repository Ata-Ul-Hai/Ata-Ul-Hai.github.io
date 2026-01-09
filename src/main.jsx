/* ===========================================
   ENTRY POINT (main.jsx)
   
   This is where React starts.
   It takes our App component and renders it into the HTML page.
   
   You typically don't need to modify this file.
   =========================================== */

// 'StrictMode' is a React wrapper that helps catch bugs during development
import { StrictMode } from 'react';

// 'createRoot' is how React 18+ renders components
import { createRoot } from 'react-dom/client';

// Import global styles (CSS variables, reset, base styles)
import './index.css';

// Import our main App component
import App from './App.jsx';

// Find the 'root' div in index.html and render our App into it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
