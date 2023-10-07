import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';

const authHook = () => {

const all = useContext(authContext)

    return all
};

export default authHook;