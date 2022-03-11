import React, {useContext} from 'react';

import {Route, Routes} from 'react-router-dom';
import Quotes from './components/Quotes';
import Quote from './components/Quote';
import {LanguageProvider} from './context/language-context';
import AuthContext from './context/auth-context';
import Login from './components/Login/Login';
import Layout from './components/Layout';
import MoviesList from './components/Dashboard/Movies/MoviesList';
import QuotesList from './components/Dashboard/Quotes/QuotesList'
import DashboardLayout from './components/Dashboard/DashboardLayout';
import NotFound from './components/Error/NotFound';

function App() {
    const authCtx = useContext(AuthContext);

    return (<LanguageProvider>
            <Routes>
                <Route path="/" exact element={<Quotes/>}/>
                <Route path="/quote/:movieId" exact element={<Quote/>}/>
                {!authCtx.isLoggedIn && <Route path="/login" exact element={<Login/>}/>}
                {authCtx.isLoggedIn && <Route path="/admin/movies" exact element={<MoviesList/>}/>}
                {authCtx.isLoggedIn && <Route path="/admin/quotes" exact element={<QuotesList/>}/>}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </LanguageProvider>);
}

export default App;
