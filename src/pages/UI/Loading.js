import React from 'react';

import './Loading.css';

const Loading = () => {
    return (
        <div className="mt-60 flex justify-center items-center">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;
