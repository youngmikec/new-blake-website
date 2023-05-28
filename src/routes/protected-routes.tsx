import React from 'react';
type Props = {
	children: any
};

export  const NotProtectedRoute = ({children}:Props)=>{
    return children;
}

export default NotProtectedRoute;