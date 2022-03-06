import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Loading from './components/UI/Loading';
import './i18n';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<Loading />}>
            <App />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);
