const express = require('express');
const data = require('./data.js')

const app =express();

app.get('/', (req, res) => {
    res.send('Server is ready. Let\'s start coding :)');
});

app.get('/api/products', (req,res) => {
    
    res.send(data);
});

app.get('/api/products/:id', (req,res) => {
    const product = data.find(x => x._id === req.params.id);
    if(product) {
        res.send(product);
    }else {
        res.status(404).send({ message: 'Product not Found'});
    }
});

const port = process.env.PORT || 5000
app.listen(port, () => {console.log(`Serve at http://localhost:${port}`)});