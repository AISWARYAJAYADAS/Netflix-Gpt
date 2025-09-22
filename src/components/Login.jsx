import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
const [isSignIn, setIsSignIn] = useState(true)

const toggleSignInForm = () => {
    setIsSignIn(!isSignIn)
}

  return (
    <div className="relative min-h-screen">
        {/* Header with higher z-index */}
        <div className="relative z-20">
            <Header />
        </div>
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg" 
                alt="Netflix background" 
                className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Form Container */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
            <form className='w-full max-w-md p-8 bg-black/80 text-white rounded-lg backdrop-blur-sm'>
                <h1 className="font-bold text-3xl mb-6 text-center">{isSignIn ? "Sign In" : "Sign Up"}</h1>

                <div className="space-y-4">

                    {!isSignIn && (
                        <input 
                            type="text" 
                            placeholder='Full Name' 
                            className='w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-red-500 transition-colors' 
                        />
                    )}
                    <input 
                        type="email" 
                        placeholder='Email or phone number' 
                        className='w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-red-500 transition-colors' 
                    />

                    <input 
                        type="password" 
                        placeholder='Password' 
                        className='w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-red-500 transition-colors' 
                    />
                </div>
                
                <button className='w-full bg-red-600 hover:bg-red-700 p-3 mt-6 text-white rounded font-semibold transition-colors'>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
                
                <div className="mt-4 text-center">
                    <h4 className="text-gray-300">
                        {isSignIn ? "New to Netflix?" : "Already have an account?"} 
                        <span className="text-white hover:underline cursor-pointer ml-1" onClick={toggleSignInForm}>{isSignIn ? "Sign up now." : "Sign in now."}</span>
                    </h4>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login