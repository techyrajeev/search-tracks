import Api                        from '../utils/api';
import { UPDATE_SEARCH_RESULTS, CLEAR_SEARCH }  from './action-types';

export function updateSearchResults(tracks) {
    return {
        type : UPDATE_SEARCH_RESULTS,
        planets
    };
}

export function clearSearchResults() {
    return {
        type : CLEAR_SEARCH
    };
}

export function search(searchTerm) {
    return dispatch => {
        return Api.search(searchTerm)
            .then( res => {
                console.log(JSON.stringify(res));
                dispatch(updateSearchResults(res.results));
            });
    };
}

export function clearSearch() {
    return dispatch => {
        return dispatch(clearSearchResults());
    };
}
