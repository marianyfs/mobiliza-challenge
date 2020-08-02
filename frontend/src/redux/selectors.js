export const getMoviesState = (store) => store.movies;

export const getMoviesByIds = (store) => store.movies ? store.movies.byIds : {};

export const getMoviesList = (store) => {
  const movies = getMoviesState(store);

  if (movies.byIds) {
    return Object.values(movies.byIds);
  }
  return [];
};
