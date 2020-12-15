const express = require('express');

const app = express();

const productRoutes = require('./src/routes/products');


app.use('/', productRoutes);

// GET '/user' ==> [{name: faqih}]
 
app.listen(4000);