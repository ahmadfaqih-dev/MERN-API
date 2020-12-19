const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const productRoutes = require('./src/routes/products');

app.use(bodyParser.json()) // tipeJson

app.use('/', productRoutes);


// Mengatasi Error CORS ORIGIN
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
});



// GET '/user' ==> [{name: faqih}]
 
app.listen(4000);