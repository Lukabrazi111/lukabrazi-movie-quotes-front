import React from 'react';

import { useTranslation } from 'react-i18next';
import QuoteModal from '../../UI/Modal/QuoteModal';

const AddQuote = (props) => {
    const { t } = useTranslation();

    return (
        <QuoteModal onCloseQuote={props.onClose}>
            <div>
                <form className={'flex flex-col space-y-3'}>
                    <label htmlFor="enName" className="text-white">
                        {t('English quote')}
                    </label>
                    <input
                        type="text"
                        id="enName"
                        placeholder={t('English quote')}
                        className="px-2 py-3 border-none outline-none rounded-md"
                    />
                    <label htmlFor="kaName" className="text-white">
                        {t('Georgian quote')}
                    </label>
                    <input
                        type="text"
                        id="kaName"
                        placeholder={t('Georgian quote')}
                        className="px-2 py-3 border-none outline-none rounded-md"
                    />
                    <button
                        type="submit"
                        className="bg-blue-100 py-3 rounded-md hover:bg-blue-400 hover:text-white transition-colors"
                    >
                        {t('Add Quote')}
                    </button>
                    <div className="text-red-400 text-center">
                        error messages
                    </div>
                </form>
            </div>
        </QuoteModal>
    );
};

export default AddQuote;
