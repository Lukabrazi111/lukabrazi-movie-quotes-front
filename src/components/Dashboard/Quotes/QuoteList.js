import React from 'react';

const QuoteList = () => {
    return (
        <React.Fragment>
            <li className="bg-white rounded-xl flex justify-center flex-col">
                <div className="border-b px-3 py-5">
                    <p className="text-sm">quote</p>
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
        </React.Fragment>
    );
};

export default QuoteList;
