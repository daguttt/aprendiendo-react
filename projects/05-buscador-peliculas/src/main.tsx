import './style.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const rootElement = document.querySelector<HTMLDivElement>(
  '#app'
) as HTMLElement;
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
