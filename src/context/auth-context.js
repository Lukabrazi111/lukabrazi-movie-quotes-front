import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);

    let userIsLoggedIn = false;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    const getToken = localStorage.getItem('token');

    if (getToken) {
        userIsLoggedIn = true;
        localStorage.setItem('logged_in', userIsLoggedIn);
    } else {
        userIsLoggedIn = false;
        localStorage.setItem('logged_in', userIsLoggedIn);
    }

    const authContext = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
