import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';
import LanguageContext from 'context/languageContext';
import api from 'utilities/axios';
import Layout from 'components/Layout';

const Quotes = () => {
    const changeLanguageCtx = useContext(LanguageContext);
    const [quotes, setQuote] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const currentLanguage = changeLanguageCtx.lang;

    useEffect(() => {
        const fetchDataHandler = async () => {
            try {
                setIsLoading(true);
                const response = await api.get('quotes');
                const responseData = [response.data];

                setQuote(responseData);
                setIsLoading(false);
                return responseData;
            } catch (error) {
                setIsLoading(false);
                alert(error.message);
            }
        };

        fetchDataHandler();
    }, []);

    return (
        <React.Fragment>
            <Layout>
                <div className='container w-full max-w-lg m-auto'>
                    <section className='mt-36 text-center'>
                        {isLoading ? (
                            <Loading />
                        ) : (
                            quotes.map((quote) => (
                                <div key={quote.id}>
                                    <div className='mb-6'>
                                        <img
                                            className='rounded-xl'
                                            src={
                                                process.env
                                                    .REACT_APP_IMAGE_URL +
                                                quote.thumbnail
                                            }
                                            alt='img'
                                        />
                                    </div>
                                    <div className='mb-10'>
                                        <p className='text-white text-3xl'>
                                            {quote.movie.name[currentLanguage]}
                                        </p>
                                    </div>

                                    <div className='mb-8'>
                                        <p className='text-white text-2xl'>
                                            <Link
                                                to={'quote/' + quote.movie_id}
                                                className='hover:underline'
                                            >
                                                {quote.quote[currentLanguage]}
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </section>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Quotes;
