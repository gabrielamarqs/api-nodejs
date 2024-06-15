const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoutes = require('./routes/product.route');
const app = express() 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoutes);

mongoose.connect('mongodb+srv://gabriela2013ms:daniela@cluster0.rugqjbe.mongodb.net/node-api').then(() => {
    console.log('Connected!')
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    });      
}).catch(() => {
    console.log('Connection failed!')
});

