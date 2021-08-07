import React from 'react';
import {Wrapper} from "./style";

const Layout = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default Layout;