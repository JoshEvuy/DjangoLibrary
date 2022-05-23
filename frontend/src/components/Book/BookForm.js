import React, { useEffect, useState } from 'react';
import * as BookServer from './BookServer';
import { useNavigate, useParams } from 'react-router-dom';

let current_year = new Date().getFullYear();

const BookForm = () => {

    const history = useNavigate();
    const params = useParams();

    const initialState = {
        title: '',
        editorial: '',
        author: '',
        gender: '',
        author_country: '',
        number_of_pages: 10,
        year_edition: '',
        price: 10
    };

    const [book, setBook] = useState(initialState);

    const handleInputChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            if (!params.id) {
                res = await BookServer.createBook(book);
                const data = await res.json();
                if (data.message === 'Success') {
                    setBook(initialState);
                }
            } else {
                await BookServer.updateBook(params.id, book);
            }

            history('/books', { replace: true });
        } catch (error) {
            console.log(error);
        }
    };

    const getBook = async (bookId) => {
        try {
            const res = await BookServer.getBook(bookId);
            const data = await res.json();
            const { title, editorial, author, gender, author_country, number_of_pages, year_edition, price } = data;
            setBook({ title, editorial, author, gender, author_country, number_of_pages, year_edition, price });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (params.id) {
            getBook(params.id)
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className='col-md-3 mx-auto'>
            <h2 className='mb-3 text-center'>Book</h2>
            <form onSubmit={handleSubmit} className='row g-3'>
                <div className='col-md-12'>
                    <label htmlFor='title' className='form-label'>title</label>
                    <input type='text' name='title' value={book.title} onChange={handleInputChange} className='form-control' id='title' autoFocus minLength={2} maxLength={60} required />
                </div>
                <div className='col-md-12'>
                    <label htmlFor='editorial' className='form-label'>editorial</label>
                    <input type='text' name='editorial' value={book.editorial} onChange={handleInputChange} className='form-control' id='editorial' minLength={2} maxLength={25} required />
                </div>
                <div className='col-6'>
                    <label htmlFor='author' className='form-label'>author</label>
                    <input type='text' name='author' value={book.author} onChange={handleInputChange} className='form-control' id='author' minLength={2} maxLength={40} required />
                </div>
                <div className='col-6'>
                    <label htmlFor='gender' className='form-label'>gender</label>
                    <input type='text' name='gender' value={book.gender} onChange={handleInputChange} className='form-control' id='gender' minLength={2} maxLength={20} required />
                </div>
                <div className='col-md-6'>
                    <label htmlFor='author_country' className='form-label'>author_country</label>
                    <input type='text' name='author_country' value={book.author_country} onChange={handleInputChange} className='form-control' id='author_country' minLength={2} maxLength={20} required />
                </div>
                <div className='col-md-6'>
                    <label htmlFor='number_of_pages' className='form-label'>number_of_pages</label>
                    <input type='number' name='number_of_pages' value={book.number_of_pages} onChange={handleInputChange} className='form-control' id='number_of_pages' min={1} max={1000} required />
                </div>
                <div className='col-md-6'>
                    <label htmlFor='year_edition' className='form-label'>year_edition</label>
                    <input type='text' name='year_edition' value={book.year_edition} onChange={handleInputChange} className='form-control' id='year_edition' placeholder={current_year} minLength={1} maxLength={5} required />
                </div>
                <div className='col-md-6'>
                    <label htmlFor='price' className='form-label'>price</label>
                    <input type='number' name='price' value={book.price} onChange={handleInputChange} className='form-control' id='price' min={1} max={1000} required />
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

export default BookForm;