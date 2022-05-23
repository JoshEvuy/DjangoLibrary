import React from 'react';

const BookItem = ({ book }) => {

    return (
        <div>
            title: {book.title},
            editorial: {book.editorial},
            author: {book.author},
            gender: {book.gender},
            author_country: {book.author_country},
            number_of_pages: {book.number_of_pages},
            year_edition: {book.year_edition},
            price: {book.price}
        </div>
    );

};

export default BookItem;