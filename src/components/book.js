import BookItem from "./bookItem";

function Book(props){
    return props.myBook.map( 
        (book) => {
            return <BookItem mybook={book} key={book.isbn}></BookItem>
        }
    );
    }
    
    export default Book;