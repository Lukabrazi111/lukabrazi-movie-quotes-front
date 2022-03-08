import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import api from '../../utilities/axios-hook';
import Loading from '../../UI/Loading';

const Movies = () => {
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => setIsLoading(false), 500);

    useEffect(() => {
        const fetchDataHandler = async () => {
            try {
                const response = await api.get('movies');
                const responseData = response.data;

                setMovie(responseData);
            } catch (error) {
                alert(error.message);
            }
        };

        fetchDataHandler();
    }, []);

    return (
        <React.Fragment>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="w-full max-w-6xl mx-auto mt-12">
                    <div className="mt-12">
                        <ul className="list-none grid grid-cols-3 gap-4">
                            <MovieList movieList={movie} />
                        </ul>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default Movies;