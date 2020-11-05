import React, { useState } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';

const Authentication = () => {

    const [display, setDisplay] = useState('login')

    return (
        <>
            {display === 'login' ? 
                <Login setDisplay={setDisplay} /> :
                <Register setDisplay={setDisplay} />
            }
        </>
    )
}

export default Authentication