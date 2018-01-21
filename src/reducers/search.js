import * as types from '../actions/action-types';

const initialState = { tracks : [] };

function search(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_SEARCH_RESULTS:
      return {
          ...state,
            tracks : action.tracks
      };

    case types.CLEAR_SEARCH_RESULTS:
      return {
          ...state,
            tracks : [] 
      };

    default:
      return state;
    }
}

export default search;
