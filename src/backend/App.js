const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001;
const getProducts = require('./Products.js');
app.use(cors())
app.get('/', (req, res) => res.send('Hello Node!'));
app.get('/rest/products', (req, res) => {
    let products = getProducts();
    res.send(products);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));