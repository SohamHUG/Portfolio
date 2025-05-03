import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import './index.css'
import ScrollToTop from './components/ScrollToTop/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
            <Router>
                <ScrollToTop />
                <App />
            </Router>
        </GoogleReCaptchaProvider>
    </React.StrictMode>,
)
