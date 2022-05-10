import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllBooks } from '../../redux/books/bookActions';
import { booksFeatureKey } from '../../redux/books/bookReducer'
import { Link } from 'react-router-dom';



const GetBooks = () => {
    let dispach = useDispatch();
    let bookInfo = useSelector((state) => {
        return state[booksFeatureKey];

    })
    let { books } = bookInfo
    useEffect(() => {
        dispach(getAllBooks())
    }, [])

    return (
        <>
            <div className='container'>
                <pre>{JSON.stringify(books)}</pre>

                <div className='row'>
                    <div className='col'>
                        {books.length > 0 ? (<>
                            {
                                books.map((book) => {
                                    return (
                                        <div className="card m-3 p-2" key={book._id}>
                                            <div className="card-header bg-danger text-white text-uppercase fw-">
                                                {book.title}
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title"><span className='fw-bold text-dark'>Isbn: </span>{book.isbn}</h5>
                                                <h5 className="card-title"><span className='fw-bold text-dark'>SubTitle: </span>{book.subTitle}</h5>
                                                <p className="card-text"> <span className='fw-bold text-dark'>Author: </span>{book.author}</p>
                                                <p className="card-text"> <span className='fw-bold text-dark'>Publisher: </span>{book.publisher}</p>
                                                <p className="card-text"> <span className='fw-bold text-dark'>PublishDate: </span>{book.publishDate}</p>
                                                <p className="card-text"> <span className='fw-bold text-dark'>Price: </span>{book.price}</p>
                                                <p className="card-text"> <span className='fw-bold text-dark'>Pages: </span>{book.pages}</p>
                                                <p className="card-text"><span className='fw-bold text-dark'>Description: </span>{book.description}</p>
                                                <Link to={`/books/${book._id}`} className="btn btn-primary"> View Details</Link>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </>) : null}



                    </div>
                </div>

            </div>
        </>
    );


}
export default GetBooks;