const API_BASE_ENDPOINT = 'http://localhost:8000/api';
const API_BOOK_ENDPOINT = API_BASE_ENDPOINT + '/bookrents/';

export const listBookrents = async () => {
    return await fetch(API_BOOK_ENDPOINT);
};

export const getBookrent = async (bookrentId) => {
    return await fetch(`${API_BOOK_ENDPOINT}${bookrentId}`);
};

export const createBookrent = async (newBookrent) => {
    return await fetch(API_BOOK_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'book_id': parseInt(newBookrent.book_id),
            'customer_id': parseInt(newBookrent.customer_id),
            'return_date': String(newBookrent.return_date).trim(),
        })
    });
};

export const updateBookrent = async (bookrentId, updatedBookrent) => {
    return await fetch(`${API_BOOK_ENDPOINT}${bookrentId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'book_id': parseInt(updatedBookrent.book_id),
            'customer_id': parseInt(updatedBookrent.customer_id),
            'return_date': String(updatedBookrent.return_date).trim(),
        })
    });
};

export const deleteBookrent = async (bookrentId) => {
    return await fetch(`${API_BOOK_ENDPOINT}${bookrentId}`, {
        method: 'DELETE',
    });
};