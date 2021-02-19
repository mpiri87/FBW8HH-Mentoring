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

app.listen(port, () => {
    console.log(`App is running on port: ${port}` );
})