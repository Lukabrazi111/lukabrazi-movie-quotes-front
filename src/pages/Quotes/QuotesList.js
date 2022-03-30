import React, { useEffect, useState } from 'react';
import Loading from 'components/Loading';
import api from 'utilities/axios-hook';
import QuoteList from 'pages/Quotes/QuoteList';
import DashboardLayout from 'pages/Dashboard/DashboardLayout';

const Quotes = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const fetchDataHandler = async () => {
            try {
                setIsLoading(true);
                const response = await api.get('quotes-movies');
                const responseData = response.data;
                setQuotes(responseData);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                alert(error.message);
            }
        };

        fetchDataHandler();
    }, []);

    return (
        <React.Fragment>
            <DashboardLayout>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className='w-full max-w-6xl mx-auto mt-12'>
                        <div className='mt-12'>
                            <ul className='list-none grid grid-cols-3 gap-4'>
                                <QuoteList quotesList={quotes} />
                            </ul>
                        </div>
                    </div>
                )}
            </DashboardLayout>
        </React.Fragment>
    );
};

export default Quotes;
