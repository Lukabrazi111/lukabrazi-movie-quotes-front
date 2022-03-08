import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quotes from './components/Quotes';
import Quote from './components/Quote';

import { LanguageProvider } from './context/language-context';
import Login from './components/Login/Login';
import Layout from './components/Layout';
import MoviesList from './components/Dashboard/Movies/MoviesList';
import QuotesList from './components/Dashboard/Quotes/QuotesList'
import DashboardLayout from './components/Dashboard/DashboardLayout';

function App() {
    return (
        <LanguageProvider>
            <Routes>
                <Route path="/" exact element={<Layout><Quotes /></Layout>} />
                <Route path="/quote/:movieId" element={<Layout><Quote /></Layout>} />
                <Route path="/login" element={<Layout><Login /></Layout>} />
                <Route path="/admin/movies" element={<DashboardLayout><MoviesList /></DashboardLayout>} />
                <Route path="/admin/quotes" element={<DashboardLayout><QuotesList /></DashboardLayout>} />
            </Routes>
        </LanguageProvider>
    );
}

export default App;
