exports.createProduct = (req, res, next) => {
    res.json(
        {
            messag: 'Create Product Success',
            data: {
                id: 1,
                name: 'Kopi luwak',
                price: 40000
            }
        }
    );
    next();
}

exports.getAllProducts = (req, res, next) => {
    res.json(
        {
            messag: "Get All Product",
            name: 'Kopi Toraja',
            price: 1000000
        }
    );
    next();
}

