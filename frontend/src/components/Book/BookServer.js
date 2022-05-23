const API_BASE_ENDPOINT = 'http://localhost:8000/api';
const API_BOOK_ENDPOINT = API_BASE_ENDPOINT + '/books/';

export const listBooks = async () => {
    return await fetch(API_BOOK_ENDPOINT);
};

export const getBook = async (bookId) => {
    return await fetch(`${API_BOOK_ENDPOINT}${bookId}`);
};

export const createBook = async (newBook) => {
    return await fetch(API_BOOK_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': String(newBook.title).trim(),
            'editorial': String(newBook.editorial).trim(),
            'author': String(newBook.author).trim(),
            'gender': String(newBook.gender).trim(),
            'author_country': String(newBook.author_country).trim(),
            'number_of_pages': parseInt(newBook.number_of_pages),
            'year_edition': String(newBook.year_edition).trim(),
            'price': parseInt(newBook.price),
        })
    });
};

export const updateBook = async (bookId, updatedBook) => {
    return await fetch(`${API_BOOK_ENDPOINT}${bookId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': String(updatedBook.title).trim(),
            'editorial': String(updatedBook.editorial).trim(),
            'author': String(updatedBook.author).trim(),
            'gender': String(updatedBook.gender).trim(),
            'author_country': String(updatedBook.author_country).trim(),
            'number_of_pages': parseInt(updatedBook.number_of_pages),
            'year_edition': String(updatedBook.year_edition).trim(),
            'price': parseInt(updatedBook.price),
        })
    });
};

export const deleteBook = async (bookId) => {
    return await fetch(`${API_BOOK_ENDPOINT}${bookId}`, {
        method: 'DELETE',
    });
};