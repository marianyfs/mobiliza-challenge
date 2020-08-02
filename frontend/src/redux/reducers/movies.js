import { ADD_MOVIE, REMOVE_MOVIE } from '../actionTypes';

const initialState = {
  allIds: [],
  byIds: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE: {
      const { imdbID, ...content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, imdbID],
        byIds: {
          ...state.byIds,
          [imdbID]: {
            imdbID,
            ...content,
          },
        },
      };
    }
    case REMOVE_MOVIE: {
      const { imdbID } = action.payload;

      // remove imdbID object key from byIds
      const byIds = { ...state.byIds };
      delete byIds[imdbID];

      return {
        ...state,
        // remove imdbID from allIds
        allIds: state.allIds.filter((item) => item !== imdbID),
        byIds,
      };
    }
    default:
      return state;
  }
};
