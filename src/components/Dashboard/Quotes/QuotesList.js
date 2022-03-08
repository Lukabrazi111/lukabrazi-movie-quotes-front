import React, { useEffect, useState } from 'react';
import Loading from '../../UI/Loading';
import api from '../../utilities/axios-hook';
import QuoteList from './QuoteList';

const Quotes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [quotes, setQuotes] = useState([]);

    setTimeout(() => setIsLoading(false), 500);

    useEffect(() => {
        const fetchDataHandler = async () => {
            try {
                const response = await api.get('quotes-movies');
                const responseData = response.data;
                setQuotes(responseData);
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
                            <QuoteList quotesList={quotes} />
                        </ul>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default Quotes;
