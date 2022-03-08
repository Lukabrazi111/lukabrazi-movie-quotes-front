import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import LanguageContext from '../../../context/language-context';

const Movie = ({ movieList }) => {
    const { t } = useTranslation();
    const languageCtx = useContext(LanguageContext);

    const currentLanguage = languageCtx.lang;

    return (
        <React.Fragment>
            {movieList.map((movie) => (
                <li
                    key={movie.id}
                    className="bg-white rounded-xl flex justify-between flex-col"
                >
                    <div className="px-3 py-5">
                        <p className="text-lg">{movie.name[currentLanguage]}</p>
                    </div>
                    <div className="flex">
                        <button className="bg-green-400 py-2 w-full hover:bg-green-500 rounded-bl-md">
                            {t('Edit')}
                        </button>
                        <button className="bg-red-400 py-2 w-full hover:bg-red-500 rounded-br-md">
                            {t('Delete')}
                        </button>
                    </div>
                </li>
            ))}
        </React.Fragment>
    );
};

export default Movie;
