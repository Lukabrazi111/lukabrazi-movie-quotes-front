import React, { useContext } from 'react';

import { Route, Routes } from 'react-router-dom';
import Quotes from 'pages/Movies';
import Quote from 'pages/Quotes';
import { LanguageProvider } from 'context/language-context';
import AuthContext from 'context/auth-context';
import Login from 'pages/Login';
import MoviesList from 'pages/Movies/MoviesList';
import QuotesList from 'pages/Quotes/QuotesList';
import NotFound from 'components/NotFound';

function App() {
    const authCtx = useContext(AuthContext);

    return (
        <LanguageProvider>
            <Routes>
                <Route path='/' exact element={<Quotes />} />
                <Route path='/quote/:movieId' exact element={<Quote />} />
                {!authCtx.isLoggedIn && (
                    <Route path='/login' exact element={<Login />} />
                )}
                {authCtx.isLoggedIn && (
                    <Route
                        path='/admin/movies'
                        exact
                        element={<MoviesList />}
                    />
                )}
                {authCtx.isLoggedIn && (
                    <Route
                        path='/admin/quotes'
                        exact
                        element={<QuotesList />}
                    />
                )}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </LanguageProvider>
    );
}

export default App;
