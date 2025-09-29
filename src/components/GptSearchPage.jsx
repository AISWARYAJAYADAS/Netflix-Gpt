import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearchPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background overlay with subtle pattern */}
      <div className="absolute inset-0 bg-black/60">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-blue-900/10"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-32 pb-16 px-4 min-h-screen">
        <div className="w-full max-w-7xl mx-auto">
          Search Section
          <div className="text-center mb-16">
            {/* <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              AI Movie Search
            </h1> */}
            {/* <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Tell us what you're in the mood for and let our AI find the perfect movies for you
            </p> */}
            <GptSearchBar />
          </div>

          {/* Suggestions Section */}
          <GptMovieSuggestions />
        </div>
      </div>
    </div>
  )
}

export default GptSearchPage