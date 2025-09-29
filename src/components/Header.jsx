import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { removeUser } from '../utils/userSlice'
import { useNavigate, useLocation } from 'react-router'
import { LOGO, SUPPORTED_LANGUAGES, generateAvatarUrl } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    
    const [logoError, setLogoError] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    const languageKey = useSelector(store => store.config.language)
    const gptSearchShow = useSelector(store => store.gpt.showGptSearch)
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

    const handleGptSearch = () => {
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (language) => {
        dispatch(changeLanguage(language.identifier))
        setShowDropdown(false)
    }

    return (
        <div className="absolute bg-gradient-to-b from-black to-transparent w-full z-50">
            <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 gap-2">
                {logoError ? (
                    <div className="text-red-600 text-xl font-bold tracking-wider">
                        NETFLIX
                    </div>
                ) : (
                    <img 
                        className='w-32 sm:w-44' 
                        src={LOGO} 
                        alt="Netflix Logo" 
                        onError={() => setLogoError(true)}
                    />
                )}
                
                {user && !isLoginPage && (
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                        <div className="flex items-center gap-2">
                            <img 
                                className="w-6 h-6 rounded-full bg-gray-600" 
                                src={user.photoURL || generateAvatarUrl(user.displayName || user.email)} 
                                alt="Profile" 
                            />
                            <span className="text-white text-xs sm:text-sm">
                                {user.displayName || user.email}
                            </span>
                        </div>

                        {gptSearchShow && (
                            <div className="relative">
                                <button 
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="text-white bg-gray-800 px-3 py-1 rounded text-xs hover:bg-gray-700"
                                >
                                    {SUPPORTED_LANGUAGES.find(language => language.identifier === languageKey)?.name || 'English'} ▼
                                </button>
                                
                                {showDropdown && (
                                    <div className="absolute top-full left-0 mt-1 bg-gray-800 rounded shadow-lg border border-gray-600">
                                        {SUPPORTED_LANGUAGES.map((language) => (
                                            <button
                                                key={language.identifier}
                                                onClick={() => handleLanguageChange(language)}
                                                className="w-full text-left px-3 py-1 text-xs text-white hover:bg-gray-700"
                                            >
                                                {language.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        <button 
                            onClick={handleGptSearch}
                            className='bg-purple-800 text-white px-3 py-1 rounded text-xs hover:bg-purple-900'
                        >
                            {gptSearchShow ? 'Home' : 'GPT Search'}
                        </button>

                        <button 
                            onClick={handleSignOut}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
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