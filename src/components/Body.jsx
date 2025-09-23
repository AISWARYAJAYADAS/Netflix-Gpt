import React, { useEffect, useState } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const [isLoading, setIsLoading] = useState(true);

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: user ? <Navigate to="/browse" /> : <Login />
        },
        {
            path: "/browse",
            element: user ? <Browse /> : <Navigate to="/" />
        }
    ])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(addUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                }))
            } else {
                dispatch(removeUser())
            }
            setIsLoading(false); // Set loading to false after auth check
        });

        // Cleanup subscription
        // unsubscribe when the component unmounts
        return () => unsubscribe();
    }, [])

    // Show loading screen while checking auth
    if (isLoading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        )
    }

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body