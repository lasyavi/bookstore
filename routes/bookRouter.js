import  express  from "express";

const router = express.Router();
import {books,book,createBook,updateBook,deleteBook} from '../controllers/bookController'

// get all books
router.get('/books',books);


// get single book
router.get('/books/:id',book);

// post create book
router.post('/createbook',createBook);

// put update book
router.put('/books/:id',updateBook);

//delete delete book
router.delete('/books/:id',deleteBook);

//export default router;
module.exports = router;
