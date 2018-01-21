import Api                        from '../utils/api';
import { UPDATE_SEARCH_RESULTS, CLEAR_SEARCH }  from './action-types';

export function updateSearchResults(searchTerms, tracks) {
    return {
        type : UPDATE_SEARCH_RESULTS, searchTerms, tracks
    };
}

export function clearSearchResults() {
    return {
        type : CLEAR_SEARCH
    };
}

export function search(searchTerms) {
    return dispatch => {
        return Api.search(searchTerms)
            .then( res => {
                console.log(JSON.stringify(searchTerms)+":"+JSON.stringify(res));
                dispatch(updateSearchResults(searchTerms, res.results));
                return res.results;
            });
    };
}

export function clearSearch() {
    return dispatch => {
        return dispatch(clearSearchResults());
    };
}
