import React from 'react'
import { Navigate, Route } from 'react-router-dom'

export default function ProtectedRoute({ authenticated, element, ...rest}) {

    if(!authenticated) {
        return <Navigate to="/" />
    }
    
    return (
        <Route element={element} {...rest}  />
    )
}
