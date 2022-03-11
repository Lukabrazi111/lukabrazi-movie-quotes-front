import React, {useState, useEffect} from 'react';

import {useTranslation} from "react-i18next";
import EditQuoteModal from "../../UI/Modal/EditQuoteModal";
import Loading from "../../UI/Loading";
import api from '../../utilities/axios-hook';
import {useForm} from "react-hook-form";

const EditQuote = (props) => {
    const {t} = useTranslation();
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const quote = props.quote[0];
    const quoteId = quote.id;

    const {register, handleSubmit} = useForm({
        defaultValues: {
            enQuote: quote.quote['en'],
            kaQuote: quote.quote['ka'],
            quoteImg: '',
            movieId: '1',
        },
    });

    useEffect(() => {
        const fetchMoviesHandler = async () => {
            try {
                setIsLoading(true);
                const response = await api.get('/all-movies');
                const responseData = await response.data;

                if (responseData) {
                    setIsLoading(false);
                    setMovies(responseData);
                }
            } catch (error) {
                setIsLoading(false);
                alert(error.message);
            }
        };

        fetchMoviesHandler();
    }, [])

    const submitQuoteHandler = async (data) => {
        try {
            setIsLoading(true);
            const formData = new FormData();
            formData.append('_method', 'PUT');
            formData.append('quoteImg', data.quoteImg[0]);
            formData.append('enQuote', data.enQuote);
            formData.append('kaQuote', data.kaQuote);
            formData.set('movieId', data.movieId);

            const response = await api.post(`/edit-quote/${quoteId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            const responseData = await response.data;

            if (responseData) {
                setIsLoading(false);
                window.location.href = '/admin/quotes';
            }
        } catch (error) {
            setIsLoading(false);
            alert(error.message);
        }
    };

    return (
        <EditQuoteModal onClose={props.onClose}>
            <div>
                <form
                    encType="multipart/form-data"
                    onSubmit={handleSubmit(submitQuoteHandler)}
                    className={'flex flex-col space-y-3'}
                >
                    <label htmlFor="enQuote" className="text-white">
                        {t('English quote')}
                    </label>
                    <input
                        {...register('enQuote')}
                        defaultValue={quote.quote['en']}
                        type="text"
                        placeholder={t('English quote')}
                        className="px-2 py-3 border-none outline-none rounded-md"
                    />
                    <label htmlFor="kaQuote" className="text-white">
                        {t('Georgian quote')}
                    </label>
                    <input
                        {...register('kaQuote')}
                        defaultValue={quote.quote['ka']}
                        type="text"
                        placeholder={t('Georgian quote')}
                        className="px-2 py-3 border-none outline-none rounded-md"
                    />
                    <input
                        {...register('quoteImg')}
                        type="file"
                    />
                    {isLoading ? <Loading/> : (<div>
                        <div className="my-4 text-center">
                            <p className="text-white font-bold text-lg">{t('Movies')}</p>
                            <select
                                {...register('movieId')}
                                className="w-full py-2 my-1 mb-3 rounded outline-none px-3"
                            >
                                {movies.map(movie => (
                                    <option key={movie.id} value={movie.id}>{movie.name['en']}</option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-100 py-3 w-full rounded-md hover:bg-blue-400 hover:text-white transition-colors"
                        >
                            {t('Add Quote')}
                        </button>
                    </div>)}
                </form>
            </div>
        </EditQuoteModal>
    );
};

export default EditQuote;