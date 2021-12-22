const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes=require('./routes/admin');
const userRoutes=require('./routes/shop');


const connection = require('./utility/database');

//routes
app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//database bağlantı
connection.execute('SELECT * FROM products')
  .then((result) => {
    console.log(result[0]);
  })

app.listen(3000, () => {
  console.log('listening port on 3000');
});