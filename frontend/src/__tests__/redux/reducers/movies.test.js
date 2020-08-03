import reducer from '../../../redux/reducers/movies';
import { ADD_MOVIE, REMOVE_MOVIE } from '../../../redux/actionTypes';

describe('Test Redux Selectors', () => {
  it('Should add a movie in store movies', () => {
    const payload = {
      imdbID: '1a',
      Title: '1 A',
    };
    const state = reducer(undefined, {
      type: ADD_MOVIE,
      payload,
    });

    expect(state.allIds).toEqual(
      expect.arrayContaining([payload.imdbID]),
    );

    expect(state.byIds).toMatchObject({ '1a': {} });
  });

  it('Should remove a movie in store movies', () => {
    const store = {
      byIds: {
        '1a': { imdbID: '1a', Title: '1 A' },
        '1b': { imdbID: '1b', Title: '1 B' },
      },
      allIds: ['1a', '1b'],
    };

    const payload = {
      imdbID: store.byIds['1a'],
    };

    const state = reducer(store, {
      type: REMOVE_MOVIE,
      payload,
    });

    expect(state.allIds).toEqual(
      expect.not.arrayContaining([payload.imdbID]),
    );

    expect(state.byIds[payload.imdbID]).toBeUndefined();
  });
});
