import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {
    const user = useSelector(store => store.user)

    useNowPlayingMovies()


    // If no user, redirect to login
    if (!user) {
        return <Navigate to="/" replace />
    }

    return (
        <div className="min-h-screen bg-black relative">
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse