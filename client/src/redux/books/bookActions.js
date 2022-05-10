import Axios from 'axios';
 
export const GET_ALL_BOOKS = 'GET_ALL_BOOKS';
export const GET_ALL_BOOKS_SUCCESS = 'GET_ALL_BOOKS_SUCCESS';
export const GET_ALL_BOOKS_FAILURE = 'GET_ALL_BOOKS_FAILURE';

export const GET_BOOK = 'GET_BOOK';
export const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS';
export const GET_BOOK_FAILURE = 'GET_BOOK_FAILURE';

export const CREATE_BOOK = 'CREATE_BOOK';
export const CREATE_BOOK_SUCCESS = 'CREATE_BOOK_SUCCESS';
export const CREATE_BOOK_FAILURE = 'CREATE_BOOK_FAILURE';

export const UPDATE_BOOK = 'UPDATE_BOOK';
export const UPDATE_BOOK_SUCCESS = 'UPDATE_BOOK_SUCCESS';
export const UPDATE_BOOK_FAILURE = 'UPDATE_BOOK_FAILURE';

export const DELETE_BOOK = 'DELETE_BOOK';
export const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';
export const DELETE_BOOK_FAILURE = 'DELETE_BOOK_FAILURE';

export const UPDATE_INPUT = 'UPDATE_INPUT';
export const UPDATE_INPUT_SUCCESS = 'UPDATE_INPUT_SUCCESS';
export const UPDATE_INPUT_FAILURE = 'UPDATE_INPUT_FAILURE';


// Get all books

export const getAllBooks = () => {
    return async(dispach) => {
        try {
            dispach({type:GET_ALL_BOOKS});
            let dataUrl = `http://localhost:3031/api/books`;
            let response = await Axios.get(dataUrl);
            dispach({type:GET_ALL_BOOKS_SUCCESS,payload:response.data})
        } 
        catch (error) {
           dispach({type:GET_ALL_BOOKS_FAILURE,payload:error}) 
        }

    }
}

// GET single book
export const getBook =(bookId)=>{
    return async(dispach) =>{
        try {
        dispach({type:GET_BOOK})
        let dataUrl= `http://localhost:3031/api/books/${bookId}`;
        let response = await Axios.get(dataUrl);
         dispach({type: GET_BOOK_SUCCESS,payload:response.data});
        }
         catch (error)
         {
            dispach({type:GET_BOOK_FAILURE,payload:error})  
        }
    }
}


// create a new book
export const createBook = (book) =>{
    return async(dispach) => {
        try {
            dispach({type:CREATE_BOOK});
            let dataUrl=`http://localhost:3031/api/createBook`;
            let response = await Axios.post(dataUrl,book);
            dispach({type:CREATE_BOOK_SUCCESS,payload:response.data})
        } 
        catch (error)
         {
            dispach({type:CREATE_BOOK_FAILURE,payload:error})
        }
    }
}

//update input

export const updateInput = (key,value) =>{
    return{
        type: UPDATE_INPUT,
        payload:{key,value}
    }
}
//update book
export const updateBook = (bookId,book) => {
    return async (dispach) => {
        try {
            dispach({type:UPDATE_BOOK});
            let dataUrl=`http://localhost:3031/api/books/${bookId}`;
            let response = await Axios.put(dataUrl,book);
            dispach({type:UPDATE_BOOK_SUCCESS,payload:response.data})
            
        } catch (error) {
            dispach({type:UPDATE_BOOK_FAILURE,payload:error})   
        }
    }

}

// delete book
export  const deleteBook = (bookId) => {
    return async (dispach) => {
        try {
            dispach({type:DELETE_BOOK});
            let dataUrl=`http://localhost:3031/api/books/${bookId}`;
            let response = await Axios.delete(dataUrl);
            dispach({type:DELETE_BOOK_SUCCESS,payload:response.data})
             dispach(getAllBooks())            
        } catch (error) {
            dispach({type:DELETE_BOOK_FAILURE,payload:error})   
        }
    }
} 