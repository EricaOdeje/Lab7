
import { useEffect, useState } from "react";
import Book from "./book";
import axios from "axios";

{/* I added axios to our project by npm install axios, axios is a Promise based HTTP client.*/}

function Read(){
  


        const [data, setData] = useState([]);
        {/*useEffect is a React Hook that lets you synchronize a component with an external system.*/}
    useEffect(() => {
        {/* To make a http get call that will return the json data from and assign it to the component state. Use the react hook useState:.*/}
        axios.get('http://localhost:4000/api/books')
        .then(
            (response) =>{
                setData(response.data.mybooks);
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
            
        <h2>Hello from my Read component</h2>
        <Book myBook = {data}></Book>
    </div>

);
}

export default Read;