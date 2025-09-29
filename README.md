## Netflix Gpt

A modern Netflix-inspired web application built with React and Vite, featuring authentication and browsing capabilities.

Live Demo → https://netflix-gpt-b889a.web.app/

- Create - vite React App
- Configured Tailwind css - https://tailwindcss.com/docs/installation/using-vite

- Routing of App - npm i react-router - https://reactrouter.com/start/data/installation

- Header
- SignIn SignUp Form
- Form Validation
- useRef Hook
- Firebase setup
- Deplying or app to production.
- Authetication - https://firebase.google.com/docs/auth/web/password-auth
- Implement SignUp,SignIn user Api.
- Created Redux store with user slice
- Implement SignOut Feature
- Update Profile
- Unsubscribed to the onAuthStateChanged callback
- Add Hardcoded values into the constants file
- Registered for TMDB API and get Access token
- Get data from TMDB Now playing movie list API.
- Custom hook for Now Playing movies
- Create movieSlice
- Update Store with Movies data
- Planning for main container and secondary container
- Fetch data for trailer video
- Update Store with Trailer Video Data
- Embedded the youtube video and make it auto play and mute
- Build Secondary component
- Build MovieList
- Build Movie Card
- useTrailerMovies hook
- GPT Search page, Gpt search bar
- Multi language support

Features

Getting Started
git clone https://github.com/AISWARYAJAYADAS/Netflix-Gpt.git
cd netflix-gpt
npm install
npm run dev

Runs on: http://localhost:5173

Deployment (Firebase)
npm install -g firebase-tools
firebase login
firebase init
firebase deploy

Deployed at: https: https://netflix-gpt-b889a.web.app/
