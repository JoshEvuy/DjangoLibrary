import React from 'react';
import * as BookrentServer from './BookrentServer';
import { useNavigate } from 'react-router-dom';

const BookrentItem = ({ bookrent, listBookrents }) => {

    const history = useNavigate();

    const handleDelete = async (bookrentId) => {
        await BookrentServer.deleteBookrent(bookrentId);
        listBookrents();
    };

    return (
        <div className='col-md-3 mb-4'>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>book_id: {bookrent.book_id}</h5>
                    <p className='card-text'>customer_id: {bookrent.customer_id}</p>
                </div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>return_date: {bookrent.return_date}</li>
                </ul>
                <div className='card-body text-center'>
                    <button onClick={() => history(`/bookrents/update/${bookrent.id}`, { replace: true })} className='btn btn-success'>Update</button>
                    <button onClick={() => bookrent.id && handleDelete(bookrent.id)} className='btn btn-danger'>Delete Bookrent</button>
                </div>
            </div>
        </div>

    );

};

export default BookrentItem;