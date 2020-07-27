import { ADD_MOVIE, REMOVE_MOVIE } from './actionTypes';

export const addMovie = (content) => ({
  type: ADD_MOVIE,
  payload: {
    ...content,
  },
});

export const removeMovie = (content) => ({
  type: REMOVE_MOVIE,
  payload: {
    ...content,
  },
});
