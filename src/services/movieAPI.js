import axios from 'axios';

const API_KEY = '4f3aaab7a430fc83aac7a26892b43341';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async signal => {
  const response = await axios.get('trending/movie/day', {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data.results;
};

export const getMoviesByQuery = async (query, signal) => {
  const response = await axios.get('search/movie', {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
      include_adult: false,
      page: 1,
    },
  });

  return response.data.results;
};

export const getMovieDetails = async (movieId, signal) => {
  const response = await axios.get(`movie/${movieId}`, {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data;
};

export const getCast = async (movieId, signal) => {
  const response = await axios.get(`movie/${movieId}/credits`, {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data.cast;
};

export const getReviews = async (movieId, signal) => {
  const response = await axios.get(`movie/${movieId}/reviews`, {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    },
  });

  return response.data.results;
};
