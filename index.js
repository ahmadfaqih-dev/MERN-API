const express = require('express');

const app =express();

app.use(() => {
    console.log('hello server..');
    console.log('Hello kawan');
})

app.listen(4000);