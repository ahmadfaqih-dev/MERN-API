const {validationResult} = require('express-validator');

exports.createBlogPost = (req, res, next) => {
    const title = req.body.title;
    // const image = req.body.image;
    const body = req.body.body;

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        const err = new Error('Input value tidak sesuai');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }


    const result = {
    message: "Create Post Success",
    data: {
        id: 1,
        title: title,
        image: "image.jpg",
        body: body,
        created_at: "12/12/2020",
        author: {
            uid: 1,
            name: "Ahmad Faqih"
        }
        }
    }
    res.status(201).json(result);
}