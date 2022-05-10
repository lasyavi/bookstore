
import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getBook,updateInput,updateBook} from '../../redux/books/bookActions';
import {booksFeatureKey} from '../../redux/books/bookReducer'
import { useNavigate,useParams} from 'react-router-dom';


const UpdateBook = () =>{
    let dispach = useDispatch();
    let bookId = useParams().id;
    let navigate = useNavigate();

    let selectedBookInfo = useSelector((state) =>
    {
        return state[booksFeatureKey];

    })
    let {book} = selectedBookInfo;
    let [submitted,setSubmitted] = useState(false);
    useEffect(() => {
        dispach(getBook(bookId))
    },[bookId])
    let handleInput = (event) =>{
        dispach(updateInput(event.target.name,event.target.value))

    }
    let submitBook = (event) => {
        event.preventDefault();
        dispach(updateBook(bookId,book));
        setSubmitted(true);
    }   
     return(
        <>
        { submitted ? (
            navigate('/admin')
        ):(
            <>
            <pre>{JSON.stringify(book)}</pre>
            <div className='container text-center'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='text-center text-dark'>Update Book</h1>
                        <div className='form-group justify-content-center m-3'>
                            <form onSubmit={submitBook} className="border border-dark m-3 ">
                                <div className='form-group m-3'>
                                    <input
                                    name="isbn"
                                    placeholder='isbn'
                                    onChange={handleInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='form-group m-3' >
                                    <input
                                    name="title"
                                    placeholder='title'
                                    onChange={handleInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='form-group m-3'>
                                    <input
                                    name="subTitle"
                                    placeholder='subTitle'
                                    onChange={handleInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='form-group m-3'>
                                    <input
                                    name="author"
                                    placeholder='author'
                                    onChange={handleInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='form-group m-3'>
                                    <input
                                    name="publisher"
                                    placeholder='publisher'
                                    onChange={handleInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='form-group m-3'>
                                    <input
                                    name="pages"
                                    placeholder='pages'
                                    onChange={handleInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='form-group m-3'>
                                    <input
                                    name="price"
                                    placeholder='price'
                                    onChange={handleInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='form-group m-3'>
                                    <input
                                    name="description"
                                    placeholder='description'
                                    onChange={handleInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='m-3'>
                                   <input  type="submit" value="Update" className='btn btn-primary text-white '/> 

                                </div>

                            </form>

                        </div>
                    </div>

                </div>

            </div>
            
            </>
        )}
        </>
    );
    
    
    
    
    }
    export default UpdateBook;