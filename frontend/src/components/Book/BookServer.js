const API_BASE_ENDPOINT = 'http://localhost:8000/api';
const API_BOOK_ENDPOINT = '/books/';

export const listBooks = async () => {
    return await fetch(API_BASE_ENDPOINT + API_BOOK_ENDPOINT);
};