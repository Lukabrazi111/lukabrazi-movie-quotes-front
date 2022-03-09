import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/auth-context';

import Loading from './components/UI/Loading';
import './i18n';

ReactDOM.render(
    <AuthContextProvider>
        <React.StrictMode>
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <App />
                </Suspense>
            </BrowserRouter>
        </React.StrictMode>
    </AuthContextProvider>,
    document.getElementById('root')
);
