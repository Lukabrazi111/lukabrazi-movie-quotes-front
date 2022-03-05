import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './UI/Loading';

import api from './utilities/axios-hook';

const Quotes = () => {
    const [quotes, setQuote] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    setTimeout(() => setIsLoading(false), 1000);

    useEffect(() => {
        const fetchDataHandler = async () => {
            try {
                const response = await api.get('quotes');
                const responseData = [response.data];

                setQuote(responseData);
                setIsLoading(true);
                return responseData;
            } catch (error) {
                alert(error.message);
            }
        };

        fetchDataHandler();
    }, []);

    return (
        <React.Fragment>
            <div className="container w-full max-w-lg m-auto">
                <section className="mt-36 text-center">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        quotes.map((quote) => (
                            <div key={quote.id}>
                                <div className="mb-6">
                                    <img
                                        className="rounded-xl"
                                        src={
                                            process.env.REACT_APP_IMAGE_URL +
                                            quote.thumbnail
                                        }
                                        alt="img"
                                    />
                                </div>
                                <div className="mb-10">
                                    <p className="text-white text-3xl">
                                        {quote.movie.name['en']}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <p className="text-white text-2xl">
                                        <Link
                                            to={'quote/' + quote.movie_id}
                                            className="hover:underline"
                                        >
                                            {quote.quote['en']}
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </section>
            </div>
        </React.Fragment>
    );
};

export default Quotes;
