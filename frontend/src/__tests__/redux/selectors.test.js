import {
  getMoviesState, getMoviesByIds, getMoviesList,
} from '../../redux/selectors';

describe('Test Redux Selectors', () => {
  it('Should return store movies', () => {
    const store = {
      movies: {
        byIds: {
          '1a': { imdbID: '1a', Title: '1 A' },
          '1b': { imdbID: '1b', Title: '1 B' },
          '1c': { imdbID: '1c', Title: '1 C' },
        },
        allIds: ['1a', '1b', '1c'],
      },
    };

    const movies = getMoviesState(store);
    expect(movies).toMatchObject(store.movies);
  });

  it('Should return store movies by Ids', () => {
    const store = {
      movies: {
        byIds: {
          '1a': { imdbID: '1a', Title: '1 A' },
          '1b': { imdbID: '1b', Title: '1 B' },
          '1c': { imdbID: '1c', Title: '1 C' },
        },
        allIds: ['1a', '1b', '1c'],
      },
    };

    const movies = getMoviesByIds(store);
    expect(movies).toMatchObject(store.movies.byIds);
  });

  it('Should return store movies by ids values in list', () => {
    const store = {
      movies: {
        byIds: {
          '1a': { imdbID: '1a', Title: '1 A' },
          '1b': { imdbID: '1b', Title: '1 B' },
          '1c': { imdbID: '1c', Title: '1 C' },
        },
        allIds: ['1a', '1b', '1c'],
      },
    };

    const movies = getMoviesList(store);

    expect(movies).toEqual(
      expect.arrayContaining([
        expect.objectContaining(
          store.movies.byIds['1a'],
        ),
      ]),
    );
  });
});
