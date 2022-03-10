import React, {useContext, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';

import {useTranslation} from 'react-i18next';
import QuoteModal from '../../UI/Modal/QuoteModal';
import api from '../../utilities/axios-hook';
import Loading from "../../UI/Loading";
import LanguageContext from "../../../context/language-context";

const AddQuote = (props) => {
    const {t} = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const langCtx = useContext(LanguageContext);
    const [movies, setMovies] = useState([]);

    const {
        register, handleSubmit, formState: {errors},
    } = useForm({
        defaultValues: {
            enQuote: '', kaQuote: '', movieId: '', quoteImg: '',
        },
    });

    useEffect(() => {
        const fetchMoviesHandler = async () => {
            try {
                const response = await api.get('/all-movies');
                const responseData = await response.data;

                setMovies(responseData);
            } catch (error) {
                alert(error.message);
            }
        };

        fetchMoviesHandler();
    }, [])

    const submitFormHandler = async (data) => {
        try {
            setIsLoading(true);
            const formData = new FormData();

            formData.append('quoteImg', data.quoteImg[0]);
            formData.append('movieId', data.movieId);
            formData.append('enQuote', data.enQuote);
            formData.append('kaQuote', data.kaQuote);

            const response = await api.post('add-quote', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                setIsLoading(false);
                window.location.href = '/admin/quotes';
            }

        } catch (error) {
            setIsLoading(false);
            alert(error.message);
        }
    };

    return (<QuoteModal onCloseQuote={props.onClose}>
        <div>
            <form
                encType="multipart/form-data"
                onSubmit={handleSubmit(submitFormHandler)}
                className={'flex flex-col space-y-3'}
            >
                <label htmlFor="enQuote" className="text-white">
                    {t('English quote')}
                </label>
                <input
                    {...register('enQuote', {
                        required: 'Please fill all fields',
                    })}
                    type="text"
                    id="enQuote"
                    placeholder={t('English quote')}
                    className="px-2 py-3 border-none outline-none rounded-md"
                />
                <label htmlFor="kaQuote" className="text-white">
                    {t('Georgian quote')}
                </label>
                <input
                    {...register('kaQuote', {
                        required: 'Please fill all fields',
                    })}
                    type="text"
                    id="kaQuote"
                    placeholder={t('Georgian quote')}
                    className="px-2 py-3 border-none outline-none rounded-md"
                />
                <input
                    {...register('quoteImg')}
                    type="file"
                    name="quoteImg"
                />
                {isLoading ? <Loading/> : <div>
                    <div className="my-4 text-center">
                        <p className="text-white font-bold text-lg">{t('Movies')}</p>
                        <select
                            {...register('movieId')}
                            className="w-full py-2 my-1 mb-3 rounded outline-none px-3"
                        >
                            {movies.map(movie => (
                                <option key={movie.id} value={movie.id}>{movie.name[langCtx.lang]}</option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-100 py-3 w-full rounded-md hover:bg-blue-400 hover:text-white transition-colors"
                    >
                        {t('Add Quote')}
                    </button>
                    <div className="text-red-400 text-center mt-4">
                        {errors.enQuote?.message || errors.kaQuote?.message}
                    </div>
                </div>}
            </form>
        </div>
    </QuoteModal>);
};

export default AddQuote;
