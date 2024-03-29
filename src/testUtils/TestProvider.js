import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const WrapperProvider = ({
    children,
}) => {

    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
};

export default WrapperProvider;