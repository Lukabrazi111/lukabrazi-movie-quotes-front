import React from 'react';
import {useTranslation} from 'react-i18next';

import image from '../../assets/404.png';
import Layout from "../Layout";

const NotFound = () => {
    const {t} = useTranslation();

    return (<Layout>
            <div>
                <h1 className='text-center text-2xl font-bold mt-24 mb-10 text-blue-300'>{t('Page Not Found')}!</h1>
                <img src={image} alt={'404'} className='z-10 w-full max-w-4xl m-auto object-cover'/>
            </div>
        </Layout>);
};

export default NotFound;
