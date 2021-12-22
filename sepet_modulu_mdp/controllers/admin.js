const Product = require('../models/product');
const Category = require('../models/category');

exports.getProducts = (req, res, next) => {
    Product.getAll()
        .then(products => {
            res.render('admin/products', {
                title: 'Ürünler',
                products: products[0],
                path: '/admin/products'
            });
        })
}
exports.getAddProduct = (req, res, next) => {

    Category.getAll()
        .then((categories) => {
            res.render('admin/add-products', {
                title: 'Yeni Ürün',
                products: products[0],
                path: '/admin/add-products',
                categories: categories
            });
        })
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product();

    product.name = req.body.name;
    product.price = req.body.price;
    product.imageUrl = req.body.imageUrl;
    product.categoryid = req.body.categoryid;
    product.description = req.body.description;

    product.saveProduct()
        res.redirect('/');

}
exports.getEditProduct = (req, res, next) => {

    Product.getById(req.params.productid)
        .then((product) => {
            Category.getAll()
            .then((categories) =>{
                res.render('admin/edit-products', {
                    title: 'Ürünü Düzenle',
                    product: product[0][0],
                    path: '/admin/products',
                    categories:categories[0]
            })
            });
        })
}

exports.postEditProduct = (req, res, next) => {
    const product = new Product();
    product.id=req.body.id;
    product.name = req.body.name;
    product.price = req.body.price;
    product.imageUrl = req.body.imageUrl;
    product.categoryid = req.body.categoryid;
    product.description = req.body.description;

    Product.Update(product)
        res.redirect('/admin.products?action=edit');
}
exports.postDeleteProduct = (req, res, next) => {
    Product.DeleteById(req.body.productid);
    res.redirect('/admin/products?action=delete');
}