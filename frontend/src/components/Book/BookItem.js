import React from 'react';
import * as BookServer from './BookServer';
import { useNavigate } from 'react-router-dom';

const BookItem = ({ book, listBooks }) => {

    const history = useNavigate();

    const handleDelete = async (bookId) => {
        await BookServer.deleteBook(bookId);
        listBooks();
    };

    return (
        <div className='col-md-3 mb-4'>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>{book.title}</h5>
                    <p className='card-text'>Editorial: {book.editorial}</p>
                </div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>author: {book.author}</li>
                    <li className='list-group-item'>gender: {book.gender}</li>
                    <li className='list-group-item'>author_country: {book.author_country}</li>
                    <li className='list-group-item'>number_of_pages: {book.number_of_pages}</li>
                    <li className='list-group-item'>year_edition: {book.year_edition}</li>
                    <li className='list-group-item'>price: {book.price}</li>
                </ul>
                <div className='card-body text-center'>
                    <button onClick={() => history(`/books/update/${book.id}`, { replace: true })} className='btn btn-success'>Update</button>
                    <button onClick={() => book.id && handleDelete(book.id)} className='btn btn-danger'>Delete Book</button>
                </div>
            </div>
        </div>

    );

};

export default BookItem;