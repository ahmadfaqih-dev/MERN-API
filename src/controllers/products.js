module.exports = {
    createProduct: (req, res, next) => {
        const name = req.body.name;
        const price = req.body.price;
        res.json(
            {
                messag: 'Create Product Success',
                data: {
                    id: 1,
                    name: name,
                    price: price
                }
            }
        );
        next();

    },
    getAllProducts: (req, res, next) => {
        res.json(
            {
                messag: 'Get All Product Success',
                data: {
                    id: 1,
                    name: 'Kopi Hideng',
                    price: 40000
                }
            }
        );
        next();
    }
}


