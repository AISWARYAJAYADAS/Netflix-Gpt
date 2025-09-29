export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const NETFLIX_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"

// Avatar service configuration
export const AVATAR_SERVICE = "https://ui-avatars.com/api/"
export const DEFAULT_AVATAR_CONFIG = {
    background: "374151",
    color: "fff",
    size: "32"
}

// Helper function to generate avatar URL
export const generateAvatarUrl = (name) => {
    return `${AVATAR_SERVICE}?name=${encodeURIComponent(name)}&background=${DEFAULT_AVATAR_CONFIG.background}&color=${DEFAULT_AVATAR_CONFIG.color}&size=${DEFAULT_AVATAR_CONFIG.size}`
}

// API Keys from environment variables with fallbacks
export const API_KEY = import.meta.env.VITE_TMDB_API_KEY 
export const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY 
export const API_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN 

// TMDB API Options with Bearer token
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_ACCESS_TOKEN}`
  }
};

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "malayalam", name: "Malayalam" }
]