
import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { createBook} from '../../redux/books/bookActions';
import {booksFeatureKey} from '../../redux/books/bookReducer'
import { Link,useNavigate} from 'react-router-dom';


const AddBook = () =>{
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [book,setBook] = useState({
        isbn: " ",
        title: "",
        subTitle: " ",
        author:  "",
        publisher: "",
        pages:"" ,
        price: "",
        description: ""
    });
    let bookInfo = useSelector((state) =>{
        return state[booksFeatureKey];

    });
    let [submit,setSubmit] = useState(false);
    let updateInput = (event) =>{
        setBook({
            ...book,
            [event.target.name]:event.target.value
        })

    }
    let submitBook = (event) => {
        event.preventDefault();
        dispatch(createBook(book));
        setSubmit(true);


    }
    return(
        <>
        { submit ? (
            navigate('/admin')
        ):(
            <>
            <pre>{JSON.stringify(book)}</pre>
            <div className='container text-center'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='text-center text-dark'>Add Book</h1>
                        <div className='form-group justify-content-center m-3'>
                            <form onSubmit={submitBook} className="border border-dark m-3 ">
                                <div className='form-group m-3'>
                                    <input
                                    name="isbn"
                                    placeholder='isbn'
                                    onChange={updateInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='form-group m-3' >
                                    <input
                                    name="title"
                                    placeholder='title'
                                    onChange={updateInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='form-group m-3'>
                                    <input
                                    name="subTitle"
                                    placeholder='subTitle'
                                    onChange={updateInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='form-group m-3'>
                                    <input
                                    name="author"
                                    placeholder='author'
                                    onChange={updateInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='form-group m-3'>
                                    <input
                                    name="publisher"
                                    placeholder='publisher'
                                    onChange={updateInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='form-group m-3'>
                                    <input
                                    name="pages"
                                    placeholder='pages'
                                    onChange={updateInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='form-group m-3'>
                                    <input
                                    name="price"
                                    placeholder='price'
                                    onChange={updateInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='form-group m-3'>
                                    <input
                                    name="description"
                                    placeholder='description'
                                    onChange={updateInput}
                                    required
                                    type='text'
                                    className='form-control'
                                     />

                                </div>
                                <div className='m-3'>
                                   <input  type="submit" value="Create" className='btn btn-primary text-white '/> 

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
    export default AddBook;