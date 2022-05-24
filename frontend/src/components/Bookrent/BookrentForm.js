import React, { useEffect, useState } from 'react';
import * as BookrentServer from './BookrentServer';
import { useNavigate, useParams } from 'react-router-dom';

// let current = new Date();
// let current_date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;

const BookrentForm = () => {

    const history = useNavigate();
    const params = useParams();

    const initialState = {
        book_id: '',
        customer_id: '',
        return_date: ''
    };

    const [bookrent, setBookrent] = useState(initialState);

    const handleInputChange = (e) => {
        setBookrent({ ...bookrent, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            if (!params.id) {
                res = await BookrentServer.createBookrent(bookrent);
                const data = await res.json();
                if (data.message === 'Success') {
                    setBookrent(initialState);
                }
            } else {
                await BookrentServer.updateBookrent(params.id, bookrent);
            }

            history('/bookrents', { replace: true });
        } catch (error) {
            console.log(error);
        }
    };

    const getBookrent = async (bookrentId) => {
        try {
            const res = await BookrentServer.getBookrent(bookrentId);
            const data = await res.json();
            const { book_id, customer_id, return_date } = data;
            setBookrent({ book_id, customer_id, return_date });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (params.id) {
            getBookrent(params.id)
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className='col-md-3 mx-auto'>
            <h2 className='mb-3 text-center'>Bookrent</h2>
            <form onSubmit={handleSubmit} className='row g-3'>
                <div className='col-md-12'>
                    <label htmlFor='book_id' className='form-label'>book_id</label>
                    <input type='number' name='book_id' value={bookrent.book_id} onChange={handleInputChange} className='form-control' id='book_id' autoFocus required />
                </div>
                <div className='col-md-6'>
                    <label htmlFor='customer_id' className='form-label'>customer_id</label>
                    <input type='number' name='customer_id' value={bookrent.customer_id} onChange={handleInputChange} className='form-control' id='customer_id' required />
                </div>
                <div className='col-md-6'>
                    <label htmlFor='return_date' className='form-label'>return_date</label>
                    <input type='date' name='return_date' value={bookrent.return_date} onChange={handleInputChange} className='form-control' id='return_date' />
                </div>
                <div className='col-md-12'>
                    {
                        params.id ? (
                            <button type='submit' className='btn btn-primary'>Update</button>
                        ) : (
                            <button type='submit' className='btn btn-success'>Create</button>
                        )
                    }

                </div>
            </form>
        </div>
    );
};

export default BookrentForm;