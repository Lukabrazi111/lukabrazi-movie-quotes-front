import React, { useContext, useState } from 'react';

import { useTranslation } from 'react-i18next';
import LanguageContext from 'context/language-context';
import EditMovie from 'pages/Movies/components/EditMovie';
import api from 'utilities/axios-hook';
import AuthContext from 'context/auth-context';

const Movie = ({ movieList }) => {
    const { t } = useTranslation();
    const languageCtx = useContext(LanguageContext);
    const authCtx = useContext(AuthContext);
    const currentLanguage = languageCtx.lang;
    const [showEditMovieModal, setShowEditMovieModal] = useState(false);
    const [movie, setMovie] = useState([]);

    const closeModalHandler = () => {
        setShowEditMovieModal(false);
    };

    const showEditModalHandler = async (id) => {
        try {
            const response = await api.get(`/movie/${id}`);
            const responseData = await response.data;

            setMovie(responseData);
            setShowEditMovieModal(true);
        } catch (error) {
            alert(error.message);
        }
    };

    const deleteMovieHandler = async (id) => {
        try {
            const response = await api.delete(`/movie/${id}`, {
                headers: {
                    Authorization: `Bearer ${authCtx.token}`,
                },
            });

            if (response.status === 200) {
                window.location.reload(true);
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <React.Fragment>
            {showEditMovieModal && (
                <EditMovie movie={movie} onClose={closeModalHandler} />
            )}
            {movieList.map((movie) => (
                <li
                    key={movie.id}
                    className='bg-white rounded-xl flex justify-between flex-col'
                >
                    <div className='px-3 py-5'>
                        <p className='text-lg'>{movie.name[currentLanguage]}</p>
                    </div>
                    <div className='flex'>
                        <button
                            onClick={() => showEditModalHandler(movie.id)}
                            className='bg-green-400 py-2 w-full hover:bg-green-500 rounded-bl-md'
                        >
                            {t('Edit')}
                        </button>
                        <button
                            onClick={() => deleteMovieHandler(movie.id)}
                            className='bg-red-400 py-2 w-full hover:bg-red-500 rounded-br-md'
                        >
                            {t('Delete')}
                        </button>
                    </div>
                </li>
            ))}
        </React.Fragment>
    );
};

export default Movie;
