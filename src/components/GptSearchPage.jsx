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