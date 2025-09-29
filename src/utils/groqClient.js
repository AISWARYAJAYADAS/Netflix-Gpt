import OpenAI from 'openai';

// Get API key from environment variables
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

// Validate API key
if (!GROQ_API_KEY) {
    console.error('Groq API key not found. Please set VITE_GROQ_API_KEY in your .env file');
}

// Create Groq client (OpenAI compatible)
export const groqClient = new OpenAI({
    apiKey: GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
    dangerouslyAllowBrowser: true,
});


