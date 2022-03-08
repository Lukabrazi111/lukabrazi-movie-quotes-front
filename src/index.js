import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import Loading from './components/UI/Loading';
import './i18n';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <App />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
