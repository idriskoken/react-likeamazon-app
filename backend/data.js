const data = {
    products : [
        {
            _id: '1',
            name: 'Nike Slim Shirt',
            category:  'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'gigh quality product',
        },
        {
            _id: '2',
            name: 'Adidas Fit Shirt',
            category:  'Shirts',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 3,
            brand: 'Adidas',
            rating: 5,
            numReviews: 17,
            description: 'gigh quality product',
        },
        {
            _id: '3',
            name: 'Lucee Slim Shirt',
            category:  'Shirts',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 32,
            brand: 'Lucee',
            rating:3,
            numReviews:25,
            description: 'gigh quality product',
        },
        {
            _id: '4',
            name: 'Nike Slim Shirt',
            category:  'Shirts',
            image: '/images/p4.jpg',
            price: 120,
            countInStock: 5,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 40,
            description: 'gigh quality product',
        },
        {
            _id: '5',
            name: 'Puma Slim Shirt',
            category:  'Pants',
            image: '/images/p5.jpg',
            price: 137,
            countInStock: 0,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 32,
            description: 'gigh quality product',
        },
        {
            _id: '6',
            name: 'Nike Slim Shirt',
            category:  'Pants',
            image: '/images/p6.jpg',
            price: 139,
            countInStock: 5,
            brand: 'adidas',
            rating: 4.5,
            numReviews: 50,
            description: 'gigh quality product',
        }
    ]
};

module.exports.products= data.products;