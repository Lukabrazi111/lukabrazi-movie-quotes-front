import React from 'react';

const QuoteList = ({ quotesList }) => {
    return (
        <React.Fragment>
            {quotesList.map((quote) => (
                <li
                    key={quote.id}
                    className="bg-white rounded-xl flex justify-between flex-col"
                >
                    <div className="px-3 py-5 text-center">
                        <p className="text-lg mb-3">{quote.movie.name['en']}</p>
                        <p className="text-sm text-gray-400">
                            {quote.quote['en']}
                        </p>
                    </div>
                    <div className="flex">
                        <button className="bg-green-400 py-2 w-full hover:bg-green-500 rounded-bl-md">
                            Edit
                        </button>
                        <button className="bg-red-400 py-2 w-full hover:bg-red-500 rounded-br-md">
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </React.Fragment>
    );
};

export default QuoteList;
