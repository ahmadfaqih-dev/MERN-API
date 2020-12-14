const express = require('express');

const app = express();
const router = express.Router();

router.use('/products', (req, res, next) => {
    console.log('url: ', req.originalUrl);
    console.log('method: ', req.method);
    res.json({name: "ahmad faqih", email: "ahamadfaqih@gmail.com"});
    next();
})

router.use('/price', (req, res, next) => {
    res.json({price: 3000000});
    next();
})

router.get('/customers', (req, res, next) => {
    res.json({title: "Customers"});
    next();
})

app.use('/', router);

// GET '/user' ==> [{name: faqih}]
 
app.listen(4000);