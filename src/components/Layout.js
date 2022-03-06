import React, { useContext } from 'react';

import LanguageContext from '../context/language-context';

const Layout = (props) => {
    const changeLanguageCtx = useContext(LanguageContext);
    const currentLanguage = changeLanguageCtx.lang;

    return (
        <React.Fragment>
            <main className="bg-primary flex justify-center items-center mt-6">
                <a
                    href="{{ route('admin.show') }}"
                    className="text-white hover:underline mr-4"
                >
                    Admin Panel
                </a>
                <a
                    href="{{ route('user.logout') }}"
                    className="text-white hover:underline mr-4"
                >
                    Logout
                </a>
                <a
                    href="{{ route('user.index') }}"
                    className="text-white hover:underline"
                >
                    Login
                </a>
            </main>
            {props.children}
            <main className="fixed top-1/2 ml-10 flex items-center justify-center flex-col gap-2">
                <button
                    onClick={changeLanguageCtx.ka}
                    className={`text-center hover:bg-white ${
                        currentLanguage === 'ka' ? 'bg-white text-black' : null
                    } hover:text-black w-12 text-white border p-3 rounded-full`}
                >
                    ka
                </button>
                <button
                    onClick={changeLanguageCtx.en}
                    className={`text-center hover:bg-white ${
                        currentLanguage === 'en' ? 'bg-white text-black' : null
                    } hover:text-black w-12 text-white border p-3 rounded-full`}
                >
                    en
                </button>
            </main>
        </React.Fragment>
    );
};

export default Layout;
