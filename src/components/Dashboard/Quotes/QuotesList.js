import React, { useState } from 'react';
import Loading from '../../UI/Loading';
import QuoteList from './QuoteList';

const Quotes = () => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => setIsLoading(false), 500);

    return (
        <React.Fragment>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="w-full max-w-6xl mx-auto mt-12">
                    <div className="mt-12">
                        <ul className="list-none grid grid-cols-3 gap-4">
                            <QuoteList />
                        </ul>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default Quotes;
