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

{/*//Here we are configuring express to use body-parser as middle-ware. 
The body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body. */}
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


{/* I added a post method on the Express Server that will console log both the title, 
author and cover of the object passed up by the React App */}
app.post('api/books', (req, res) => {
    console.log(req,body);
    res.send('Book Created!')
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/books', (req, res) => {
    const data = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }

        ];
        res.json({
            mybooks:data,
            "MyMessage":"Hello Data"
        })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})