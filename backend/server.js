const express = require('express');
const products = require('./data.js')

const app =express();

app.get('/', (req, res) => {
    res.send('Server is ready. Let\'s start coding :)');
});

app.get('/api/products', (req,res) => {
    
    res.send(products);
})

const port = process.env.PORT || 5000
app.listen(port, () => {console.log(`Serve at http://localhost:${port}`)});