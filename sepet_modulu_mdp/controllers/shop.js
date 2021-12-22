const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    const products = Product.getAll();
    res.render('shop/index', {
        title: 'Alışveriş',
        products: products,
        path: '/'
    });
}
exports.getProducts = (req, res, next) => {
    const products = Product.getAll();
    res.render('shop/products', {
        title: 'Ürünler',
        products: products[0],
        path: '/products'
    });
}
exports.getProduct = (req, res, next) => {
    const product = Product.getById(req.params.productid);

    res.render('shop/product-detail', {
        title: product.name,
        product: product,
        path: '/products'
    });
    res.redirect('/');
}
exports.getProductDetails = (req, res, next) => {
    const products = Product.getAll();
    res.render('shop/details', {
        title: 'Detaylar',
        path: '/details'
    });
}
exports.getCart = (req, res, next) => {
    const products = Product.getAll();
    res.render('shop/cart', {
        title: 'Cart',
        path: '/cart'
    });
}
exports.getOrders = (req, res, next) => {
    const products = Product.getAll();
    res.render('shop/orders', {
        title: 'Orders',
        path: '/orders'
    });
}

