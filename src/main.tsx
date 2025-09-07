import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// PWA service worker registration
import { registerSW } from "virtual:pwa-register";
registerSW({ immediate: true });

createRoot(document.getElementById("root")!).render(<App />);