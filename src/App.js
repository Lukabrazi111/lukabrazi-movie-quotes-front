import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quotes from './components/Quotes';
import Quote from './components/Quote';

import { LanguageProvider } from './context/language-context';
import Login from './components/Login/Login';
import Layout from './components/Layout';

function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Layout><Quotes /></Layout>} />
                    <Route path="/quote/:movieId" element={<Layout><Quote /></Layout>} />
                    <Route path="/login" element={<Layout><Login /></Layout>} />
                </Routes>
            </BrowserRouter>
        </LanguageProvider>
    );
}

export default App;
