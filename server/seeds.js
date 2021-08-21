// A file where we give ("seed") our database random data to start with. It just helps
// us start our app. Totally unneccessary to the actual application.
// So the "seedProducts" array of objects below is what we're throwing in the database
// to start with. Then we'll modify the database as we go.
// After we upload the "seed" data to the database initially,
// we'll never use this file again.

const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose
	.connect('mongodb://localhost:27017/farmStand', {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

// prettier-ignore
const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Organic Whole Milk',
        price: 2.69,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts)
	.then(res => {
		console.log(res);
	})
	.catch(e => {
		console.log(e);
	});
