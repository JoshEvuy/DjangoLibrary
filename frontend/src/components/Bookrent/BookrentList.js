import React, { useState, useEffect } from 'react';
import * as BookrentServer from './BookrentServer';
import BookrentItem from './BookrentItem';
import { Link } from 'react-router-dom';

const BookrentList = () => {

    const [bookrents, setBookrents] = useState([]);

    const listBookrents = async () => {
        try {
            const res = await BookrentServer.listBookrents();
            const data = await res.json();
            setBookrents(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listBookrents();
    }, []);

    return (
        <div className='row'>
            <div className='col-md-12 mb-4'>
                <Link type='button' className='btn btn-primary' to='/bookrents/create'>Create a bookrent</Link>
            </div>
            {bookrents.map((bookrent) => (
                <BookrentItem key={bookrent.id} bookrent={bookrent} listBookrents={listBookrents} />
            ))}
        </div>
    );
};

export default BookrentList;