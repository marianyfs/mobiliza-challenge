export const getMoviesState = (store) => store.movies;

export const getMoviesByIds = (store) => {
  const movies = getMoviesState(store);
  if (movies.byIds) {
    return movies.byIds;
  }
  return [];
};

export const getMoviesList = (store) => {
  const movies = getMoviesState(store);

  if (movies.byIds) {
    return Object.values(movies.byIds);
  }
  return [];
};
