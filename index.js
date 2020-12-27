const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const authRoutes = require('./src/routes/auth');
const blogRoutes = require('./src/routes/blog');

app.use(bodyParser.json()) // tipeJson

app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogRoutes);

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data});
})


// Mengatasi Error CORS ORIGIN
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, P ATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
});

 
app.listen(4000);