import React, { useState, useEffect } from 'react';
import * as BookServer from './BookServer';
import BookItem from './BookItem';

const BookList = () => {

    const [books, setBooks] = useState([]);

    const listBooks = async () => {
        try {
            const res = await BookServer.listBooks();
            const data = await res.json();
            setBooks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listBooks();
    }, []);

    return (
        <div>
            {books.map((book) => (
                <BookItem key={book.id} book={book} />
            ))};
        </div>
    );
};

export default BookList;