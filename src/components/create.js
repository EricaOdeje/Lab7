import { useState } from "react";
import axios from "axios";

function Create() {
{/*The React useState Hook allows us to track state in a function component.*/}
    const [title, setTitle] = useState('');
    const [cover, SetCover] = useState('');
    const [author, setAuthor] = useState('');

    {/*This function will receive the form data if form validation is successful.*/}
    const handleSumbit = (e) =>{
        e.preventDefault();
        console.log("Title: "+title+
        "Cover: "+cover+
        "Author:"+author);

        const book = {
            title:title,
            cover:cover,
            author: author
        };

        axios.post('http://localhost:4000/api/books' ,book)
        .then()
        .catch();

    };
    return (
        <div>
            <h2>This is my Create component</h2>

    
            <form onSumbit ={handleSumbit}>
                
                {/*I modified the Create component so that it now includes a form that will upload data to a server*/}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { SetCover(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div>
                    <input type= "submit" value="Create book"></input>
                </div>
            </form>
        </div>
    )
}

export default Create;