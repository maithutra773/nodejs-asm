import express from 'express';
const routes = express.Router();

// List product 
routes.get('/product',(req, res) => {
    res.json({
        message: "Successfully"
    })
});
// Chi tiết 
routes.get('/product/:id', (req, res) => {
    res.json({
        id: req.params.id,
        name: 'abc'
    })
});
// Thêm sản phẩm 
routes.get('/products', (req, res) => {
    console.log(req.body)
});
module.exports = routes;