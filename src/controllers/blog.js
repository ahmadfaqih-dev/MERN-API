exports.createBlogPost = (req, res, next) => {
    const title = req.body.title;
    const image = req.body.image;
    const body = req.body.body;

    const result = {
    message: "Create Post Success",
    data: {
        id: 1,
        title: title,
        image: image,
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