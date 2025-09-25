import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { removeUser } from '../utils/userSlice'
import { useNavigate, useLocation } from 'react-router'
import { LOGO, generateAvatarUrl } from '../utils/constants'

const Header = () => {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [logoError, setLogoError] = useState(false)

    const isLoginPage = location.pathname === '/'

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser())
                navigate('/')
            })
            .catch((error) => {
                console.error("Error signing out:", error)
            })
    }

    return (
        <div className="absolute bg-gradient-to-b from-black to-transparent w-full z-50">
            <div className="flex justify-between items-center px-6 py-4">
                {logoError ? (
                    <div className="text-red-600 text-2xl font-bold tracking-wider">
                        NETFLIX
                    </div>
                ) : (
                    <img 
                        className='w-44' 
                        src={LOGO} 
                        alt="Netflix Logo" 
                        onError={() => setLogoError(true)}
                    />
                )}
                
                {/* Show sign out only when user is logged in AND not on login page */}
                {user && !isLoginPage && (
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <img 
                                className="w-8 h-8 rounded-full bg-gray-600" 
                                src={user.photoURL || generateAvatarUrl(user.displayName || user.email)} 
                                alt="Profile" 
                            />
                            <span className="text-white text-sm font-medium">
                                {user.displayName || user.email}
                            </span>
                        </div>
                        <button 
                            onClick={handleSignOut}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header