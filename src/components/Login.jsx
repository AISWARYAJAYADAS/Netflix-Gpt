import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { NETFLIX_BG } from '../utils/constants'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const handleSubmit = () => {
        const name = nameRef?.current?.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        setErrorMessage(null);
        setIsLoading(true);

        if(!isSignIn && !name) {
            setErrorMessage("Full Name is required")
            setIsLoading(false);
            return;
        }

        const message = checkValidData(email, password);
        setErrorMessage(message);

        if(message) {
            setIsLoading(false);
            return;
        }
        
        if(!isSignIn) {
            // Sign Up
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    
                    // Update user profile with name
                    return updateProfile(user, {
                        displayName: name
                    });
                })
                .then(() => {
                    console.log("Profile updated successfully");
                    clearForm();
                    navigate('/browse');
                })
                .catch((error) => {
                    console.error("Error:", error);
                    setErrorMessage(error.message);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            // Sign In
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("Sign in successful:", user);
                    clearForm();
                    navigate('/browse');
                })
                .catch((error) => {
                    console.error("Error:", error);
                    setErrorMessage(error.message);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }

    const clearForm = () => {
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (passwordRef.current) passwordRef.current.value = '';
    }

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn)
        setErrorMessage(null)
        clearForm()
    }

    return (
        <div className="relative min-h-screen">
            <Header />
            
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={NETFLIX_BG} 
                    alt="Netflix background" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Form Container */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <form className='w-full max-w-md p-8 bg-black/80 text-white rounded-lg backdrop-blur-sm' onSubmit={(e) => e.preventDefault()}>
                    <h1 className="font-bold text-3xl mb-6 text-center">{isSignIn ? "Sign In" : "Sign Up"}</h1>

                    <div className="space-y-4">
                        {!isSignIn && (
                            <input 
                                type="text" 
                                ref={nameRef}
                                placeholder='Full Name' 
                                className='w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-white transition-colors' 
                            />
                        )}
                        
                        <input 
                            type="email" 
                            placeholder='Email or phone number' 
                            className='w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-white transition-colors' 
                            ref={emailRef}
                        />

                        <input 
                            type="password" 
                            placeholder='Password' 
                            className='w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-white transition-colors' 
                            ref={passwordRef}
                        />

                        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                    </div>
                    
                    <button 
                        className='w-full bg-red-600 hover:bg-red-700 p-3 mt-6 text-white rounded font-semibold transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed' 
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : (isSignIn ? "Sign In" : "Sign Up")}
                    </button>
                    
                    <div className="mt-4 text-center">
                        <h4 className="text-gray-300">
                            {isSignIn ? "New to Netflix?" : "Already have an account?"} 
                            <span className="text-white hover:underline cursor-pointer ml-1" onClick={toggleSignInForm}>
                                {isSignIn ? "Sign up now." : "Sign in now."}
                            </span>
                        </h4>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login