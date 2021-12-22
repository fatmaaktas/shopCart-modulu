const connection = require('../utility/database');
// const products=[];
module.exports = class Product {

    constructor(name, price, imageUrl, description) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    saveProduct() {
        return connection.execute('INSERT INTO products (name, price, imageUrl, description, categoryid) VALUES (?, ?, ?, ?, ?)', [this.name, this.price, this.imageUrl, this.description, this.categoryid]);
    }

    static getAll() {
        return connection.execute('SELECT * FROM products');
    }

    static getById(id) {
        return connection.execute('SELECT * FROM products WHERE products.id=?', [id]);
    }
    static getPoductsByCategoryId(categoryid){

    }

    static Update(product) {
        return connection.execute('UPDATE products SET products.name=?, products.price=?, products.imageUrl=?, products.description=?, products.categoryid=? WHERE products.id=?', [product.name, product.price, product.imageUrl, products.description, product.categoryid]);
    }

    static DeleteById(id) {
        return connection.execute('DELETE FROM products WHERE id=?',[id]);
    }
}