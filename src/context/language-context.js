import React from 'react';

import { useTranslation } from 'react-i18next';

export const LanguageContext = React.createContext({
    lang: localStorage.setItem('i18nextLng', 'en'),
    en: () => {},
    ka: () => {},
});

export const LanguageProvider = (props) => {
    const { i18n } = useTranslation();

    const changeLanguageToEnglish = () => {
        i18n.changeLanguage('en');
    };

    const changeLanguageToGeorgian = () => {
        i18n.changeLanguage('ka');
    };

    const langContext = {
        lang: localStorage.getItem('i18nextLng'),
        en: changeLanguageToEnglish,
        ka: changeLanguageToGeorgian,
    };

    return (
        <LanguageContext.Provider value={langContext}>
            {props.children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
