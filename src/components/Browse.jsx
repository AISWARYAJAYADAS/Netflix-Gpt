import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const Browse = () => {
    const user = useSelector(store => store.user)

    // If no user, redirect to login
    if (!user) {
        return <Navigate to="/" replace />
    }

    return (
        <div className="min-h-screen bg-black">
            <Header />
            <div className="pt-20 px-6">
                <h1 className="text-white text-4xl font-bold">Browse</h1>
                <p className="text-gray-400 mt-4">Welcome to Netflix GPT, {user.displayName || user.email}!</p>
            </div>
        </div>
    )
}

export default Browse