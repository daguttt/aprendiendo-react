import { createRoot } from 'react-dom/client';
import './style.css';

const rootElement = document.querySelector<HTMLDivElement>(
  '#app'
) as HTMLElement;
const root = createRoot(rootElement);
root.render(<h1>Hello World</h1>);
