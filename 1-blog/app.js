const express = require('express');

const app = express();

const port = process.env.PORT || 3000;


// make any file inside public folder accessable without creating routes for each file
app.use(express.static(__dirname + '/public'));

// set ejs as a view engine
app.set('view engine', 'ejs');
// set the views folder
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    // console.log(__dirname);
    //res.sendFile( __dirname +  '/views/index.html');
    res.render('index');
})
app.get('/about', (req, res) => {
    // console.log(__dirname);
    // res.sendFile( __dirname +  '/views/about.html');
    res.render('about');
})


// create a comments array to save the comments inside

const commentsArr = [
    {
        name: "Ahmad",
        commentDate: new Date("18.02.2021"),
        comment: "Hello this is my first comment"
    },
    {
        name: "Basem",
        commentDate: new Date("17.02.2021"),
        comment: "Hello I am Basem"
    },
    {
        name: "Nisreen",
        commentDate: new Date("16.02.2021"),
        comment: "I liked this blog"
    }
];


app.get('/blog', (req, res) => {
    // console.log(__dirname);
    // res.sendFile( __dirname +  '/views/about.html');
    res.render('blog');
})

app.get('/contact', (req, res) => {
    // console.log(__dirname);
    // res.sendFile( __dirname +  '/views/about.html');
    res.render('contact');
})

app.get('/marketing', (req, res) => {
    // console.log(__dirname);
    // res.sendFile( __dirname +  '/views/about.html');
    res.render('marketing');
})

app.listen(port, () => {
    console.log(`App is running on port: ${port}` );
})