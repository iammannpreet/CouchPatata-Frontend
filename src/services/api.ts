import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

// Fetch popular movies
export const fetchPopularMovies = () => API.get('/movies/popular');

// Search with filters
interface SearchParams {
  title?: string;
  genre?: number;
  year?: number;
  sort_by?: 'popularity' | 'vote_average' | 'release_date';
  order?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export const searchMovies = (params: SearchParams) => API.get('/movies/search', { params });

export default API;
