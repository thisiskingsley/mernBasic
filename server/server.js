const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/product');

require('dotenv').config();

const db = process.env.MONGO_URI;

mongoose
	.connect(db, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

// prettier-ignore

//Body-Parser Middleware (for parsing <form> data from a POST request.)
//(May not need it in React)
app.use(express.urlencoded({extended: true}));
//Body-Parser (for parsing JSON data from a POST request)
app.use(express.json());
//Middleware that allows access to XMLHttpRequests,
//that is otherwise blocked by CORS(Cross-Origin Resource Sharing) policy.
app.use(cors());

//INDEX ROUTE
app.get('/products', async (req, res) => {
	const products = await Product.find({});
	res.send(products);
});

//SHOW ROUTE
app.get('/products/:id', async (req, res) => {
	const { id } = req.params;
	const foundProduct = await Product.findById(id);
	res.send(foundProduct);
});

//CREATE ROUTE
app.post('/products', async (req, res) => {
	//Created a new product
	const { productName, price, category } = req.body;

	const newProduct = new Product({
		name: productName,
		price,
		category,
	});
	await newProduct.save();
	res.send(newProduct);
});

//UPDATE ROUTE
app.put('/products/:id', async (req, res) => {
	const { id } = req.params;
	const { productName, price, category } = req.body;

	const body = {
		name: productName,
		price,
		category,
	};

	const updatedProduct = await Product.findByIdAndUpdate(id, body, {
		new: true,
		runValidators: true,
	});

	res.send(updatedProduct);
});

//DELETE ROUTE
app.delete('/products/:id', async (req, res) => {
	const { id } = req.params;
	const deletedProduct = await Product.findByIdAndDelete(id);
	res.send(deletedProduct);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
	console.log(`APP IS LISTENING ON PORT ${port}!`);
});
