import { useEffect, useState } from "react";
import Book from "./book";
import axios from "axios";

function Read(){
  

              {/*I added the following JSON to the read component and stored it in a const variable.
                This will pass this read components data to our new books component.*/}
        const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
        .then(
            (response) =>{
                setData(response.data.books);
            }
        )
        .catch(
            (error) =>{
                console.log(error);
            }
        );
    }, []);
    
return(
    <div>
              {/*For each book, I have to pulled out one book. The object MyBook will give you access*/}
        <h2>Hello from my Read component</h2>
        <Book myBook = {data}></Book>
    </div>

);
}

export default Read;