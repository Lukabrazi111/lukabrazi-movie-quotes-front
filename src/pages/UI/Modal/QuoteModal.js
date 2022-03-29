import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return (
        <div onClick={props.onCloseQuote} className={'fixed top-0 left-0 w-full h-screen bg-backdrop z-10'}>
            {props.children}
        </div>
    );
};

const ModalOverlay = (props) => {
    return (
        <div
            className={
                'fixed z-50 top-1/3 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-blue-800 py-12 px-16 w-1/3 rounded-md'
            }
        >
            {props.children}
        </div>
    );
};

const QuoteModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onCloseQuote={props.onCloseQuote} />,
                document.getElementById('overlays')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                document.getElementById('overlays')
            )}
        </React.Fragment>
    );
};

export default QuoteModal;
