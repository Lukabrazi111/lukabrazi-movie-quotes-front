import React, { useContext, useState } from 'react';

import { useTranslation } from 'react-i18next';
import LanguageContext from 'context/languageContext';
import EditQuote from 'pages/Quotes/components/EditQuote';
import api from 'utilities/axios';
import AuthContext from 'context/authContext';

const QuoteList = ({ quotesList }) => {
    const { t } = useTranslation();
    const languageCtx = useContext(LanguageContext);
    const [showEditModal, setShowEditModal] = useState(false);
    const [quote, setQuote] = useState([]);
    const authCtx = useContext(AuthContext);

    const currentLanguage = languageCtx.lang;

    const closeModalHandler = () => {
        setShowEditModal(false);
    };

    const showModalHandler = async (id) => {
        try {
            const response = await api.get(`/quote/${id}`);
            const responseData = await response.data;

            setQuote(responseData);
            setShowEditModal(true);
        } catch (error) {
            alert(error.message);
        }
    };

    const deleteQuoteHandler = async (id) => {
        try {
            const response = await api.delete(`/quote/${id}`, {
                headers: {
                    Authorization: `Bearer ${authCtx.token}`,
                },
            });
            const responseData = await response.data;

            if (responseData) {
                window.location.reload(true);
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <React.Fragment>
            {showEditModal && (
                <EditQuote quote={quote} onClose={closeModalHandler} />
            )}
            {quotesList.map((quote) => (
                <li
                    key={quote.id}
                    className='bg-white rounded-xl flex justify-between flex-col'
                >
                    <div className='px-3 py-5 text-center'>
                        <div>
                            <img
                                src={
                                    process.env.REACT_APP_IMAGE_URL +
                                    quote.thumbnail
                                }
                                alt={quote.movie.name[currentLanguage]}
                                className='mb-3 rounded-md object-cover w-full h-48'
                            />
                        </div>
                        <p className='text-lg mb-3'>
                            {quote.movie.name[currentLanguage]}
                        </p>
                        <p className='text-sm text-gray-400'>
                            {quote.quote[currentLanguage]}
                        </p>
                    </div>
                    <div className='flex'>
                        <button
                            onClick={() => showModalHandler(quote.id)}
                            className='bg-green-400 py-2 w-full hover:bg-green-500 rounded-bl-md'
                        >
                            {t('Edit')}
                        </button>
                        <button
                            onClick={() => deleteQuoteHandler(quote.id)}
                            className='bg-red-400 py-2 w-full hover:bg-red-500 rounded-br-md'
                        >
                            {t('Delete')}
                        </button>
                    </div>
                </li>
            ))}
        </React.Fragment>
    );
};

export default QuoteList;
