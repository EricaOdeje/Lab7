import BookItem from "./bookItem";


    {/*I used props as an argument to get data from read.js.*/}
function Book(props){
       {/*I used props to pass data from one component to another.*/}
        {/*The map function is used to create a new aray.*/}
    return props.myBook.map( 
            
        (book) => {
            return <BookItem mybook={book} key={book.id}></BookItem>
        }
    );
    }
    
    export default Book;