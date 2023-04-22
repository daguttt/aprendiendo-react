export const API_KEY = 'b77768be';
// Seach endpoint example http://www.omdbapi.com/?apikey=b77768be&s=Aven
export const MOVIES_API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

// Match either if it starts with numbers, spaces or tabs
export const invalidSearchFormat = /^[\d\s]+[\w\s]+/g; // Created by me inspired from https://www.freecodecamp.org/news/what-does-mean-in-regex/
