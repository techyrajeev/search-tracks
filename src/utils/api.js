import 'isomorphic-fetch';

function sendPostRequest(URL, dataToSend, customHeaders = null, sessionToken = null) {
    let headers  = {
        'Content-Type' : 'application/json'
    };

    if (customHeaders) {
        headers = customHeaders;
    }

    if (sessionToken) {
        headers['Authorization'] = sessionToken
    }

    return fetch(URL, {
        method      : 'POST',
        headers     : headers,
        body        : JSON.stringify(dataToSend)
    })
    .then(checkResponseStatus)
    .then(parseJSON);
}

function sendGetRequest(URL, dataToSend, customHeaders = null, sessionToken = null) {
    let headers  = {
        'Content-Type' : 'application/json'
    };

    if (customHeaders) {
        headers = customHeaders;
    }

    if (sessionToken) {
        headers['Authorization'] = sessionToken
    }

    let queryString = Object.keys(dataToSend).map((key)=> {
        return `${key}=${dataToSend[key]}`
    }).join('&');

    return fetch(URL+queryString, {
        method      : 'GET',
        headers     : headers
    })
    .then(checkResponseStatus)
    .then(parseJSON);
}

function checkResponseStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

function parseJSON(response) {
    return response.json();
}

module.exports =  {

    search(searchTerm) {
        const URL          = 'http://itunes.apple.com/search?';
        const data         = { term : searchTerm.artistName, limit : searchTerm.tracks };
        return sendGetRequest(URL, data, null, null);
    }
};
