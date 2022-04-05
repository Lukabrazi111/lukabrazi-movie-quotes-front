import React, { useContext } from 'react';

import { useTranslation } from 'react-i18next';
import EditMovieModal from 'components/EditMovieModal';
import { useForm } from 'react-hook-form';
import api from 'utilities/axios';
import AuthContext from 'context/auth-context';

const EditMovie = (props) => {
    const { t } = useTranslation();
    const authCtx = useContext(AuthContext);

    const movieName = props.movie[0].name;
    const movieId = props.movie[0].id;

    const { register, handleSubmit } = useForm({
        defaultValues: {
            enMovie: movieName['en'],
            kaMovie: movieName['ka'],
        },
    });

    const submitMovieHandler = async (data) => {
        try {
            const response = await api.put(`/movie/${movieId}`, data, {
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
        <EditMovieModal onClose={props.onClose}>
            <div>
                <form
                    onSubmit={handleSubmit(submitMovieHandler)}
                    className={'flex flex-col space-y-3'}
                >
                    <label htmlFor='enName' className='text-white'>
                        {t('English name')}
                    </label>
                    <input
                        {...register('enMovie')}
                        defaultValue={movieName['en']}
                        type='text'
                        id='enMovie'
                        placeholder={t('English name')}
                        className='px-2 py-3 border-none outline-none rounded-md'
                    />
                    <label htmlFor='kaName' className='text-white'>
                        {t('Georgian name')}
                    </label>
                    <input
                        {...register('kaMovie')}
                        defaultValue={movieName['ka']}
                        type='text'
                        id='kaMovie'
                        placeholder={t('Georgian name')}
                        className='px-2 py-3 border-none outline-none rounded-md'
                    />
                    <button
                        type='submit'
                        className='bg-blue-100 py-3 rounded-md hover:bg-blue-400 hover:text-white transition-colors'
                    >
                        {t('Add Movie')}
                    </button>
                </form>
            </div>
        </EditMovieModal>
    );
};

export default EditMovie;
