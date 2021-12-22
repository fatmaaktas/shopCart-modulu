const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sepet_modulu',
    password: 'rootroot'
});

module.exports = connection.promise();