
import React, { useContext } from 'react';

import { AuthContext } from '../providers/AuthContext'


import { StackRoutes } from './Stack.routes';
import { AuthRoutes } from './Auth.routes';


const Routes: React.FC = () => {

    const { signed } = useContext(AuthContext)

    return signed ? <AuthRoutes /> : <StackRoutes />;

}

export default Routes;