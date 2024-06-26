import React, { useState } from 'react';
import Login from './Subcomps/Login';
import Signup from './Subcomps/Signup';

const Credentials = ({ setbool }) => {
    const [signbool, setsignbool] = useState(true);

    return (
        <>
            {signbool ? <Signup setsignbool={setsignbool} setbool={setbool} /> : <Login setsignbool={setsignbool} setbool={setbool} />}
        </>
    );
}

export default Credentials;
