import React, { useState, useEffect } from 'react';
import * as BookServer from './BookServer';
import BookItem from './BookItem';
import { Link } from 'react-router-dom';

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
        <div className='row'>
            <div className='col-md-12 mb-4'>
                <Link type='button' className='btn btn-primary' to='/books/create'>Create a book</Link>
            </div>
            {books.map((book) => (
                <BookItem key={book.id} book={book} listBooks={listBooks} />
            ))}
        </div>
    );
};

export default BookList;