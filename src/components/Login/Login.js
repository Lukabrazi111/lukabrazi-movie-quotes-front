import React from 'react';

import Input from '../UI/Buttons/Input';

import { useTranslation } from 'react-i18next';

const Login = () => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <div className="bg-white shadow-md rounded px-8 pt-6 w-8/12 m-auto mt-12 pb-8 mb-4 flex flex-col">
                <form>
                    <div className="mb-4">
                        <label
                            className="block text-grey-darker text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            {t('Email')}
                        </label>
                        <Input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                            id="email"
                            type="email"
                            placeholder={t('Email')}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-grey-darker text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            {t('Password')}
                        </label>
                        <Input
                            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                            id="password"
                            type="password"
                            placeholder="******************"
                        />
                        <p className="text-red text-xs italic">
                            {t('Please choose a password')}.
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-400 hover:bg-blue-500 font-bold py-2 px-4 rounded"
                            type="submit"
                        >
                            {t('Sign In')}
                        </button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Login;
