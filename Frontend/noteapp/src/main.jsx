import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css'; // Use regular CSS instead of Tailwind
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
