import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

export const fetchPopularMovies = () => API.get('/movies/popular');
export const searchMovies = (query: string) => API.get(`/movies/search?title=${query}`);

export default API;
