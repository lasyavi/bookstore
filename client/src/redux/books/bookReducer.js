import * as bookActions from './bookActions';


export const booksFeatureKey = "books";
let initialState = {
    errorMessage:"",
    books:[],
    book:{}
}

const bookReducer = (state=initialState,action) => {
    let {type,payload} = action;
    switch(type)
    {



   // get all books
   case bookActions.GET_ALL_BOOKS:
       return{
           ...state
       }

   // get all books success
      case bookActions.GET_ALL_BOOKS_SUCCESS:
          return{
              ...state,
              books: payload

          }
   // get all books failure
   case bookActions.GET_ALL_BOOKS_FAILURE:
       return{
           ...state,
           errorMessage: payload
       }


       //get single book
       case bookActions.GET_BOOK:
       return{
           ...state
       }

       //get single book success
       case bookActions.GET_BOOK_SUCCESS:
           return{
            ...state,
            book: payload
           }

       

       //get single book failure
      case bookActions.GET_BOOK_FAILURE:
          return{
       ...state,
       errorMessage: payload
          }
          // create book
          case bookActions.CREATE_BOOK:
       return{
           ...state
       }
          // create book success

          case bookActions.CREATE_BOOK_SUCCESS:
            return{
             ...state,
             
            }
          // create book failure

          case bookActions.CREATE_BOOK_FAILURE:
          return{
       ...state,
       
          }

          //update input
          case bookActions.UPDATE_INPUT:
              return{
                  ...state,
                  book: {
                      ...state.book,
                      [payload.key]:payload.value
                  }
              }

         //update book
         case bookActions.UPDATE_BOOK:
            return{
                ...state
            }
         //update book success

         case bookActions.UPDATE_BOOK_SUCCESS:
            return{
             ...state,
             
            }
         //update book failure

         
         case bookActions.UPDATE_BOOK_FAILURE:
            return{
         ...state,
         
            }



            
         //delete book
         case bookActions.DELETE_BOOK:
            return{
                ...state
            }
         //delete book success

         case bookActions.DELETE_BOOK_SUCCESS:
            return{
             ...state,
         
            }
         //delete book failure

         
         case bookActions.DELETE_BOOK_FAILURE:
            return{
         ...state,
         
            }
  

        default:
            return state;


    }
}




export {bookReducer};