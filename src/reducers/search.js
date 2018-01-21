import * as types from '../actions/action-types';

const initialState = { tracks : [], searchTerms : '' };

function search(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_SEARCH_RESULTS:
      return {
          ...state,
          tracks      : action.tracks,
          searchTerms : action.searchTerms
      };

    case types.CLEAR_SEARCH_RESULTS:
      return {
          ...state,
          tracks      : [],
          searchTerms : ''
      };

    default:
      return state;
    }
}

export default search;
