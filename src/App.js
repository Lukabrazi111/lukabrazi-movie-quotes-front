import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Quotes from './components/Quotes';
import Quote from './components/Quote';

import { LanguageProvider } from './context/language-context';

function App() {
    return (
        <LanguageProvider>
            <Layout>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<Quotes />} />
                        <Route
                            path="/quote/:movieId"
                            exact
                            element={<Quote />}
                        />
                    </Routes>
                </BrowserRouter>
            </Layout>
        </LanguageProvider>
    );
}

export default App;
