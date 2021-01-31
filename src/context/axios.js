// a popular fetching library to fetch post request.
//  a easier handling of post & get requests.

import axios from 'axios';

const instance = axios.create({
    baseURL: '..', // The API (cloud function ) URL.
});

export default instance;