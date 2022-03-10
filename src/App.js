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

    return (
        <LanguageProvider>
            <Routes>
                <Route path="/" exact element={<Layout><Quotes/></Layout>}/>
                <Route path="/quote/:movieId" exact element={<Layout><Quote/></Layout>}/>
                {!authCtx.isLoggedIn && <Route path="/login" exact element={<Layout><Login/></Layout>}/>}
                {authCtx.isLoggedIn &&
                    <Route path="/admin/movies" exact element={<DashboardLayout><MoviesList/></DashboardLayout>}/>}
                {authCtx.isLoggedIn &&
                    <Route path="/admin/quotes" exact element={<DashboardLayout><QuotesList/></DashboardLayout>}/>}
                <Route path="*" element={<Layout><NotFound/></Layout>}/>
            </Routes>
        </LanguageProvider>
    );
}

export default App;
