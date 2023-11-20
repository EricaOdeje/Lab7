const express = require('express')
const app = express()
const port = 4000
    
{/* CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. 
This is done by bypassing the Access-Control-Allow-Origin headers, 
which specify which origins can access the API.*/}
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

{/* Here we are configuring express to use body-parser as middle-ware. 
The body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body. */}
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


{/* I needed to do include mongoose in my project and open a connection to my database. I got it from https://mongoosejs.com/docs/index.html. */}
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@advdatabases.zmkn2kd.mongodb.net/?retryWrites=true&w=majority');

}

{/* I created a data model using Schema Interface to represent the book object we have been creating and listing in the labs to-date.  */}
const bookSchema = new mongoose.Schema({
  title:String,
  cover:String,
  author:String
})

{/* I use the Schema to construct a database model */}
const bookModel = mongoose.model('books' ,bookSchema);

{/* I added a post method on the Express Server that will console log both the title, 
author and cover of the object passed up by the React App */}
app.post('/api/books', (req, res) => {
    console.log(req.body);

    {/* I wrote a method that will write data to your database. I used the create() function to create new documents. */}
    bookModel.create({
      title:req.body.title,
      cover:req.body.cover,
      author:req.body.author
    })
    .then(
      () =>{res.send("Data Received!")}
    )
    .catch(
      () =>{res.send("Data NOT Received!")}
    )
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

{/* I wrote a method that reads all data from the database and gets it to display on the react
app. */}
app.get('/api/books', async(req, res) => {
  let books = await bookModel.find({});
  console.log(books);
  res.json(books);
})

{/* I wrote a method that reads a book by id from my database in my server */}
app.get('/api/books/:id' ,async(req,res)=>{
  console.log(req.params.id);
  let book = await bookModel.findById({_id:req.params.id})
  res.send(book);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
