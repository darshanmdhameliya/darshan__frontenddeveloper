import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';
import { AuthProvider } from "./componets/store/auth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <NextUIProvider>
            <App/>
        </NextUIProvider>
    </AuthProvider>
);


